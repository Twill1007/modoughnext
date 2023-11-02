"use client";
import { Fragment, useEffect, useState } from "react";
import getCookieDough from "@/constants/cookie-dough";
import ItemSelector from "@/components/itemSelector";

function CookieOrder({ params }) {
  const selectedCookie = getCookieDough.find(
    (cookie) => cookie.id === params.cookieType
  );

  return (
    <Fragment>
      <div>{selectedCookie.title}</div>

      <ItemSelector cookieType={selectedCookie} />
    </Fragment>
  );
}

export default CookieOrder;
