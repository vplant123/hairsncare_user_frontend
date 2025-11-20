import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Failure.css"; // Import the CSS file for this component
import Navbar from "../nav/Navbar";

// Message configuration for scalability
const messages = {
  1: {
    title: "Your Payment Failed",
    content: (
      <p className="failure-1">
        Unfortunately, your payment could not be processed. <br />
        Please check your payment details or try a different payment method.{" "}
        <br />
        You can retry the payment from the checkout page or contact support for
        assistance. <br />
        We apologize for the inconvenience!
      </p>
    ),
  },
  default: {
    title: "Your Order Could Not Be Placed",
    content: (
      <p className="failure-1">
        There was an issue processing your order. <br />
        Please try again or contact our support team for help.
      </p>
    ),
  },
};

function Failure() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Determine the message based on id, fallback to default
  const message = messages[id] || messages.default;

  const handleRetry = () => navigate("/"); // Adjust path if retry goes to a checkout page

  return (
    <Navbar>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="message-box _failure">
              <i className="fa fa-times-circle" aria-hidden="true"></i>
              <h2>{message.title}</h2>
              {message.content}
            </div>
            <div className="text-center">
              <button
                type="button"
                onClick={handleRetry}
                className="failure-button"
                aria-label="Go to Homepage"
                
              >
                Retry (Go to Homepage)
              </button>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
}

export default Failure;
