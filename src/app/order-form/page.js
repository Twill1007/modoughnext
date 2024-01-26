"use client";
import React, { Fragment } from "react";

import CartSummary from "../../components/Cart/Cart";
import OrderForm from "@/components/orderForm/OrderForm";
import "../order-form/orderFormPage.css";
import useCart from "@/hooks/use-cart";

const OrderPage = () => {
  const { items } = useCart();
  return (
    <Fragment>
      <div className="order-page-container">
        <CartSummary />
        {items.length > 0 && <OrderForm />}
      </div>
    </Fragment>
  );
};

export default OrderPage;
