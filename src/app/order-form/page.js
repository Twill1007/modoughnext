"use client";
import React, { Fragment } from "react";

import CartSummary from "../../components/Cart/Cart";
import OrderForm from "@/components/orderForm/OrderForm";
import "../order-form/orderFormPage.css";

const OrderPage = () => {
  return (
    <Fragment>
      <div className="order-page-container">
        <CartSummary />
        <OrderForm />
      </div>
    </Fragment>
  );
};

export default OrderPage;
