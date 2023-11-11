// import React, { useState } from "react";
import cookieDough from "../constants/cookie-dough";
import { DISCOUNT_TABLE } from "@/constants/discount-table";

function useCookieDough() {
  const getCookieDough = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Data Received", cookieDough);
        resolve(cookieDough);
      }, 1000);
    });
  };
  const getDiscountedPrice = (dozens, basePrice) => {
    // const maxDiscountRate = 0.25;
    const maxDiscountRate = Math.max(...Object.values(DISCOUNT_TABLE));
    // TODO: find the max discount rate.
    // TODO: If the "dozens" is not found in the DISCOUNT_TABLE, use the max discount rate

    const discountRate = DISCOUNT_TABLE.hasOwnProperty(dozens)
      ? DISCOUNT_TABLE[dozens]
      : maxDiscountRate;

    return basePrice * (1 - discountRate);
  };

  return { getCookieDough, getDiscountedPrice };
}

export default useCookieDough;
