import React from "react";
import { calculatePrices } from "./Utility/pricingLogic";
import "../components/pricingMenu.css";

function PricingMenu({ cookieType }) {
  const { keys, discountedPrices } = calculatePrices();
  const dynamicClass = cookieType ? `menuCookieId${cookieType.id}` : "";

  return (
    <>
      <div className={`menuCookieId ${dynamicClass}`}></div>
      <div className="menu-div-prices">
        Price Section:
        <div>
          {keys.map((key, index) => (
            <div key={index}>
              <span>
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
