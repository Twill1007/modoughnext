import React, { useState, useEffect } from "react";
import useCookieDough from "@/hooks/use-cookieDough";

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
        <div className="cookie-title">{selectedCookie.title}</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default CookieName;
