import React, { useEffect, useState } from "react";
import useCookieDough from "../hooks/use-cookieDough";

import { DISCOUNT_TABLE } from "@/constants/discount-table";

function PricingMenu() {
  const { getCookieDough } = useCookieDough();

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

  let cookieDiscount = DISCOUNT_TABLE;
  const keys = Object.keys(cookieDiscount);
  const totalPrice = keys.map((x) => +x * 10);

  const discount = Object.values(cookieDiscount).map((value) => {
    return value;
  });

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
