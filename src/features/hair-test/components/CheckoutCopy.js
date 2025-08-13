import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BASE_URL from "../../../Config";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";

function Checkout({ testId }) {
  const [selectedOption, setSelectedOption] = useState("rs500");
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    // Store the selected planId in localStorage
    const selectedPlanId =
      option === "rs500"
        ? "66194c51e6c1744156eb35d2"
        : "66194c29e6c1744156eb35cf";

    console.log("Selected planId:", selectedPlanId);
    localStorage.setItem("CheckoutPlanId", selectedPlanId);
    console.log("get planId ", localStorage.getItem("CheckoutPlanId"));
    console.log("Stored planId in localStorage:", selectedPlanId);
  };

  const content = useSelector((state) => state.content?.plan);
  console.log("testIdtestIdtestIdtestId", content);

  let p1 = content?.find((e) => e?.name === "Local Plan");
  let p2 = content?.find((e) => e?.name === "Premium Plan");

  let storedUserData = JSON.parse(localStorage.getItem("User343"));

  const [openC, setOpenC] = useState(false);
  const [code, setCode] = useState("");
  const [couponData, setCouponData] = useState("");
  const [discount, setDiscount] = useState("");

  const applyCoupon = async () => {
    if (!code) {
      toast.error("Please enter a coupon code");
      return;
    }
    try {
      const response = await fetch(`${BASE_URL}/users/applyCoupon`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: storedUserData?.logedInUser?.accessToken,
        },
        body: JSON.stringify({ code, type: "1" }),
      });
      const data = await response.json();
      console.log("sjkorjf", data);
      if (data?.statusCode === 200) {
        setDiscount(data?.data?.percent);
        setCouponData(data?.data);
        toast.success("Coupon applied successfully");
      } else {
        toast.error(data?.message || "Invalid coupon code");
      }
    } catch (error) {
      toast.error("Something went wrong, try again");
      console.error("Error applying coupon:", error);
    }
  };

  return (
    <div className="ltn__checkout-payment-method payment-method mb-50">
      <div className="couponApply d-flex flex-column">
        <div onClick={() => setOpenC(!openC)} style={{ cursor: "pointer" }}>
          Have a coupon? <strong>Click here</strong>
        </div>
        {openC && (
          <div className="animate__animated animate__fadeInUp">
            <div style={{ marginTop: "10px" }}>
              If you have a coupon code, please apply it below.
            </div>
            <div className="couponApply-input-main">
              <input
                type="text"
                className="couponApply-input"
                placeholder="Enter Coupon Code"
                value={code}
                onChange={(e) => {
                  setCouponData("");
                  setDiscount("");
                  setCode(e.target.value);
                }}
              />
              <button
                className="couponApply-input-button"
                onClick={() => {
                  if (code === couponData?.code) {
                    toast.error("Coupon already applied");
                  } else {
                    applyCoupon();
                  }
                }}
              >
                Apply Coupon
              </button>
            </div>
          </div>
        )}
      </div>
      <h4>Prescription Required*</h4>
      <div id="checkout_accordion_1">
        <PrescriptionOption
          label="Get a Auto generated Prescription that contains your medications and dosages."
          price={`₹${
            parseFloat(p1?.price || 0) -
            (parseFloat(p1?.price || 0) * discount) / 100
          }`}
          onSelect={() => handleOptionSelect("rs100")}
          selected={selectedOption === "rs100"}
          planId="66194c29e6c1744156eb35cf"
          testId={testId}
          couponData={couponData}
          setCouponData={setCouponData}
        />
        <PrescriptionOption
          label="Get a consultation appointment with doctor and medical prescription for your medications, dosages, and usage instructions by doctor."
          price={`₹${
            parseFloat(p2?.price || 0) -
            (parseFloat(p2?.price || 0) * discount) / 100
          }`}
          onSelect={() => handleOptionSelect("rs500")}
          selected={selectedOption === "rs500"}
          planId="66194c51e6c1744156eb35d2"
          testId={testId}
          couponData={couponData}
          setCouponData={setCouponData}
        />
      </div>
    </div>
  );
}

