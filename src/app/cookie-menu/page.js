"use client";

import Link from "next/link";
import useCart from "@/hooks/use-cart";
import useCookieDough from "@/hooks/use-cookieDough";
import { useState } from "react";
import cookieDough from "@/constants/cookie-dough";

export default function Home() {
  const { addItem, removeItem, items } = useCart();
  const { getCookieDough, getDiscountedPrice } = useCookieDough();

  const cookieArray = useState(getCookieDough());

  const addItemHandler = () => {
    const selectedCookie = cookieDough.find((cookie) => cookie.id === 1);
    if (selectedCookie) {
      const cookieItem = {
        id: selectedCookie.id,
        quantity: selectedCookie.quantity,
        title: selectedCookie.title,
        price: getDiscountedPrice(
          selectedCookie.quantity,
          selectedCookie.basePrice
        ),
      };
      addItem(cookieItem);
    }
  };

  const removeItemHandler = () => {
    removeItem(1);
  };

  return (
    <main>
      <div>
        <Link href="/cookie-home">Home</Link>
      </div>
      <div>
        <Link href="/cookie-about">About Us</Link>
      </div>
      <h1>Menu Page</h1>

      <Link href="/cookie-menu/chocolate-chip">
        <button>Chocolate Chip Cookie</button>
      </Link>
      <Link href="/cookie-menu/snickerdoodles">
        <button>Snickerdoodles</button>
      </Link>
      {/* <div>
        <button onClick={addItemHandler}>Add</button> <br />
        <button onClick={removeItemHandler}>Remove</button>
        {items.map((item) => (
          <li key={item.id}>
            {item.title}
            {item.quantity}
            {item.price}
          </li>
        ))}
      </div> */}
    </main>
  );
}
