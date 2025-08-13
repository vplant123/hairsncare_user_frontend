import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BASE_URL from "../../Config";

export default function Status({ setTitle }) {
  const { id: orderId } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [state, setState] = useState(null);
  const [error, setError] = useState("");
  // const [hasFetched, setHasFetched] = useState(false);
  // const [hasNavigated, setHasNavigated] = useState(false);

  async function getstatus() {
    try {
      console.log("Fetching payment status...");
      const payRes = await fetch(
        `${BASE_URL}/payment/phonepay/status/${encodeURIComponent(orderId)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (payRes.ok) {
        console.log("Payment status fetched successfully");
        const data = await payRes.json();
        setState(data.status);
      } else {
        console.log("Failed to fetch payment status");
        setError("Failed to fetch payment status");
        navigate(`/failure/${orderId}`);
      }
    } catch (error) {
      setError("An error occurred while fetching payment status");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    console.log("Component mounted");
    console.log("orderId:", orderId);
    console.log("BASE_URL:", BASE_URL);
    setTitle?.("Payment Status");
    console.log("Fetching payment status for orderId:", orderId);
    getstatus();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: 60 }}>
      {loading ? (
        <div>Checking your payment status…</div>
      ) : error ? (
        <div style={{ color: "#dc3545", fontWeight: "bold" }}>{error}</div>
      ) : state === "COMPLETED" ? (
        <div style={{ color: "#28a745", fontWeight: "bold" }}>
          Payment Successful! Redirecting…
        </div>
      ) : (
        <div style={{ color: "#dc3545", fontWeight: "bold" }}>
          Payment Failed. Redirecting…
        </div>
      )}
    </div>
  );
}
