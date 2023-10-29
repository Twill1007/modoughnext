"use client";
import { Fragment } from "react";
import cookieDough from "@/constants/cookie-dough";
import ItemSelector from "@/components/itemSelector";

function CookieOrder({ params }) {
  const selectedCookie = cookieDough.find(
    (cookie) => cookie.id === params.cookieType
  );

  return (
    <Fragment>
      <div>{selectedCookie.title}</div>

      <ItemSelector />
    </Fragment>
  );
}

export default CookieOrder;
