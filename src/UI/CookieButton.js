import * as React from "react";
import styles from "../app/menu.css";
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
        console.log("This is the cookie data", cookieDoughData);
      } catch (error) {
        console.log("Did not receive data", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="btnContainer">
        {cookieData.map((cookie, index) => (
          <Link href={"cookie-menu/" + cookie.id}>
            <div className={"cookieBtn cookie" + cookie.id} key={index}>
              {cookie.title}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
