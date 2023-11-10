"use client";
import { Fragment, useEffect, useState } from "react";
import cookieDough from "@/constants/cookie-dough";
import ItemSelector from "@/components/itemSelector";
import PricingMenu from "@/components/pricingMenu";

function CookieOrder({ params }) {
  const selectedCookie = cookieDough.find(
    (cookie) => cookie.id === params.cookieType
  );
  console.log(selectedCookie.title);

  return (
    <Fragment>
      <div>{selectedCookie.title}</div>
      <PricingMenu />
      <ItemSelector cookieType={selectedCookie} />
    </Fragment>
  );
}

export default CookieOrder;
