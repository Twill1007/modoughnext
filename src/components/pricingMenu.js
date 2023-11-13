import React, { useEffect, useState } from "react";
import useCookieDough from "../hooks/use-cookieDough";

import { DISCOUNT_TABLE } from "@/constants/discount-table";

function PricingMenu() {
  const { getDiscountedPrice, getCookieDough } = useCookieDough();

  const [cookieData, setCookieData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cookieDoughData = await getCookieDough();
        // console.log("Received data from getCookieDough:", cookieDoughData);
        setCookieData(cookieDoughData);
      } catch (error) {
        console.log("Did not receive data", error);
      }
    };
    fetchData();
  }, []);

  const prices = cookieData.map((cookie, index) => +cookie.basePrice);
  // console.log("Why is this an empty array", prices);
  let cookieDiscount = DISCOUNT_TABLE;
  const keys = Object.keys(cookieDiscount);
  const totalPrice = keys.map((x) => +x * 10);
  // console.log("price per dozen [10, 20, 30, 40, 50]", totalPrice);
  // console.log("keys", keys);

  const discount = Object.values(cookieDiscount).map((value) => {
    return value;
  });

  // console.log("discount per quantity", discount);

  const discountedPrices = totalPrice.map(
    (total, index) => total * discount[index]
  );

  // console.log("will this be the array I need?", discountedPrices);

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
