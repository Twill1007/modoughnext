import React, { useEffect, useState } from "react";
import useCookieDough from "../hooks/use-cookieDough";
import { getDiscountedPrice } from "../hooks/use-cookieDough";

function PricingMenu() {
  let cookies = useCookieDough();

  return <div>Prices</div>;
}

export default PricingMenu;
