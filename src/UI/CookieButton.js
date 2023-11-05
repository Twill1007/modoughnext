import * as React from "react";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import Link from "next/link";
import useCookieDough from "@/hooks/use-cookieDough";

export default function CookieButton() {
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
  return (
    <>
      <div>
        {cookieData.length > 0 ? (
          cookieData.map((cookie, index) => (
            <div key={index}>
              <Link href={"cookie-menu/" + cookie.id}>
                <Button variant="contained">{cookie.title}</Button>
              </Link>
            </div>
          ))
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </>
  );
}
