import React from "react";
import AppStore from "../assets/appst-download.svg";
import PlayStore from "../assets/gp-download.svg";

const Download = () => {
  const downloadHeader = "Ready to join?";
  const downloadDesc =
    "Join the ever growing Fuller Wallet customers who have found a better way of managing their money online. Download the app now and start your journey.";

  return (
    <div className="download-container" id="download">
      <div className="download-wrapper">
        <h2 className="download-header">{downloadHeader}</h2>
        <h2 className="download-desc">{downloadDesc}</h2>
        <div className="download-btns">
          <a
            href="https://play.google.com/store/apps/category/FINANCE?hl=en&gl=US"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={PlayStore}
              alt="Google Play Store"
              className="playstore-logo"
            />
          </a>
          <a
            href="https://www.apple.com/app-store/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={AppStore}
              alt="Apple App Store"
              className="appstore-logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Download;
