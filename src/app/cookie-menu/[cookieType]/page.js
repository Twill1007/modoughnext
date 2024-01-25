"use client";
import { Fragment, useEffect, useState } from "react";
import useCookieDough from "@/hooks/use-cookieDough";
import ItemSelector from "@/components/itemSelector";
import PricingMenu from "@/components/PricingMenu";
import CookieName from "@/components/cookieName";
import MenuCookiePicture from "@/components/menuCookiePicture";
import "../[cookieType]/page.css";
import CookieDescriptionAccordion from "@/components/CookieDesciptionAccord/CookieDescriptionAccord";

function CookieOrder({ params }) {
  const { getCookieDough } = useCookieDough();
  const [cookieData, setCookieData] = useState([]);

  const items = [
    { title: "Ingedients", content: "List of dairy free ingredients" },
    {
      title: "Baking Instructions",
      content: "Instructions for baking cookies",
    },
    { title: "Reviews", content: "These cookies have not been reviewed." },
  ];

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
      <div className="flex-container-row">
        <div className="flex-container-column-1">
          <div className="cookie-title">
            <CookieName params={params} />
          </div>
          <MenuCookiePicture cookieType={selectedCookie} />
          <CookieDescriptionAccordion items={items} />
        </div>
        <div className="flex-container-column-2">
          <div className="pricing-menu">
            <PricingMenu cookieType={selectedCookie} />
          </div>

          <div className="cookie-description">
            Experience the ultimate convenience and freshness with our frozen
            chocolate chip cookie dough balls. Immerse yourself in the aroma of
            gourmet baking without the effort. Crafted from the finest
            ingredients, each perfectly portioned ball guarantees a batch of
            warm, gooey cookies in minutes.
          </div>
          <ItemSelector cookieType={selectedCookie} />
        </div>
      </div>
    </Fragment>
  );
}

export default CookieOrder;
