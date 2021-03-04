import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Button from "./auxiliary/Button";
import HeroImg from "../assets/HeroImg.webp";
import { Link as LinkScroll } from "react-scroll";

const Hero = () => {
  const heroSubtext =
    "Reach your goals with personalized insights, custom budgets, spend tracking, and subscription monitoring—all for free.";

  const heroImg = useRef(null);
  const heroText = useRef(null);
  const textAnimation = gsap.timeline();
  const imgAnimation = gsap.timeline();

  useEffect(() => {
    textAnimation.from(heroText.current, {
      duration: 0.8,
      delay: 0.6,
      y: 80,
      opacity: 0,
      ease: "power3.out",
      stagger: {
        amount: 0.2,
      },
    });

    imgAnimation.from(heroImg.current, {
      duration: 0.8,
      delay: 1,
      x: 100,
      skewX: 2,
      ease: "power3.out",
      opacity: 0,
      stagger: {
        amount: 0.2,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  return (
    <>
      <div className="hero-container">
        <div className="hero-text" ref={heroText}>
          <h1 className="hero-header">
            Managing your
            <span className="ng-color"> money</span> has never been so easy
          </h1>
          <p className="hero-subtext">{heroSubtext}</p>
          <LinkScroll
            to="download"
            smooth={true}
            duration={700}
            spy={true}
            offset={-80}
            exact="true"
          >
            <Button buttonStyle="hero-btn">Try For Free</Button>
          </LinkScroll>
        </div>
        <div className="hero-img-wrapper" ref={heroImg}>
          <img
            src={HeroImg}
            alt="Fuller Wallet App Presentation"
            className="hero-phone-img"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
