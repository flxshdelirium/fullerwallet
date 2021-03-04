import React from "react";
import { useForm } from "react-hook-form";
import NewsletterImg from "../assets/newsletter-image.webp";
import Button from "./auxiliary/Button";
import emailjs from "emailjs-com";

const Newsletter = () => {
  const newsletterHeader = "Stay up to date";
  const newsletterDesc =
    "Subscribe to our newsletter and get all the news about new features, tips and much more.";

  const ErrorMsg = ({ message }) => <p className="error-msg">{message}</p>;

  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (e) => {
    emailjs
      .send(
        "service_6627qkh",
        "template_ezzs6en",
        e.target,
        "user_BiepaYhz5sPZ920XqvepY"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <div className="newsletter-container" id="newsletter">
      <div className="newsletter-wrapper">
        <div className="newsletter-column-left">
          <div className="col-left-wrapper">
            <h2 className="newsletter-header">{newsletterHeader}</h2>
            <p className="newsletter-subtext">{newsletterDesc}</p>
            <div className="newsletter-wrapper">
              <form
                className="newsletter-form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="form-wrapper">
                  <div className="input-wrapper">
                    <label className="email-form-label">Email Address</label>
                    <input
                      type="email"
                      className="email-form-input"
                      name="email"
                      placeholder="Your Email Here"
                      ref={register({
                        required: "Email is required.",
                        pattern: {
                          value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        },
                      })}
                    />
                  </div>
                  <div className="btn-wrapper">
                    <Button buttonStyle="cta-newsletter" type="submit">
                      Submit
                    </Button>
                  </div>
                </div>
              </form>
              {errors?.email && <ErrorMsg message={errors.email.message} />}
            </div>
          </div>
        </div>
        <div className="newsletter-column-right">
          <img
            className="newsletter-image"
            src={NewsletterImg}
            alt="Smiling customer with a credit card"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
