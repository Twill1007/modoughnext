import React, { useState, useEffect } from "react";
import useCookieDough from "@/hooks/use-cookieDough";
import "../components/cookieName.css";

function CookieName({ params }) {
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

  const selectedCookie = params?.cookieType
    ? cookieData.find((cookie) => cookie.id === params.cookieType)
    : undefined;
  return (
    <div>
      {selectedCookie ? (
        <div id="cookie-title">{selectedCookie.title}</div>
      ) : (
        <div id="cookie-title">Loading...</div>
      )}
    </div>
  );
}

export default CookieName;
