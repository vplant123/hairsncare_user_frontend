import React, { useEffect, useState, useRef } from "react";
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
  const maxRetries = 3;
  const maxPollingDuration = 300000; // 5 minutes
  const pollingStartTime = useRef(Date.now());
  const timeoutRef = useRef(null);

  const orderId = window.location.pathname.split("/").pop();

  const checkStatus = async () => {
    // Check if maximum polling duration has been exceeded
    const currentTime = Date.now();
    const elapsedTime = currentTime - pollingStartTime.current;
    
    if (elapsedTime > maxPollingDuration) {
      setErrorMessage("Payment status check timed out. Please contact support if payment was deducted.");
      setLoading(false);
      navigate(`/failure/${orderId || "1"}`);
      return;
    }

    if (retryCount > maxRetries) {
      setErrorMessage("Payment status update failed after multiple attempts.");
      setLoading(false);
      navigate(`/failure/${orderId || "1"}`);
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      if (!orderId || orderId === "undefined" || orderId === "null") {
        throw new Error("Invalid or missing order ID");
      }

      // Validate order ID format (basic validation)
      if (orderId.length < 10 || !/^[a-zA-Z0-9]+$/.test(orderId)) {
        throw new Error("Invalid order ID format");
      }

      // Fetch payment status
      const response = await fetch(
        `${BASE_URL}/payment/phonepay/status/${encodeURIComponent(orderId)}`
      );
      
      // Check if the response is valid
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Order not found. Please check your order ID.");
        } else if (response.status === 400) {
          throw new Error("Invalid order ID provided.");
        }
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();

      // Handle specific error codes even when HTTP status is 200
      const upperCode = String(data?.code || "").toUpperCase();
      if (upperCode === "ORDER_NOT_FOUND") {
        throw new Error("Order not found. Please check your order ID.");
      }

      // Check if the response has the expected structure
      if (!data || typeof data.status === "undefined") {
        throw new Error("Invalid response from payment server");
      }

      const paymentState = String(data.status).toLowerCase();
      setStatus(paymentState);

      // Treat both "completed" and "success" as successful payment states
      if (data.success && (paymentState === "completed" || paymentState === "success")) {
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

        // const updateData = await updateResponse.json();
        const updateData =
          updateResponse.status === 204 ? null : await updateResponse.json();

        if (!updateResponse.ok || updateData?.statusCode !== 200) {
          throw new Error(
            updateData?.message || "Failed to update payment status"
          );
        }

        toast.success("Payment successful!");
        navigate(`/success/1`);
        setLoading(false);
      } else {
        switch (paymentState) {
          case "pending":
            setStatus("Payment is still pending. Please wait...");
            setRetryCount((prev) => prev + 1);
            // Continue polling instead of navigating to same page
            timeoutRef.current = setTimeout(checkStatus, 3000);
            break;
          case "failed":
          case "error":
            setRetryCount((prev) => prev + 1);
            if (retryCount < maxRetries) {
              setStatus("Payment failed, retrying...");
              timeoutRef.current = setTimeout(checkStatus, 2000);
            } else {
              setStatus("Payment failed after multiple attempts.");
              navigate(`/failure/${orderId}`);
              setLoading(false);
            }
            break;
          case "cancelled":
            setStatus("Payment was cancelled.");
            navigate(`/failure/${orderId}`);
            setLoading(false);
            break;
          default:
            setStatus("Unknown payment status.");
            navigate(`/failure/${orderId}`);
            setLoading(false);
            break;
        }
      }
    } catch (error) {
      console.error("Payment status check error:", error);
      
      // Don't retry for certain types of errors
      const nonRetryableErrors = [
        "Invalid or missing order ID",
        "Invalid order ID format", 
        "Order not found",
        "Invalid order ID provided",
        "Invalid response from payment server"
      ];
      
      const isNonRetryable = nonRetryableErrors.some(errorMsg => 
        error.message.includes(errorMsg)
      );
      
      if (isNonRetryable || retryCount >= maxRetries) {
        setErrorMessage(
          error.message || "Unable to check payment status. Please verify your order ID."
        );
        setLoading(false);
        // Don't navigate immediately for invalid order IDs, let user see the error
        if (!error.message.includes("Invalid") && !error.message.includes("Order not found")) {
          navigate(`/failure/${orderId || "1"}`);
        }
      } else {
        setRetryCount((prev) => prev + 1);
        setStatus("Network error, retrying...");
        timeoutRef.current = setTimeout(checkStatus, 2000);
      }
    }
  };

  const cleanup = () => {
    localStorage.removeItem("CheckoutPlanId");
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    pollingStartTime.current = Date.now();
    checkStatus();
    return cleanup;
  }, [orderId]);

  return (
    <div className="payment-status-container">
      <div className="status-card">
        <h1 className="status-heading">Payment Status Check</h1>
        
        {loading && (
          <div className="loading-container">
            <span className="loading-spinner"></span>
            <p>Checking Status...</p>
            <small>Order ID: {orderId}</small>
          </div>
        )}
        
        <button
          className="check-button"
          onClick={() => {
            setRetryCount(0);
            pollingStartTime.current = Date.now();
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
            checkStatus();
          }}
          disabled={loading}
        >
          {loading ? (
            "Checking..."
          ) : (
            "Check PhonePe Payment Status"
          )}
        </button>
        
        {status && !errorMessage && (
          <div className="status-message">
            <p>{status}</p>
            {loading && <small>Please wait while we verify your payment...</small>}
          </div>
        )}
        
        {errorMessage && (
          <div className="error-container">
            <i className="fa fa-times-circle error-icon"></i>
            <h2 className="error-heading">Error!</h2>
            <p className="error-message">{errorMessage}</p>
            <div className="error-actions">
              <button
                className="retry-button"
                onClick={() => {
                  setErrorMessage("");
                  setRetryCount(0);
                  pollingStartTime.current = Date.now();
                  if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                  }
                  checkStatus();
                }}
              >
                Try Again
              </button>
              <button
                className="home-button"
                onClick={() => navigate("/")}
                style={{
                  marginLeft: "10px",
                  backgroundColor: "#6c757d",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                Go to Home
              </button>
            </div>
            {errorMessage.includes("Invalid") && (
              <div style={{ 
                marginTop: "15px", 
                padding: "10px", 
                backgroundColor: "#f8f9fa", 
                borderRadius: "5px",
                fontSize: "14px",
                color: "#6c757d"
              }}>
                <strong>Need help?</strong>
                <ul style={{ marginTop: "5px", paddingLeft: "20px" }}>
                  <li>Check if you have the correct payment confirmation</li>
                  <li>Contact support if payment was deducted</li>
                  <li>Try accessing the page from your payment confirmation email</li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default PaymentStatus;
