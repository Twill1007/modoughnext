import React from "react";
import { calculatePrices } from "./Utility/pricingLogic";
import "../components/pricingMenu.css";

function PricingMenu({ cookieType }) {
  const { keys, discountedPrices } = calculatePrices();

  return (
    <>
      <div className="menu-div-main">
        Price Section:
        <div className="menu-div-prices">
          {keys.map((key, index) => (
            <div key={index}>
              <span>
                {key} Dozen: ${discountedPrices[index]}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className={"menuCookie-id" + cookieType?.id}></div>
    </>
  );
}

export default PricingMenu;
