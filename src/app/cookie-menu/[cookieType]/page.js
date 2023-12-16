"use client";
import { Fragment, useEffect, useState } from "react";
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
        setCookieData(cookieDoughData);
      } catch (error) {
        console.log("Did not receive data", error);
      }
    };
    fetchData();
  }, []);

  const selectedCookie = cookieData.find(
    (cookie) => cookie.id === params.cookieType
  );

  return (
    <Fragment>
      {selectedCookie ? (
        <div>{selectedCookie.title}</div>
      ) : (
        <div>Loading...</div>
      )}
      <div>
        <PricingMenu cookieType={selectedCookie} />
        <ItemSelector cookieType={selectedCookie} />
      </div>
    </Fragment>
  );
}

export default CookieOrder;
