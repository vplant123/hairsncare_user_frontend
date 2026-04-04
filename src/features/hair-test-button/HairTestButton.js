import React from "react";
import "./HairTestButton.css";

const HairTestButton = ({ onClick }) => {
  return (
    <button className="premium-hair-test-btn" onClick={onClick}>
      <span className="btn-text">TAKE A NEW HAIR TEST</span>
      <span className="btn-sparkle"></span>
    </button>

  );
};

export default HairTestButton;
