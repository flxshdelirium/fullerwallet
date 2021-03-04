import React, { useState } from "react";
import Accordion from "./auxiliary/Accordion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "Why should I get Fuller Wallet?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      open: false,
    },
    {
      question: "Who is Fuller Wallet?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      open: false,
    },
    {
      question: "How does Fuller Wallet work?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      open: false,
    },
    {
      question: "Is Fuller Wallet trustworthy?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      open: false,
    },
    {
      question: "How can I get in touch with a Fuller Wallet agent?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  const faqSection = "FAQ";
  const faqTitle = "Your questions answered";

  return (
    <>
      <div className="faq-container" id="faq">
        <div className="faq-wrapper">
          <h2 className="section-name">{faqSection}</h2>
          <h2 className="section-title">{faqTitle}</h2>
          <div className="accordion">
            <div className="accordion-wrapper">
              {faqs.map((faq, i) => (
                <Accordion
                  faq={faq}
                  index={i}
                  key={`faq-id-${i}`}
                  toggleFAQ={toggleFAQ}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
