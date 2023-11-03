"use client";
import { useEffect } from "react";
import Link from "next/link";

import cookieDough from "@/constants/cookie-dough";

export default function Home() {
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
        {cookieDough.map((cookie, index) => (
          <div key={index}>
            <Link href={"cookie-menu/" + cookie.id}>
              <button>{cookie.title}</button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
