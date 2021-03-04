/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from "react";
import Button from "./auxiliary/Button";
import Reviews from "./auxiliary/Reviews";
import { Link as LinkScroll } from "react-scroll";
import { featuresElements } from "./auxiliary/Features.Data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Features() {
  const featuresReveal = useRef([]);
  featuresReveal.current = [];

  useEffect(() => {
    featuresReveal.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
        },
        {
          duration: 1,
          opacity: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            id: `feat-${index + 1}`,
            trigger: el,
            start: "top 80%",
            toggleActions: "play",
          },
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !featuresReveal.current.includes(el)) {
      featuresReveal.current.push(el);
    }
  };

  const featuresSection = "Features";
  const featuresTitle = "Here's what we have to offer";

  return (
    <>
      <div className="features-container">
        <div className="features-wrapper" id="features">
          <h2 className="section-name">{featuresSection}</h2>
          <h2 className="section-title">{featuresTitle}</h2>
          {featuresElements.map((feature) => (
            <div
              ref={addToRefs}
              className="features-row"
              key={feature.id}
              img-start={feature.leftside}
              style={{
                flexDirection: feature.leftside ? "row" : "row-reverse",
              }}
            >
              <div className="features-col">
                <div className="features-img">
                  <img src={feature.img} alt={feature.alt} />
                </div>
              </div>
              <div className="features-col">
                <div className="features-text">
                  <div className="feature-header">{feature.header}</div>
                  <div className="feature-description">
                    {feature.description}
                  </div>
                  <LinkScroll
                    to="download"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    exact="true"
                  >
                    <Button>{feature.ctaLabel}</Button>
                  </LinkScroll>
                </div>
              </div>
            </div>
          ))}
          <Reviews />
        </div>
      </div>
    </>
  );
}

export default Features;
