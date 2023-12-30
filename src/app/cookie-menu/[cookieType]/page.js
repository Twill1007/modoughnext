"use client";
import { Fragment, useEffect, useState } from "react";
import useCookieDough from "@/hooks/use-cookieDough";
import ItemSelector from "@/components/itemSelector";
import PricingMenu from "@/components/pricingMenu";
import CookieName from "@/components/cookieName";
import MenuCookiePicture from "@/components/menuCookiePicture";
import "../[cookieType]/page.css";

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
      <div className="flex-container">
        <div className="cookie-title">
          <CookieName params={params} />
        </div>
        <div className="pricing-menu">
          <PricingMenu cookieType={selectedCookie} />
        </div>
        <div className="cookie-description">
          Experience the ultimate convenience and freshness with our frozen
          chocolate chip cookie dough balls. Immerse yourself in the aroma of
          gourmet baking without the effort. Crafted from the finest
          ingredients, each perfectly portioned ball guarantees a batch of warm,
          gooey cookies in minutes.
        </div>
        <div className="menu-cookie-picture">
          <MenuCookiePicture cookieType={selectedCookie} />
        </div>

        <div style={{ width: "35%", backgroundColor: "blue" }}>
          <ItemSelector cookieType={selectedCookie} />
        </div>
      </div>
    </Fragment>
  );
}

export default CookieOrder;
