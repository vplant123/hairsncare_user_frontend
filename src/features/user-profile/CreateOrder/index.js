import React, { useState, useEffect, useRef } from "react";
// import Sidebar from "./../Sidebar";
import Navbar from "../../nav/Navbar";
import "./index.css";
import { Formik } from "formik";
import { Button, Form, FormGroup } from "reactstrap";
import BASE_URL from "../../../Config";
import { useDispatch, useSelector } from "react-redux";
import useRazorpay from "react-razorpay";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { renderWelcomeEmail } from "../renderEmail";
import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import styles from "../Address.module.css";
import ReactLoading from "react-loading";

import { styled } from "@mui/material/styles";
import { getCartItems } from "../../products/CartSlice";

const sampleOrders = [
  {
    id: 1,
    date: "2024-06-01",
    total: "Rs 50.00",
    status: "Shipped",
    items: [
      { name: "Aspirin", quantity: 2, price: "Rs 10.00" },
      { name: "Vitamin C", quantity: 1, price: "Rs 30.00" },
    ],
  },
  {
    id: 2,
    date: "2024-06-15",
    total: "Rs 25.00",
    status: "Pending",
    items: [{ name: "Ibuprofen", quantity: 1, price: "Rs 25.00" }],
  },
];

const statuses = ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"];

