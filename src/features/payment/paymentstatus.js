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
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 1;

  const orderId = window.location.pathname.split("/").pop();

  const checkStatus = async () => {
    if (retryCount > maxRetries) {
      setErrorMessage("Payment status update failed after multiple attempts.");
      setLoading(false);
      navigate(`/failure/${orderId || "1"}`);
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      if (!orderId) throw new Error("No order ID provided");

      // Fetch payment status
      const response = await fetch(
        `${BASE_URL}/payment/phonepay/status/${encodeURIComponent(orderId)}`
      );
      const data = await response.json();
      const paymentState = data.status;
      setStatus(paymentState);

      if (data.success && paymentState === "completed") {
        const planId = localStorage.getItem("CheckoutPlanId");
        const storedUserData = JSON.parse(localStorage.getItem("User343"));
        const token = storedUserData?.logedInUser?.accessToken;

        if (!token) throw new Error("Missing auth token");

        // Prepare request body
        const requestBody = { id: orderId, ...(planId && { planId }) };

        // Update payment status
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

        if (!updateResponse.ok || updateData?.statusCode !== 200) {
          throw new Error(
            updateData?.message || "Failed to update payment status"
          );
        }

        toast.success("Payment successful!");
        navigate(`/success/1`);
      } else {
        switch (paymentState) {
          case "pending":
            setStatus("Payment is still pending. Please wait.");
            navigate(`/payment-status/${orderId}`);
            break;
          case "failed":
          case "error":
            setRetryCount((prev) => prev + 1);
            setTimeout(checkStatus, 2000);
            break;
          case "cancelled":
            setStatus("Payment was cancelled.");
            navigate(`/failure/${orderId}`);
            break;
          default:
            setStatus("Unknown payment status.");
            navigate(`/failure/${orderId}`);
            break;
        }
      }
    } catch (error) {
      if (retryCount < maxRetries) {
        setRetryCount((prev) => prev + 1);
        setTimeout(checkStatus, 2000);
      } else {
        setErrorMessage(
          error.message || "Unable to check payment status. Please try again."
        );
        navigate(`/failure/${orderId || "1"}`);
      }
    } finally {
      if (retryCount >= maxRetries || status === "completed") {
        setLoading(false);
      }
    }
  };

  const cleanup = () => {
    localStorage.removeItem("CheckoutPlanId");
  };

  useEffect(() => {
    checkStatus();
    return cleanup;
  }, [orderId]);

  return (
    <div className="payment-status-container">
      <div className="status-card">
        <h1 className="status-heading">Payment Status Check</h1>
        <button
          className="check-button"
          onClick={() => {
            setRetryCount(0);
            checkStatus();
          }}
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
                setRetryCount(0);
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
