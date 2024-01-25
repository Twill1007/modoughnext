"use client";
import React, { Fragment } from "react";
import useCart from "@/hooks/use-cart";
import "../Cart/cart.css";

function CartSummary() {
  const { items } = useCart();

  const itemPrices = items.map((price) => price.price);
  const totalPrice = itemPrices.reduce((sum, price) => sum + price, 0);

  return (
    <Fragment>
      <div className="cart-order-summary-container">
        <div className="cart-flex-container">
          <div className="cart-flex-container-column-1">
            {items.map((item) => (
              <div
                style={{ margin: "20px" }}
                key={item.productId}
                className={`cart cookie${item.id}`}
              ></div>
            ))}
          </div>
          <div className="cart-flex-container-column-2-title">
            {items.map((item) => (
              <div key={item.productId}>
                {item.label} {item.title}
              </div>
            ))}
          </div>
          <div className="cart-flex-container-column-3">
            {items.map((item) => (
              <div key={item.productId}>${item.price}</div>
            ))}
          </div>
        </div>
        <div className="cart-total-price">Total Price: ${totalPrice}</div>
      </div>
    </Fragment>
  );
}

export default CartSummary;
