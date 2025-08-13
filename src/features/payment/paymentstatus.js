import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BASE_URL from "../../Config";
import "./Status.css";

function PaymentStatus() {
  const navigate = useNavigate();
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const pathSegments = window.location.pathname.split("/");
  const orderId = pathSegments[pathSegments.length - 1];

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
        // Retrieve planId from localStorage (set during checkout)
        const planId = localStorage.getItem("CheckoutPlanId");
        console.log("Retrieved planId from localStorage:", planId);
        console.log("All localStorage items:", Object.keys(localStorage));
        console.log("Full localStorage content:", {
          CheckoutPlanId: localStorage.getItem("CheckoutPlanId"),
          User343: localStorage.getItem("User343"),
        });
        // Continue even if planId is not found, it might not be required for all payments

        // Get auth token
        const storedUserData = JSON.parse(localStorage.getItem("User343"));
        const token = storedUserData?.logedInUser?.accessToken;
        if (!token) {
          throw new Error("Missing auth token");
        }

        // Prepare request body
        const requestBody = { id: orderId };
        if (planId) {
          requestBody.planId = planId;
        }

        // Call update-payment API
        const updateResponse = await fetch(
          `${BASE_URL}/bookAppointment/update-payment`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(requestBody),
          }
        );

        const updateData = await updateResponse.json();
        console.log("updateddata", updateData);

        if (!updateResponse.ok || updateData?.statusCode !== 200) {
          throw new Error(
            updateData?.message || "Failed to update payment status"
          );
        }

        console.log("Payment completed successfully");
        toast.success("Payment successful!");
        navigate(`/success/${orderId}`);
      } else {
        switch (paymentState) {
          case "pending":
            console.log("Payment is still pending");
            setStatus("Payment is still pending. Please wait.");
            navigate(`/pending/${orderId}`);
            break;
          case "failed":
            console.log("Payment failed");
            setStatus("Payment failed. Please try again.");
            navigate(`/failure/${orderId}`);
            break;
          case "cancelled":
            console.log("Payment was cancelled");
            setStatus("Payment was cancelled.");
            navigate(`/failure/${orderId}`);
            break;
          case "error":
            console.log("There was an error processing the payment");
            setStatus("There was an error processing the payment.");
            navigate(`/failure/${orderId}`);
            break;
          default:
            console.log("Unknown payment state");
            setStatus("Unknown payment status.");
            navigate(`/failure/${orderId}`);
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

export default PaymentStatus;