function PrescriptionOption({
  label,
  planId,
  price,
  onSelect,
  selected,
  testId,
  couponData,
  setCouponData,
}) {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("morning");
  const [show, setShow] = useState(false);
  const [loading, setSetLoading] = useState(false);
  let storedUserData = JSON.parse(localStorage.getItem("User343"));

  // Cleanup function to run when component unmounts
  useEffect(() => {
    return () => {
      if (!selected) {
        localStorage.removeItem("CheckoutPlanId");
      }
    };
  }, [selected]);

  const handleTimeSlotChange = (slot) => {
    setSelectedTimeSlot(slot);
  };

  const handleCheckout = async () => {
    const selectedPlanId = localStorage.getItem("CheckoutPlanId");
    console.log("handleCheckout called with planId:", selectedPlanId);

    // Validate planId first
    if (!selectedPlanId) {
      toast.error("Invalid plan selected");
      return;
    }

    let payload;
    if (selectedPlanId === "66194c51e6c1744156eb35d2") {
      payload = {
        appointmentDate: startDate.toLocaleDateString("en-IN"),
        timeSlot: selectedTimeSlot,
        planId: selectedPlanId,
        testId,
        couponId: couponData?._id,
      };
    } else {
      payload = { planId: selectedPlanId, testId, couponId: couponData?._id };
    }

    setSetLoading(true);
    try {
      const token = storedUserData?.logedInUser?.accessToken;
      if (!token) throw new Error("Missing auth token");

      const bookingRes = await fetch(
        `${BASE_URL}/bookAppointment/bookAppointment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );

      const booking = await bookingRes.json();
      if (!bookingRes.ok) {
        console.error("Booking failed:", booking);
        throw new Error(booking?.error || "Failed to book appointment");
      }

      const orderId = booking?.data?.orderId;
      const userId = booking?.data?.userId;
      const totalAmount = booking?.data?.totalAmount;

      if (!orderId || !userId || totalAmount == null) {
        throw new Error(
          "Invalid booking response (missing orderId/userId/totalAmount)"
        );
      }

      // Store planId in localStorage for payment status check
      localStorage.setItem("CheckoutPlanId", selectedPlanId);

      const payRes = await fetch(`${BASE_URL}/payment/phonepay`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          amount: Number(totalAmount),
          orderId,
          userId,
          // redirectUrl: `http://localhost:3000/payment-status/${orderId}`,
          redirectUrl: `https://hairsncares.com/payment-status/${orderId}`,
          callbackUrl: `${BASE_URL}/payment/phonepay/callback`,
        }),
      });

      const pay = await payRes.json();
      console.log("pay response", pay);
      if (!payRes.ok)
        throw new Error(pay?.error || "Payment initiation failed");

      const redirectUrl = pay?.redirectUrl;
      if (!redirectUrl) {
        console.error("Payment response had no redirectUrl:", pay);
        throw new Error("Payment gateway did not return a redirectUrl");
      }

      window.location.assign(redirectUrl);
    } catch (error) {
      console.error("Error in checkout:", error?.message || error);
      toast.error(error?.message || "Something went wrong, try again");
      setSetLoading(false);
    }
  };

  return (
    <>
      <div
        onClick={onSelect}
        className={`cardsw ${selected ? "selected3" : ""}`}
      >
        <label className={`collapsed ltn__card-title`}>
          <h1>
            <input type="checkbox" style={{ display: "none" }} />
            {price}
          </h1>
          <span>{label}</span>
          <em>
            <img src="assets/img/checkout/rx.svg" alt="#" />
          </em>
        </label>
        <h4 className="readmore">
          {planId === "66194c51e6c1744156eb35d2"
            ? "What you get in Online Video Consultation ?"
            : "Hair analysis and recommendation report."}
          &nbsp; &nbsp;<span onClick={() => setShow(!show)}>See detail</span>
        </h4>
        {show && (
          <div className="h5-tem">
            {planId === "66194c51e6c1744156eb35d2" && (
              <>
                <h5>
                  1) Detailed discussion about your hair and scalp condition
                </h5>
                <h5>2) Q & A</h5>
                <h5>
                  3) Hair analysis and recommendation report which consists of:
                </h5>
              </>
            )}
            <div className="red-option">
              <h4>1) Assessment Report</h4>
              <p>1) Diagnosis & Details</p>
              <p>2) Hair & Scalp Analysis</p>
              <p>3) Nutritional Assessment</p>
              <p>4) Lifestyle Assessment</p>
              <p>5) Stress Analysis</p>
            </div>
            <div className="red-option">
              <h4>2) Our Recommendation</h4>
              <p>
                1) Treatment Plan – Define Modern Medicine & its benefits & Give
                prescription
              </p>
              <p>2) Hair & Scalp Treatment Recommendation</p>
              <p>3) Nutritional Management</p>
              <p>4) Lifestyle Management</p>
              <p>5) Stress Management</p>
            </div>
          </div>
        )}
        {selected && (
          <div className="checkout-detail">
            {planId === "66194c51e6c1744156eb35d2" && (
              <div>
                <label>Choose Appointment Date :</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            )}
            {planId === "66194c51e6c1744156eb35d2" && (
              <div style={{ gap: "1rem" }} className="datecont">
                <label className="label-time">Time Slot :</label>
                <div className="slot">
                  <input
                    type="radio"
                    name="timeSlot"
                    id="morning"
                    checked={selectedTimeSlot === "morning"}
                    onChange={() => handleTimeSlotChange("morning")}
                  />
                  <label htmlFor="morning">Morning</label>
                </div>
                <div className="slot">
                  <input
                    type="radio"
                    name="timeSlot"
                    id="noon"
                    checked={selectedTimeSlot === "noon"}
                    onChange={() => handleTimeSlotChange("noon")}
                  />
                  <label htmlFor="noon">Afternoon</label>
                </div>
                <div className="slot">
                  <input
                    type="radio"
                    name="timeSlot"
                    id="evening"
                    checked={selectedTimeSlot === "evening"}
                    onChange={() => handleTimeSlotChange("evening")}
                  />
                  <label htmlFor="evening">Evening</label>
                </div>
              </div>
            )}
            <div style={{ textAlign: "center", marginTop: "1rem" }}>
              <button
                onClick={handleCheckout}
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "Please Wait" : "Checkout"}
              </button>
            </div>
            {loading && (
              <div className="loading">
                <ReactLoading
                  type="spinningBubbles"
                  color="#007bff"
                  height={200}
                  width={200}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Checkout;
