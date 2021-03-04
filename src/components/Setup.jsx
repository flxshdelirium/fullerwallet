import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Setup = () => {
  const setupElements = [
    {
      header: "Download the app",
      icon: (
        <img src={require("../assets/step1.webp").default} alt="Setup Icon" />
      ),
      description:
        "Grab our app on your respective OS and create an account. The setup is done within a couple of minutes! ",
    },
    {
      header: "You've got mail",
      icon: (
        <img src={require("../assets/step2.webp").default} alt="Member Icon" />
      ),
      description:
        "Verify your account to get access to the fastest and best financial management features.",
    },
    {
      header: "Your wallet is now fuller",
      icon: (
        <img src={require("../assets/step3.webp").default} alt="Search Icon" />
      ),
      description:
        "That's it. You're done! Fuller Wallet keeps everything simple and transparent for you to manage!",
    },
  ];

  const revealRef = useRef(null);
  const setupHeaderRef = useRef(null);
  const setupParagraphRef = useRef(null);
  const elementsRef = useRef(null);

  const setupTAnimation = gsap.timeline();
  const setupElemAnimation = gsap.timeline();
  useEffect(() => {
    gsap.fromTo(
      revealRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: setupHeaderRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );

    setupTAnimation
      .from(setupHeaderRef.current, {
        duration: 1,
        delay: 1.8,
        y: -40,
        opacity: 0,
        ease: "power3.out",
        stagger: {
          amount: 0.2,
        },
      })

      .from(setupParagraphRef.current, {
        duration: 1,
        delay: 0.2,
        opacity: 0,
        y: -40,
        ease: "power3.out",
        stagger: {
          amount: 0.2,
        },
      });

    setupElemAnimation.from(elementsRef.current, {
      duration: 1,
      delay: 2.1,
      y: 100,
      skewY: 2,
      ease: "power3.out",
      opacity: 0,
      stagger: {
        amount: 0.2,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setupHeader = "Setup is fast and easy.";
  const setupSubheader =
    "Interested? Follow the steps below and start your journey today.";

  return (
    <div className="setup-container" id="setup" ref={revealRef}>
      <div className="setup-wrapper">
        <div className="setup-text" ref={setupHeaderRef}>
          <h2 className="setup-header">{setupHeader}</h2>
          <h2 className="setup-subheading" ref={setupParagraphRef}>
            {setupSubheader}
          </h2>
        </div>
        <div className="setup-elements" ref={elementsRef}>
          {setupElements.map((steps, i) => (
            <div className="setup-step" key={`setup-id-${i}`}>
              <div className="icon-wrapper">{steps.icon}</div>
              <h1 className="steps-header">{steps.header}</h1>
              <p className="steps-description">{steps.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Setup;
