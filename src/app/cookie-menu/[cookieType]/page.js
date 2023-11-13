"use client";
import { Fragment, useEffect, useState } from "react";
import cookieDough from "@/constants/cookie-dough";
import useCookieDough from "@/hooks/use-cookieDough";
import ItemSelector from "@/components/itemSelector";
import PricingMenu from "@/components/pricingMenu";

function CookieOrder({ params }) {
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

  const selectedData = cookieData.map((cookie) => cookie.title);

  const selectedCookie = cookieDough.find(
    (cookie) => cookie.id === params.cookieType
  );
  console.log("This is the selectedCookie.id", selectedCookie.id);

  return (
    <Fragment>
      <div>{selectedCookie.title}</div>
      <PricingMenu />
      <ItemSelector cookieType={selectedCookie} />
    </Fragment>
  );
}

export default CookieOrder;
