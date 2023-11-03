import React, { useEffect, useState } from "react";
import useCookieDough from "../hooks/use-cookieDough";
import { getDiscountedPrice } from "../hooks/use-cookieDough";

function PricingMenu() {
  const [cookieData, setCookieData] = useState([]);
  useEffect(() => {
    useCookieDough().then((data) => {
      const extractData = data.map((cookie) => ({
        title: cookie.title,
        basePrice: cookie.basePrice,
      }));
      setCookieData(extractData);
    });
  }, []);

  //   useEffect(() => {
  //     const fetchCookieDough = async () => {
  //       try {
  //         const cookieDough = await useCookieDough();
  //         //cookieDough holds the array of cookies
  //         //This is how I access the titles within the array.
  //         cookieDough.map((cookie) => {
  //           cookie.map();

  //           console.log("Cookie Title:", cookie.title);
  //           console.log("Cookie Base Price:", cookie.basePrice);
  //         });
  //       } catch (error) {
  //         console.log("Error fetching", error);
  //       }
  //     };
  //     fetchCookieDough();
  //   }, []);

  return (
    <div>
      <h1>Cookie Dough Data</h1>
      <ul>
        {cookieData.map((cookie, index) => (
          <li key={index}>
            Title: {cookie.title}, Base Price: {cookie.basePrice}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PricingMenu;
