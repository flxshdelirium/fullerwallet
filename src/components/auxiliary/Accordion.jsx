import React from "react";
import { GoPlus as OpenSign } from "react-icons/go";
import { FiMinus as CloseSign } from "react-icons/fi";

function Accordion({ faq, index, toggleFAQ }) {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "closed")}
      key={`faq-id-${index}`}
      onClick={() => toggleFAQ(index)}
    >
      <div className="accordion-questions">
        {faq.question}
        <span className="signs">{faq.open ? <CloseSign /> : <OpenSign />}</span>
      </div>
      <div className="accordion-answers">{faq.answer}</div>
    </div>
  );
}

export default Accordion;
