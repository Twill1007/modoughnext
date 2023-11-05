"use client";

// import { useEffect, useState } from "react";
import Link from "next/link";
// import useCookieDough from "@/hooks/use-cookieDough";
import CookieButton from "@/UI/CookieButton";

export default function Home() {
  //   const { getCookieDough } = useCookieDough();
  //   const [cookieData, setCookieData] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const cookieDoughData = await getCookieDough();
  //         setCookieData(cookieDoughData);
  //       } catch (error) {
  //         console.log("Did not receive data", error);
  //       }
  //     };
  //     fetchData();
  //   }, []);

  return (
    <main>
      <div>
        <Link href="/cookie-home">Home</Link>
      </div>
      <div>
        <Link href="/cookie-about">About Us</Link>
      </div>
      <h1>Menu Page</h1>
      <CookieButton />
      {/* <div>
        {cookieData.length > 0 ? (
          cookieData.map((cookie, index) => (
            <div key={index}>
              <Link href={"cookie-menu/" + cookie.id}>
                <CookieButton>{cookie.title}</CookieButton>
              </Link>
            </div>
          ))
        ) : (
          <p>Loading data...</p>
        )}
      </div> */}
    </main>
  );
}
