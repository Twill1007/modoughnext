import React from "react";
import { calculatePrices } from "./pricingLogic";

function PricingMenu() {
  const { keys, discountedPrices } = calculatePrices();

  return (
    <>
      <div>
        Price Section:
        {keys.map((key, index) => (
          <div key={index}>
            <span>
              {key} Dozen: ${discountedPrices[index]}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default PricingMenu;
