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
      } catch (error) {
        console.log("Did not receive data", error);
      }
    };
    fetchData();
  }, []);
  console.log(cookieData);
  return (
    <>
      <div className="btnContainer">
        {cookieData.length > 0 ? (
          cookieData.map((cookie, index) => (
            <div className="menuBtn" key={index}>
              <Link href={"cookie-menu/" + cookie.id}>
                <div
                  className={
                    (".cookieBtn.shared-styles",
                    `cookieBtn ${
                      cookie.title === "Chocolate Chip Cookie"
                        ? "cookieCC"
                        : "cookieSD"
                    }`)
                  }
                >
                  {cookie.title}
                </div>
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
