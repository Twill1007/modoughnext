"use client";
import useCart from "@/hooks/use-cart";
import Image from "next/image";
import useCookieDough from "@/hooks/use-cookieDough";
import { useState } from "react";

export default function Home() {
  const { addItem, removeItem, items } = useCart();
  const { getCookieDough, getDiscountedPrice } = useCookieDough();

  const cookieArray = useState(getCookieDough());

  const addItemHandler = () => {
    const cookieDough = {
      title: "Chocolate Chip",
      quantity: 1,
      price: getDiscountedPrice(1, 10),
    };
    addItem(cookieDough);
  };

  return (
    <main>
      <div>
        <button onClick={addItemHandler}>Add Item</button>
        {items.map((item) => (
          <div>{item.title}</div>
        ))}
      </div>
    </main>
  );
}
