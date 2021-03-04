import React from "react";

const STYLES = [
  "hero-btn",
  "hero-mobile-btn",
  "cta-download",
  "cta-newsletter",
  "cta-outline",
];

const Button = ({ children, onClick, type, buttonStyle }) => {
  const setBtnStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  return (
    <button className={`btn ${setBtnStyle}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
