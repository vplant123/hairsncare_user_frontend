import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BASE_URL from "../../Config";
import "./Status.css";

function Status() {
  const navigate = useNavigate();
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const pathSegments = window.location.pathname.split("/");
  const orderId = pathSegments[pathSegments.length - 1];

  const deleteOrderAndPayments = async (orderId) => {
    try {
      const storedUserData = JSON.parse(localStorage.getItem("User343"));
      console.log("Deleting order and payments for orderId:", orderId);
      const response = await fetch(
        `${BASE_URL}/payment/delete-order-and-payments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: storedUserData.logedInUser.accessToken,
          },
          body: JSON.stringify({ orderId }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log("Order and payments deleted:", data);
      } else {
        console.error("Failed to delete order and payments:", data.message);
      }
    } catch (error) {
      console.error("Error calling delete-order-and-payments:", error);
    }
  };

  const handlePhonePeCallback = async (status, orderId) => {
    try {
      const storedUserData = JSON.parse(localStorage.getItem("User343"));
      const token = storedUserData?.logedInUser?.accessToken;

      if (!token) {
        throw new Error("Authentication token not found");
      }

      const updateData = {
        orderId,
        paymentStatus: status === "success" ? "success" : "failed",
      };

      const res = await fetch(
        `${BASE_URL}/bookAppointment/update-payment-order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updateData),
        }
      );

      const responseData = await res.json();
      console.log("Payment callback response:", responseData);

      if (status === "success") {
        toast.success("Payment successful, your order is confirmed!");
        navigate("/success/2");
      } else {
        await deleteOrderAndPayments(orderId); // Delete order on failure
        toast.error("Payment failed, please try again.");
        navigate("/failure/2");
      }
    } catch (error) {
      console.error("Error handling payment callback:", error.message);
      await deleteOrderAndPayments(orderId); // Delete order on error
      toast.error("There was a problem updating your payment status.");
      navigate("/failure/2");
    }
  };

  const checkStatus = async () => {
    setLoading(true);
    setErrorMessage("");

    try {
      if (!orderId) {
        throw new Error("No order ID provided");
      }

      // Fetch payment status
      const response = await fetch(
        `${BASE_URL}/payment/phonepay/status/${encodeURIComponent(orderId)}`
      );
      const data = await response.json();
      console.log("Payment status data:", data);

      const paymentState = data.status;
      setStatus(paymentState);

      if (data.success && paymentState === "completed") {
        await handlePhonePeCallback("success", orderId);
      } else {
        switch (paymentState) {
          case "pending":
            console.log("Payment is still pending");
            setStatus("Payment is still pending. Please wait.");
            navigate(`/pending/${orderId}`);
            break;
          case "failed":
            await handlePhonePeCallback("failed", orderId);
            break;
          case "cancelled":
            await handlePhonePeCallback("failed", orderId);
            break;
          case "error":
            await handlePhonePeCallback("failed", orderId);
            break;
          default:
            console.log("Unknown payment state");
            await handlePhonePeCallback("failed", orderId);
            break;
        }
      }
    } catch (error) {
      setErrorMessage(
        error.message ||
          "Network issue: Unable to check payment status. Please try again later."
      );
      console.error("Error fetching payment status:", error);
      navigate(`/failure/${orderId || "1"}`);
    } finally {
      setLoading(false);
    }
  };

  // Cleanup function to remove planId from localStorage
  const cleanup = () => {
    const planIdBeforeCleanup = localStorage.getItem("CheckoutPlanId");
    console.log("Cleaning up, planId before removal:", planIdBeforeCleanup);
    localStorage.removeItem("CheckoutPlanId");
    console.log(
      "PlanId after removal:",
      localStorage.getItem("CheckoutPlanId")
    );
  };

  useEffect(() => {
    // Log localStorage state when component mounts
    console.log("Component mounted, checking localStorage:");
    console.log("CheckoutPlanId:", localStorage.getItem("CheckoutPlanId"));
    console.log("OrderId:", orderId);

    checkStatus();
    // Cleanup when component unmounts
    return () => {
      console.log("Component unmounting, cleaning up planId");
      cleanup();
    };
  }, [orderId]);

  return (
    <div className="payment-status-container">
      <div className="status-card">
        <h1 className="status-heading">Payment Status Check</h1>

        <button
          className="check-button"
          onClick={checkStatus}
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="loading-spinner"></span>
              Checking Status...
            </>
          ) : (
            "Check PhonePe Payment Status"
          )}
        </button>

        {status && !errorMessage && (
          <div className="status-message">{status}</div>
        )}

        {errorMessage && (
          <div className="error-container">
            <i className="fa fa-times-circle error-icon"></i>
            <h2 className="error-heading">Error!</h2>
            <p className="error-message">{errorMessage}</p>
            <button
              className="retry-button"
              onClick={() => {
                setErrorMessage("");
                checkStatus();
              }}
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Status;
