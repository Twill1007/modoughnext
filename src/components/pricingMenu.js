import React from "react";
import { calculatePrices } from "./Utility/pricingLogic";

function PricingMenu() {
  const { keys, discountedPrices } = calculatePrices();

  return (
    <>
      <div>
        <div style={{ borderBottom: "solid black 1px" }}>Price Section:</div>
        <div>
          {keys.map((key, index) => (
            <div key={index}>
              <span style={{ fontFamily: "Handlee" }}>
                {key} Dozen: ${discountedPrices[index]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PricingMenu;
