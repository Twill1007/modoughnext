"use client";
import { Fragment, useEffect, useState } from "react";
import cookieDough from "@/constants/cookie-dough";
import ItemSelector from "@/components/itemSelector";

function CookieOrder({ params }) {
  const [selectedCookie, setSelectedCookie] = useState(null);

  useEffect(() => {
    // Only calculate selectedCookie when params.cookieType changes
    setSelectedCookie(
      cookieDough.find((cookie) => cookie.id === params.cookieType)
    );
  }, [params.cookieType !== "select"]);

  console.log("This is the selected cookie object,", selectedCookie);

  return (
    <Fragment>
      {selectedCookie ? (
        <div>{selectedCookie.title}</div>
      ) : (
        <div>Loading...</div>
      )}

      <ItemSelector cookieType={selectedCookie} />
    </Fragment>
  );
}

export default CookieOrder;
