import React, { useState } from "react";
import "../CookieDesciptionAccord/CookieDescriptionAccord.css";

function CookieDescriptionAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordionContainer">
      {items.map((item, index) => (
        <div
          className="accordionStyle"
          key={index}
          style={{
            transition: "max-height 0.5s ease",
            maxHeight: openIndex === index ? "100px" : "20px",
            backgroundColor: openIndex === index ? "var(--mainColor)" : "white",
          }}
        >
          <div onClick={() => handleToggle(index)}>{item.title}</div>
          {openIndex === index && (
            <div
              style={{
                padding: "8px",
                height: "30px",
                transition: "max-height 0.5s ease",
                maxHeight: openIndex === index ? "-100px" : "-20px",
              }}
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default CookieDescriptionAccordion;
