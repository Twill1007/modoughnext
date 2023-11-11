import React from "react";

import cookieDough from "@/constants/cookie-dough";
import { DISCOUNT_TABLE } from "@/constants/discount-table";

function PricingMenu() {
  // const { getDiscountedPrice } = useCookieDough();
  const prices = cookieDough.map((cookie, index) => +cookie.basePrice);
  console.log("prices", prices);
  let cookieDiscount = DISCOUNT_TABLE;
  let cookieIncrementPrice = 10;
  let fudgeIncrementPrice = 1;

  const keys = Object.keys(cookieDiscount);
  const totalPrice = keys.map((x) => +x * cookieIncrementPrice);
  console.log("price per dozen [10, 20, 30, 40, 50]", totalPrice);
  console.log("keys", keys);

  const discount = Object.values(cookieDiscount).map((value) => {
    return value;
  });

  console.log("discount per quantity", discount);

  const discountedPrices = totalPrice.map(
    (total, index) => total * discount[index]
  );

  console.log("will this be the array I need?", discountedPrices);

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
