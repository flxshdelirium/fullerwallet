import React from "react";

const Reviews = () => {
  const reviewsElements = [
    {
      header: "Appreciated by Users",
      subtext: "25K+ Five Star Reviews",
      icon: (
        <img
          src={require("../../assets/5stars.webp").default}
          alt="Reviews Icon"
        />
      ),
    },
    {
      header: "Top 5 Free Finance Apps",
      subtext: "Google Play Store",
      icon: (
        <img
          src={require("../../assets/google-play.webp").default}
          alt="Google Play Store Logo"
        />
      ),
    },
    {
      header: "Top 5 Best Apps for Savings",
      subtext: "Apple App Store",
      icon: (
        <img
          src={require("../../assets/app-store.webp").default}
          alt="Apple App Store Logo"
        />
      ),
    },
  ];

  return (
    <div>
      <div className="reviews-container">
        {reviewsElements.map((review, i) => (
          <div className="review-wrapper" key={`review-id-${i}`}>
            <div className="reviews-icon">{review.icon}</div>
            <h1 className="reviews-header">{review.header}</h1>
            <p className="reviews-subtext">{review.subtext}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
