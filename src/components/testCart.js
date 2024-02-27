"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import React from "react";

function TestCart() {
  const router = useRouter();
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setCartData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("api/cart", {
      method: "POST",
      body: JSON.stringify({ cartData }),
      "content-type": "application/json",
    });

    if (!res.ok) {
      throw new Error("Failed to create cart");
    }
    router.refresh();
    router.push("/cookie-home");
  };

  const addingCartData = {
    title: "",
    price: "",
    quantity: "",
  };
  const [cartData, setCartData] = useState(addingCartData);
  console.log("Here is the cart data", cartData);
  return (
    <>
      <div>Test Cart Data</div>;
      <form method="POST" onSubmit={handleSubmit}>
        <h3>Create your Cart</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={cartData.title}
        />
        <label>Price</label>
        <input
          id="price"
          name="price"
          onChange={handleChange}
          required={true}
          value={cartData.price}
        />
        <label>quantity</label>
        <input
          id="quantity"
          name="quantity"
          type="number"
          onChange={handleChange}
          required={true}
          value={cartData.quantity}
        />
        <input type="submit" value="Test Cart"></input>
      </form>
    </>
  );
}

export default TestCart;
