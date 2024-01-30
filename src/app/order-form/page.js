"use client";
import React, { Fragment, useEffect, useState } from "react";
import useCookieDough from "@/hooks/use-cookieDough";
import CartSummary from "../../components/Cart/Cart";
import OrderForm from "@/components/orderForm/OrderForm";
import "../order-form/orderFormPage.css";
import useCart from "@/hooks/use-cart";
import CartOptions from "@/components/cartOptions/CartOptions";

const OrderPage = ({ params }) => {
  const [cookieData, setCookieData] = useState([]);
  const { getCookieDough } = useCookieDough();
  const { items } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cookieDoughData = await getCookieDough();
        setCookieData(cookieDoughData);
      } catch (error) {
        console.log("Did not receive data", error);
      }
    };
    fetchData();
  }, []);

  const selectedCookie = cookieData.find(
    (cookie) => cookie.id === params.cookieType
  );
  return (
    <Fragment>
      <div className="order-page-container">
        <CartOptions cookieType={selectedCookie} />
        <CartSummary cookieType={selectedCookie} />
        {items.length > 0 && <OrderForm />}
      </div>
    </Fragment>
  );
};

export default OrderPage;