export default function CreateOrder(props) {
  useEffect(() => {
    if (props?.setTitle) props?.setTitle(window.location.pathname);
    scrollToTop();
  }, []);

  const contentRef = useRef();

  const scrollToTop = () => {
    contentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const [orders, setOrders] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [height, setHeight] = useState("100px");
  const [cartItemsNew, setCartItemsNew] = useState([]);
  const cartItems = useSelector((state) => state.cart.items);
  const [add, setAdd] = useState(false);
  const [loading, setSetLoading] = useState(false);
  const [subtotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);

  const [Razorpay] = useRazorpay();

  const navigate = useNavigate();
  console.log("smrfoejr", cartItemsNew);
  useEffect(() => {
    setCartItemsNew(cartItems);
    getSubTotalAmount();
    getTotalAmount(0);
  }, [cartItems]);
  useEffect(() => {
    // Simulate an API call to fetch orders
    setTimeout(() => {
      setOrders(sampleOrders);
    }, 1000);
  }, []);

  let storedUserData = JSON.parse(localStorage.getItem("User343"));
  const dispatch = useDispatch();
  const content = useSelector((state) => state.content.config);
  console.log("storedUserData", content);
  console.log("smkjir", content);
  useEffect(() => {
    dispatch(getCartItems(storedUserData?.logedInUser?.user?._id));

    getSubTotalAmount();
    getTotalAmount(0);
    fetch(`${BASE_URL}/users/getAddress`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: storedUserData.logedInUser.accessToken,
      },
      body: JSON.stringify({ userId: storedUserData.logedInUser?.user?._id }),
    })
      .then((response) => response.json())
      .then((data) => {
        setHeight(
          data?.data?.length < 3 ? 100 * parseFloat(data?.data?.length) : "150"
        );
        setAddresses(data.data);
      })
      .catch((error) => console.error("Error fetching addresses:", error));
  }, []);

  const getStatusClass = (currentStatus, stepStatus) => {
    const statusOrder = statuses.indexOf(currentStatus);
    const stepOrder = statuses.indexOf(stepStatus);
    return stepOrder <= statusOrder ? "red" : "";
  };

  const getTotalAmount = (dist) => {
    // Calculate total discounted price
    let tot = cartItems?.reduce((total, item) => {
      // Calculate discounted price
      const discountedPrice = Math.round(
        item?.item?.price * (1 - Number(item?.item?.discount || 0) / 100)
      );
      return total + discountedPrice * (item?.quantity || 1);
    }, 0);

    // Apply discount to the total after applying discounts
    let p = Number(tot || 0) - (Number(tot || 0) * (dist || 0)) / 100;

    // Add ₹200 delivery charge if total after coupon is less than ₹2000
    if (p < 2000) {
      p = p + 200; // Add delivery charge
    }

    setTotal(Math.round(p));
    return Math.round(p);
  };

  const getSubTotalAmount = () => {
    let sub = cartItems?.reduce((total, item) => {
      // Calculate discounted price
      const discountedPrice = Math.round(
        item?.item?.price * (1 - Number(item?.item?.discount || 0) / 100)
      );
      return total + discountedPrice * (item?.quantity || 1);
    }, 0);
    setSubTotal(Math.round(sub));
    console.log("sub", sub);
    return Math.round(sub);
  };

  // Calculate amount after discount (before delivery charge)
  const getAmountAfterDiscount = (dist) => {
    console.log("dist", dist);
    let tot = cartItems?.reduce((total, item) => {
      // Calculate discounted price
      const discountedPrice = Math.round(
        item?.item?.price * (1 - Number(item?.item?.discount || 0) / 100)
      );
      return total + discountedPrice * (item?.quantity || 1);
    }, 0);

    let p = Number(tot || 0) - (Number(tot || 0) * (dist || 0)) / 100;
    return Math.round(p);
  };

  const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
    '& .MuiAutocomplete-option[data-focus="true"]': {
      backgroundColor: theme.palette.action.hover,
      color: theme.palette.primary.main,
    },
    '& .MuiAutocomplete-option[aria-selected="true"]': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  }));

  // const handleCheckout = async (values) => {
  //   console.log("smrgiioer", values);
  //   if (!total || !values?.products || !values?.addressId || !values?.mode) {
  //     toast.error("Please fill all details");
  //     return false;
  //   }
  //   const emailHtml = renderWelcomeEmail(
  //     {
  //       amount: total,
  //       products: values?.products,
  //       addressId: values?.addressId,
  //       mode: values?.mode,
  //       address: values?.address?.fullAdress,
  //     },
  //     1,
  //     ""
  //   );
  //   console.log("sjofje", emailHtml);

  //   let data = {
  //     amount: total,
  //     products: values?.products,
  //     addressId: values?.addressId,
  //     mode: values?.mode,
  //     htmls: emailHtml,
  //     couponId: couponData?._id,
  //   };

  //   setSetLoading(true);
  //   console.log(data, "test");
  //   try {
  //     const token = storedUserData.logedInUser.accessToken;
  //     console.log(token, "token");
  //     const response = await fetch(`${BASE_URL}/payment/place-order`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: token,
  //       },
  //       body: JSON.stringify(data),
  //     });
  //     console.log("result", response);

  //     if (!response.ok) {
  //       const responseData = await response.json();
  //       console.log("data", responseData.data);

  //       toast.error(responseData.message);

  //       setSetLoading(false);
  //       throw new Error("Network response was not ok");
  //     } else {
  //       if (data?.mode == "cash") {
  //         const responseData = await response.json();
  //         console.log("wemskfiew", responseData.data);
  //         toast.success("Order placed successfully");
  //         setSetLoading(false);
  //         navigate("/success/2");
  //         setTimeout(() => {
  //           window.location.reload();
  //         }, 100); // 2 seconds delay to ensure navigation completes
  //       } else {
  //         console.log("jsoejoj...........", Math.round(Number(total) * 100));
  //         const responseData = await response.json();
  //         const options = {
  //           key: "rzp_live_mArtCmiYqSB4nm",
  //           amount: Math.round(Number(total) * 100),
  //           currency: "INR",
  //           name: "Hairs N Cares",
  //           image: "/assets/img/logo.png",
  //           accept_partial: false,
  //           reference_id: responseData.data,
  //           description: storedUserData.logedInUser?.user?._id,
  //           handler: async function (response) {
  //             const data = {
  //               orderId: responseData.data,
  //             };
  //             const res = await fetch(
  //               `${BASE_URL}/bookAppointment/update-payment-order`,
  //               {
  //                 method: "POST",
  //                 headers: {
  //                   "Content-Type": "application/json",
  //                   Authorization: token,
  //                 },
  //                 body: JSON.stringify(data),
  //               }
  //             );

  //             console.log(await res.json());
  //             // window.location = "https://hairsncares.com/success/2";
  //             navigate("/success/2");
  //           },
  //           modal: {
  //             confirm_close: true, // this is set to true, if we want confirmation when clicked on cross button.
  //             // This function is executed when checkout modal is closed
  //             // There can be 3 reasons when this modal is closed.
  //             ondismiss: async (reason) => {
  //               const {
  //                 reason: paymentReason,
  //                 field,
  //                 step,
  //                 code,
  //               } = reason && reason.error ? reason.error : {};
  //               // Reason 1 - when payment is cancelled. It can happend when we click cross icon or cancel any payment explicitly.
  //               if (reason === undefined) {
  //                 console.log("cancelled");
  //                 toast.error("Payment Unsuccessful!! Try again");
  //                 setSetLoading(false);
  //                 if (responseData && responseData.data) {
  //                   deleteOrderAndPayments(responseData.data);
  //                 }
  //               }
  //               // Reason 2 - When modal is auto closed because of time out
  //               else if (reason === "timeout") {
  //                 console.log("timedout");
  //                 toast.error("Too slow, timeout.");
  //                 setSetLoading(false);
  //                 if (responseData && responseData.data) {
  //                   deleteOrderAndPayments(responseData.data);
  //                 }
  //               }
  //               // Reason 3 - When payment gets failed.
  //               else {
  //                 console.log("failed");
  //                 toast.error("failed ,try again.");
  //                 setSetLoading(false);
  //                 if (responseData && responseData.data) {
  //                   deleteOrderAndPayments(responseData.data);
  //                 }
  //               }
  //             },
  //           },
  //           notes: {
  //             address: "HairsNcare Corporate Office",
  //           },
  //           theme: {
  //             color: "#3399cc",
  //           },
  //           redirect: true,
  //         };

  //         const rzp1 = new Razorpay(options);

  //         rzp1.on("payment.failed", function (response) {
  //           toast.error("Payent failed due to some reasons , Try again.");
  //           setSetLoading(false);
  //           // Call deleteOrderAndPayments with the orderId
  //           if (responseData && responseData.data) {
  //             deleteOrderAndPayments(responseData.data);
  //           }
  //           throw new Error("Payment failed");
  //         });

  //         const res = rzp1.open();
  //       }
  //     }

  //     // Handle the response data as needed
  //   } catch (error) {
  //     console.error(
  //       "There was a problem with the fetch operation:",
  //       error.message
  //     );
  //   }
  // };

  const handleCheckout = async (values) => {
    console.log("smrgiioer", values);
    if (!total || !values?.products || !values?.addressId || !values?.mode) {
      toast.error("Please fill all details");
      return false;
    }

    console.log("Checkout values:", values);

    let orderId; // Declare orderId at function scope
    setSetLoading(true);

    try {
      const token = storedUserData.logedInUser.accessToken;

      // First fetch request to place order
      const response = await fetch(`${BASE_URL}/payment/place-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          amount: total,
          products: values?.products,
          addressId: values?.addressId,
          mode: values?.mode,
          htmls: renderWelcomeEmail(
            {
              amount: total,
              products: values?.products,
              addressId: values?.addressId,
              mode: values?.mode,
              address: values?.address?.fullAdress,
            },
            1,
            ""
          ),
          couponId: couponData?._id,
        }),
      });

      // Check if the first fetch request is successful
      if (!response.ok) {
        const responseData = await response.json();
        toast.error(responseData.message);
        setSetLoading(false);
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      orderId = responseData.data?.orderId; // Assign to scoped variable
      const userId = responseData.data?.userId;
      const totalAmount = responseData.data?.totalAmount;

      // Validate orderId, userId, and totalAmount
      if (!orderId || !userId || totalAmount == null) {
        console.error("Invalid booking response:", responseData);
        throw new Error(
          "Invalid booking response (missing orderId/userId/totalAmount)"
        );
      }

      // Handle cash payment
      if (values?.mode === "cash") {
        toast.success("Order placed successfully");
        setSetLoading(false);
        navigate("/success/2");
        setTimeout(() => {
          window.location.reload();
        }, 100);
        return;
      }

      // Handle online payment via PhonePe
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
          redirectUrl: `https://hairsncares.com/status/${orderId}`,
          // redirectUrl: `http://localhost:3000/payment-status/${orderId}`,
          callbackUrl: `${BASE_URL}/payment/phonepay/callback`,
        }),
      });

      const pay = await payRes.json();
      console.log("pay response", pay);

      // Check if the payment initiation was successful
      if (!pay.success) {
        await deleteOrderAndPayments(orderId); // Delete order if payment fails
        throw new Error(pay?.error || "Payment initiation failed");
      }

      const redirectUrl = pay?.redirectUrl;
      if (!redirectUrl) {
        console.error("Payment response had no redirectUrl:", pay);
        throw new Error("Payment gateway did not return a redirectUrl");
      }
      window.location.assign(redirectUrl);
    } catch (error) {
      console.error(
        "There was a problem with the fetch operation:",
        error.message
      );
      if (orderId) {
        await deleteOrderAndPayments(orderId);
      }
      toast.error(error?.message || "Something went wrong, try again");
      setSetLoading(false);
    }
  };

  // PhonePe Callback (success/failure)

  const [address, setAddress] = useState(null);

  const handleInputChange = (e, values, setFieldValue) => {
    const { name, value } = e.target;
    let temp = values?.address || {};
    temp[name] = value;
    setFieldValue("address", temp, true);
  };

  const handleSubmitAdd = async (values, setFieldValue) => {
    // e.preventDefault();
    const addApiUrl = `${BASE_URL}/users/addAddress`;
    const editApiUrl = `${BASE_URL}/users/editAddress`;
    const apiUrl = values?.address?._id ? editApiUrl : addApiUrl;
    const method = values?.address?._id ? "POST" : "POST";
    const addressData = values?.address
      ? { ...values?.address, id: values?.address?._id }
      : values?.address;
    console.log("jsiejfijer", addressData);
    if (!addressData?.name) {
      toast.error("Please provide name");
      return false;
    }
    if (!addressData?.phone) {
      toast.error("Please provide name");
      return false;
    } else {
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(addressData?.phone)) {
        toast.error("Please provide correct phone number");
        return false;
      }
    }

    if (!addressData?.fullAdress) {
      toast.error("Please provide address");
      return false;
    }
    if (!addressData?.pin) {
      toast.error("Please provide pincode");
      return false;
    } else {
      let pincodeRegex = /^[0-9]\d{5}$/;
      if (!pincodeRegex.test(addressData?.pin)) {
        toast.error("Please provide correct pincode");
        return false;
      }
    }
    if (!addressData?.state) {
      toast.error("Please provide state name");
      return false;
    }

    if (!addressData?.city) {
      toast.error("Please provide city name");
      return false;
    }

    fetch(apiUrl, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: storedUserData.logedInUser.accessToken,
      },
      body: JSON.stringify({
        ...addressData,
        userId: storedUserData.logedInUser?.user?._id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("nwenifew", data);
        if (values?.address?._id) {
          toast.success("Address edit successfully");
          setAddresses(
            addresses.map((addr) =>
              addr._id == values?.address?._id ? data?.data : addr
            )
          );
          setFieldValue("address", data?.data, true);
          setFieldValue("addressId", values?.address?._id, true);
        } else {
          toast.success("Address saved successfully");
          setAddresses([...addresses, data?.data]);
          setFieldValue("address", data?.data, true);
          setFieldValue("addressId", data?.data?._id, true);
        }
        // setEditingAddress(null);
      })
      .catch((error) => {
        console.error("Error adding/editing address:", error);
        toast.error("Somethin want wrong try again");
      });
  };

  const [openC, setOpenC] = useState(false);
  const [code, setCode] = useState("");
  const [couponData, setCouponData] = useState("");
  const [discount, setDiscount] = useState("");

  // Update applyCoupon to handle minOrderAmount, fixed and percent discounts
  const applyCoupon = (subtotal, coupon) => {
    let finalTotal = subtotal;
    let discountValue = 0;
    let discountPercent = 0;
    let message = "No discount applied.";
    let applied = false;

    if (!coupon) {
      return {
        applied: false,
        message: "No coupon data.",
        finalTotal: subtotal,
        discountValue: 0,
        discountPercent: 0,
      };
    }

    // Check minOrderAmount
    if (subtotal < (coupon.minOrderAmount || 0)) {
      message = `Minimum order amount for this coupon is ₹${coupon.minOrderAmount}`;
      return {
        applied: false,
        message,
        finalTotal: subtotal,
        discountValue: 0,
        discountPercent: 0,
      };
    }

    if (
      coupon.discountType === "percent" ||
      coupon.discountType === "percent"
    ) {
      discountPercent = coupon.percent;
      discountValue = (subtotal * discountPercent) / 100;
      finalTotal = subtotal - discountValue;
      message = `${discountPercent}% discount applied.`;
      applied = true;
    } else if (coupon.discountType === "fixed") {
      discountValue = coupon.fixedAmount || 0;
      finalTotal = subtotal - discountValue;
      message = `₹${discountValue} discount applied.`;
      applied = true;
    } else if (coupon.discountType === "free_delivery") {
      // No discount, but free delivery
      message = "Free delivery applied.";
      applied = true;
    }

    // Ensure finalTotal is non-negative
    finalTotal = Math.max(finalTotal, 0);

    // Add ₹200 delivery charge if total after coupon is less than ₹2000
    if (finalTotal < parseInt(content?.deliveryAmt)) {
      finalTotal = finalTotal + parseInt(content?.deliveryCharge);
      message = `${message} + ₹${parseInt(
        content?.deliveryCharge
      )} delivery charge`;
    }

    return { applied, message, finalTotal, discountValue, discountPercent };
  };

  const applyCouponHandler = async () => {
    fetch(`${BASE_URL}/users/applyCoupon`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: storedUserData.logedInUser.accessToken,
      },
      body: JSON.stringify({ code, type: "2" }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.statusCode == 200) {
          // data.data is the coupon object
          const subtotal = Number(getSubTotalAmount());
          const couponResult = applyCoupon(subtotal, data.data);

          if (!couponResult.applied) {
            toast.error(couponResult.message);
            setDiscount(0);
            setCouponData("");
            setTotal(couponResult.finalTotal);
            return;
          }

          setDiscount(
            couponResult.discountValue || couponResult.discountPercent
          );
          setTotal(Math.round(couponResult.finalTotal)); // if you track this
          setCouponData(data.data);
          toast.success(couponResult.message);
        } else {
          toast.error(data?.message || "error");
        }
      })
      .catch((error) => {
        toast.error("Something went wrong, try again");
        console.error("Error applying coupon:", error);
      });
  };

  // After payment is finalized (inside your payment success handler)
  const deleteOrderAndPayments = async (orderId) => {
    try {
      console.log("Deleting order and payments for orderId:", orderId);
      const response = await fetch(
        `${BASE_URL}/payment/delete-order-and-payments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: storedUserData.logedInUser.accessToken,
          },
          body: JSON.stringify({ orderId }), // send orderId in body
        }
      );
      const data = await response.json();
      if (response.ok) {
        // Handle success (optional)
        console.log("Order and payments deleted:", data);
      } else {
        // Handle error
        console.error("Failed to delete order and payments:", data.message);
      }
    } catch (error) {
      console.error("Error calling delete-order-and-payments:", error);
    }
  };
  return (
    <Navbar>
      <div className="d-flex flex-column container" ref={contentRef}>
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
                  onChange={(e) => {
                    setCouponData("");
                    setDiscount("");
                    getTotalAmount(0);
                    setCode(e.target.value);
                  }}
                />
                <button
                  className="couponApply-input-button"
                  onClick={() => {
                    if (code == couponData?.code) {
                      toast.error("Coupon already applied");
                    } else applyCouponHandler();
                  }}
                >
                  Apply Coupon
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="create-order" style={{ gap: 0, padding: 0 }}>
          <Formik
            // isValid='true'
            enableReinitialize
            //   validationSchema={validationSchema}
            initialValues={{
              address: "",
              amount: total,
              addressId: "",
              products: cartItemsNew,
              mode: "",
              agree: false,
            }}
            onSubmit={(values, actions) => {}}
          >
            {({
              handleBlur,
              handleChange,
              handleSubmit,
              setFieldValue,
              values,
              touched,
              isValid,
              errors,
            }) => (
              <Form
                onSubmit={handleSubmit}
                className="create_div-main"
                style={{
                  maxWidth: "1200px",

                  padding: "20px",
                }}
              >
                <FormGroup
                  className="order-flow"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    className="col-12 col-md-6 order-div"
                    style={{
                      padding: "30px",
                      backgroundColor: "#fff",
                      borderRadius: "12px",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                      flex: "1",
                      minWidth: "300px",
                      maxWidth: "45%",
                      position: "sticky",
                      top: "20px",
                      height: "fit-content",
                    }}
                  >
                    <div className="d-flex flex-column">
                      <div
                        className="d-flex"
                        style={{
                          justifyContent: "space-between",
                          marginBottom: "20px",
                        }}
                      >
                        <label
                          style={{
                            fontSize: "1.2rem",
                            fontWeight: "600",
                            color: "#333",
                          }}
                        >
                          Your Order
                        </label>
                        <div
                          onClick={() => navigate("/cart")}
                          style={{
                            cursor: "pointer",
                            fontWeight: 600,
                            color: "#e31e24",
                          }}
                        >
                          {"< Back To Cart"}
                        </div>
                      </div>
                      <div>
                        {cartItemsNew?.map((e, index) => (
                          <div key={index} className="cart-item">
                            <img src={e?.item?.src[0]} alt={e?.item?.name} />
                            <div className="product-desc">
                              <div className="product-info">
                                {e?.item?.name}
                              </div>
                              <div className="product-price">
                                <strong className="product-quantity">
                                  ×&nbsp;{e?.quantity}
                                </strong>
                                <div
                                  style={{ fontWeight: "600", color: "black" }}
                                >
                                  ₹{" "}
                                  {Math.round(
                                    e.item?.price *
                                      (1 - Number(e.item?.discount || 0) / 100)
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="total-section">
                        <div>SUBTOTAL</div>
                        <div>₹ {Math.round(subtotal)}</div>
                      </div>
                      {discount && couponData ? (
                        <div
                          className="total-section"
                          style={{
                            color: "#28a745",
                            flexDirection: "column",
                            alignItems: "flex-end",
                            textAlign: "right",
                          }}
                        >
                          <div
                            style={{
                              fontWeight: 500,
                              color: "#333",
                              fontSize: "0.95rem",
                            }}
                          >
                            Coupon Applied:{" "}
                            <span style={{ color: "#e31e24" }}>
                              {couponData.code}
                            </span>
                          </div>
                          <div>
                            {couponData.discountType === "fixed"
                              ? `- ₹${
                                  couponData.fixedAmount ||
                                  couponData.percent ||
                                  0
                                }`
                              : couponData.discountType === "percent" ||
                                couponData.discountType === "percentage"
                              ? `- ${couponData.percent}%`
                              : null}
                          </div>
                        </div>
                      ) : null}

                      {/* <div className="total-section">
                        <div>After Coupon Discount</div>
                        <div>₹ {Math.max(0, Math.round(getAmountAfterDiscount(discount)))}</div>
                      </div> */}

                      <div className="total-section">
                        <div>Delivery :</div>
                        <div
                          style={{
                            color:
                              (couponData &&
                                applyCoupon(subtotal, couponData).finalTotal -
                                  parseInt(content?.deliveryCharge) <
                                  parseInt(content?.deliveryAmt)) ||
                              (!couponData &&
                                subtotal < parseInt(content?.deliveryAmt))
                                ? "#e31e24"
                                : "#28a745",
                          }}
                        >
                          {(couponData &&
                            applyCoupon(subtotal, couponData).finalTotal - 200 <
                              2000) ||
                          (!couponData && subtotal < content?.deliveryAmt)
                            ? `₹ ${content?.deliveryCharge}`
                            : "Free Delivery"}
                        </div>
                      </div>

                      <div
                        className="total-section"
                        style={{ fontSize: "1.1rem" }}
                      >
                        <div style={{ fontWeight: "600" }}>TOTAL</div>
                        <div style={{ fontWeight: "700", color: "black" }}>
                          {(() => {
                            // If no coupon is applied and subtotal is less than 2000, add delivery charge
                            if (
                              !couponData &&
                              subtotal < parseInt(content?.deliveryAmt)
                            ) {
                              return Math.max(
                                0,
                                Math.round(
                                  subtotal + parseInt(content?.deliveryCharge)
                                )
                              );
                            } else {
                              const couponResult = applyCoupon(
                                Math.round(subtotal),
                                couponData
                              );
                              const afterCouponDiscount = Math.round(
                                couponResult.finalTotal
                              );
                              return Math.max(
                                0,
                                Math.round(afterCouponDiscount)
                              );
                            }
                          })()}
                        </div>
                      </div>

                      <div className="checkout-style-regular d-flex flex-column">
                        <div
                          className="payment-option"
                          onClick={() => setFieldValue("mode", "cash", true)}
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <input
                            type="checkbox"
                            checked={values?.mode == "cash"}
                            style={{
                              width: "18px",
                              height: "18px",
                              marginRight: "20px",
                            }}
                          />
                          <div>Cash on delivery</div>
                        </div>
                        <div
                          className="payment-option"
                          onClick={() => setFieldValue("mode", "online", true)}
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <input
                            type="checkbox"
                            checked={values?.mode == "online"}
                            style={{
                              width: "18px",
                              height: "18px",
                              marginRight: "20px",
                            }}
                          />
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                            }}
                          >
                            <span>Pay Online</span>
                            <img
                              src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/06/phonepe-1686727535.jpg"
                              alt="PhonePe payment method"
                              style={{
                                maxWidth: "100%",
                                height: "auto",
                                maxHeight: "30px",
                                objectFit: "contain",
                              }}
                            />
                          </div>
                        </div>
                        <div className="terms-section">
                          Your personal data will be used to process your order,
                          support your experience throughout this website, and
                          for other purposes described in our{" "}
                          <a
                            onClick={() => navigate("/policy")}
                            style={{
                              cursor: "pointer",
                              color: "#e31e24",
                              textDecoration: "none",
                            }}
                          >
                            privacy policy
                          </a>
                          .
                        </div>
                        <div className="terms-checkbox">
                          <div>
                            <input
                              type="checkbox"
                              checked={values?.agree}
                              onChange={(e) => {
                                setFieldValue(
                                  "agree",
                                  e?.target?.checked,
                                  true
                                );
                              }}
                            />
                          </div>
                          <div>
                            I have read and agree to the website terms and
                            conditions *
                          </div>
                        </div>
                        <Button
                          className="checkout-button"
                          disabled={
                            !(
                              values?.mode &&
                              values?.agree &&
                              values?.addressId
                            ) || loading
                          }
                          onClick={() => handleCheckout(values)}
                        >
                          {loading ? "Processing..." : "Place order"}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-12 col-md-6 order-div"
                    style={{
                      padding: "30px",
                      backgroundColor: "#fff",
                      borderRadius: "12px",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                      flex: "1",
                      minWidth: "300px",
                      maxWidth: "45%",
                    }}
                  >
                    <div className="d-flex flex-column">
                      <div
                        className="d-flex"
                        style={{
                          justifyContent: "space-between",
                          fontWeight: 600,
                          fontSize: "1.2rem",

                          color: "#333",
                        }}
                      >
                        <div>Billing details</div>
                      </div>
                      <div className="col-12 ">
                        {addresses?.length > 0 ? (
                          <StyledAutocomplete
                            options={addresses}
                            getOptionSelected={(option, value) =>
                              option?._id == value?.addressId
                            }
                            getOptionLabel={(item) => {
                              let reqValue = "";
                              if (item) {
                                if (item?._id) {
                                  reqValue =
                                    item?.fullAdress +
                                    "-" +
                                    item?.name +
                                    "-" +
                                    item?.phone;
                                }
                              }
                              return reqValue;
                            }}
                            onOpen={() => setAdd(true)}
                            className="address-select"
                            value={values?.address}
                            onInputChange={(event, newValue) => {
                              if (newValue == "") {
                                setFieldValue("addressId", "", true);
                              }
                            }}
                            onChange={(event, newValue) => {
                              setFieldValue("addressId", newValue?._id, true);
                              setFieldValue("address", newValue, true);
                            }}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                label="Select a Address"
                                variant="outlined"
                                fullWidth
                                className="address-text-field mt-6"
                              />
                            )}
                          />
                        ) : (
                          <></>
                        )}

                        <div className="form-grid">
                          {/* Name Input - Top-left in image */}
                          <div
                            className={`${styles.formGroup} form-group-half`}
                          >
                            <label className="form-label">Name: </label>
                            <input
                              type="text"
                              name="name"
                              value={values?.address?.name}
                              onChange={(e) =>
                                handleInputChange(e, values, setFieldValue)
                              }
                              required
                              className="form-input"
                            />
                          </div>
                          {/* Phone Input - Top-right in image (10-digit mobile number) */}
                          <div
                            className={`${styles.formGroup} form-group-half`}
                          >
                            <label className="form-label">Phone: </label>
                            <input
                              type="text"
                              name="phone"
                              value={values?.address?.phone}
                              onChange={(e) =>
                                handleInputChange(e, values, setFieldValue)
                              }
                              required
                              className="form-input"
                            />
                          </div>

                          {/* Pin Input - Second row, left in image (Pincode) */}
                          <div
                            className={`${styles.formGroup} form-group-half`}
                          >
                            <label className="form-label">Pin: </label>
                            <input
                              type="text"
                              name="pin"
                              value={values?.address?.pin}
                              onChange={(e) =>
                                handleInputChange(e, values, setFieldValue)
                              }
                              required
                              className="form-input"
                            />
                          </div>
                          {/* City Input - Second row, right in image (Locality) */}
                          <div
                            className={`${styles.formGroup} form-group-half`}
                          >
                            <label className="form-label">City: </label>
                            <input
                              type="text"
                              name="city"
                              value={values?.address?.city}
                              onChange={(e) =>
                                handleInputChange(e, values, setFieldValue)
                              }
                              required
                              className="form-input"
                            />
                          </div>

                          {/* Full Address Textarea - Third row, full width in image (Address (Area and Street)) */}
                          <div
                            className={`${styles.formGroup} form-group-full`}
                          >
                            <label className="form-label">Full Address: </label>
                            <textarea
                              name="fullAdress"
                              value={values?.address?.fullAdress}
                              onChange={(e) =>
                                handleInputChange(e, values, setFieldValue)
                              }
                              required
                              className="form-textarea"
                            />
                          </div>

                          {/* State Input - Fourth row, left in image */}
                          <div
                            className={`${styles.formGroup} form-group-half`}
                          >
                            <label className="form-label">State: </label>
                            <input
                              type="text"
                              name="state"
                              value={values?.address?.state}
                              onChange={(e) =>
                                handleInputChange(e, values, setFieldValue)
                              }
                              required
                              className="form-input"
                            />
                          </div>
                          {/* Email (Optional) Input - Fourth row, right in image */}
                          <div
                            className={`${styles.formGroup} form-group-half`}
                          >
                            <label className="form-label">
                              Email (optional):{" "}
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={values?.address?.email}
                              onChange={(e) =>
                                handleInputChange(e, values, setFieldValue)
                              }
                              className="form-input"
                            />
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="add-address-button"
                          onClick={() => handleSubmitAdd(values, setFieldValue)}
                        >
                          {values?.address?._id
                            ? "Edit Changes"
                            : "Add Address"}
                        </button>
                      </div>
                    </div>
                  </div>
                </FormGroup>
              </Form>
            )}
          </Formik>
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

      <ToastContainer position="bottom-right" />
    </Navbar>
  );
}
