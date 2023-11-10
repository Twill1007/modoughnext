import React, { useEffect, useState } from "react";
import useCookieDough from "../hooks/use-cookieDough";
// import { getDiscountedPrice } from "../hooks/use-cookieDough";
import cookieDough from "@/constants/cookie-dough";
import { DISCOUNT_TABLE } from "@/constants/discount-table";

function PricingMenu() {
  const { getDiscountedPrice } = useCookieDough();
  let cookieDozens = DISCOUNT_TABLE;

  const keys = Object.keys(cookieDozens);
  const prices = cookieDough.map((cookie) => cookie.basePrice);

  const discountedPrices = keys.map((key, index) => {
    const basePrice = prices[index];
    return getDiscountedPrice(key, basePrice);
  });
  console.log(discountedPrices);

  return (
    <>
      <div>
        Price Section:
        {keys.map((key, index) => (
          <div key={index}>
            <span>
              {key} Dozen: {discountedPrices[index]}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default PricingMenu;
