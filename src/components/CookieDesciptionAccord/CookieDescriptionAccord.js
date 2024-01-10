import React, { useState } from "react";

function CookieDescriptionAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            cursor: "pointer",
            padding: "8px",

            backgroundColor: openIndex === index ? "#e0e0e0" : "white",
          }}
        >
          <div onClick={() => handleToggle(index)}>{item.title}</div>
          {openIndex === index && (
            <div style={{ padding: "8px" }}>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default CookieDescriptionAccordion;
