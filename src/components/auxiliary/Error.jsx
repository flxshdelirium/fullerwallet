import React from "react";
import Button from "./Button";
import { NavLink as LinkRouter } from "react-router-dom";
import ErrorImg from "../../assets/error.svg";

const Error = () => {
  const errorText =
    "Oh no! Looks like the page you are trying to access does not exist.";

  return (
    <div className="error-container">
      <img src={ErrorImg} alt="404 Error Illustration" className="error-img" />
      <h2 className="error-text">{errorText}</h2>
      <LinkRouter to="/">
        <Button>Return Home</Button>
      </LinkRouter>
    </div>
  );
};

export default Error;
