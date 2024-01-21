"use client";
import React, { useState, Fragment } from "react";
import "../order-form/page.css";
import CartSummary from "../../components/Cart/cart";

const OrderPage = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const userOrder = CartSummary();
  return <Fragment>{userOrder}</Fragment>;
};

export default OrderPage;
