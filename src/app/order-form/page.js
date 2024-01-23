"use client";
import React, { Fragment } from "react";
import "../order-form/page.css";
import CartSummary from "../../components/Cart/cart";
import OrderForm from "@/components/orderForm/OrderForm";
import useCart from "@/hooks/use-cart";

const OrderPage = () => {
  const { items } = useCart();
  const userOrder = CartSummary();

  const itemPrices = items.map((price) => price.price);

  const totalPrice = itemPrices.reduce((sum, price) => sum + price, 0);
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          marginTop: "50px",
          backgroundColor: "orange",
          justifyContent: "space-around",
        }}
      >
        <div>{userOrder}</div>
      </div>
      <div
        style={{
          marginTop: "50px",
          backgroundColor: "green",
          width: "50%",
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        Total Price: ${totalPrice}
      </div>
      <OrderForm />
    </Fragment>
  );
};

export default OrderPage;
