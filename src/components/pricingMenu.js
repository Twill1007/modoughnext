import React from "react";
import { calculatePrices } from "./pricingLogic";
import "../components/pricingMenu.css";

function PricingMenu({ cookieType }) {
  const { keys, discountedPrices } = calculatePrices();
  console.log("Here is the cookie Type in pricingMenu", cookieType?.id);
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
      <div className={"menuCookie-id" + cookieType?.id}>
        Here is the picture
      </div>
    </>
  );
}

export default PricingMenu;
