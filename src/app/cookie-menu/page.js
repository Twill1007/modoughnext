"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
// import cookieDough from "@/constants/cookie-dough";
import useCookieDough from "@/hooks/use-cookieDough";

export default function Home() {
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
    <main>
      <div>
        <Link href="/cookie-home">Home</Link>
      </div>
      <div>
        <Link href="/cookie-about">About Us</Link>
      </div>
      <h1>Menu Page</h1>

      <div>
        {cookieData.length > 0 ? (
          cookieData.map((cookie, index) => (
            <div key={index}>
              <Link href={"cookie-menu/" + cookie.id}>
                <button>{cookie.title}</button>
              </Link>
            </div>
          ))
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </main>
  );
}
