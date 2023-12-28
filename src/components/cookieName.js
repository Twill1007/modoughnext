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

  console.log("Here is the cookieData", cookieData);

  const selectedCookie = params?.cookieType
    ? cookieData.find((cookie) => cookie.id === params.cookieType)
    : undefined;
  return (
    <div>
      {selectedCookie ? (
        <div>{selectedCookie.title}</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default CookieName;
