import React from "react";
import "../components/pricingMenu.css";

function MenuCookiePicture({ cookieType }) {
  const dynamicClass = cookieType ? `menuCookieId${cookieType.id}` : "";

  return (
    <>
      <div className={`menuCookieId ${dynamicClass}`}></div>;
    </>
  );
}

export default MenuCookiePicture;
