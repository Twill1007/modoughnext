"use client";
import React, { useState, Fragment } from "react";
import Link from "next/link";
import CartSummary from "@/components/cart";

const OrderPage = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const userOrder = CartSummary();
  return (
    <Fragment>
      <h1> Order Form Page/Cart Summary</h1>
      <div
        style={{
          border: "solid 1px black",
          position: "absolute",
          top: "250px",
          width: "400px",
          height: "600px",
        }}
      >
        {userOrder}
      </div>
      {/* <form
        style={{
          border: "solid 1px black",
          position: "absolute",
          right: "800px",
          width: "400px",
          height: "600px",
        }}
      >
        <label>
          First Name:
          <input
            type="text"
            inputValue={inputValue}
            onChange={handleChange}
          ></input>
          Last Name:
          <input
            type="text"
            inputValue={inputValue}
            onChange={handleChange}
          ></input>
          Email:
          <input
            type="email"
            inputValue={inputValue}
            onChange={handleChange}
          ></input>
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </form> */}
    </Fragment>
  );
};

export default OrderPage;
