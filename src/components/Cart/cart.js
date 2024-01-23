import React, { Fragment } from "react";
import useCart from "@/hooks/use-cart";
import "../../app/order-form/page.css";

function CartSummary() {
  const { items } = useCart();

  return (
    <Fragment>
      <h2
        style={{
          backgroundColor: "yellow",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Cart Summary
      </h2>
      <div className="order-summary-container">
        <div className="flex-container-column-1">
          {items.map((item) => (
            <div
              style={{ margin: "20px" }}
              key={item.productId}
              className={`cart cookie${item.id}`}
            ></div>
          ))}
        </div>
        <div className="flex-container-column-2">
          {items.map((item) => (
            <div key={item.productId}>
              {item.label} {item.title}
            </div>
          ))}
        </div>
        <div className="flex-container-column-3">
          {items.map((item) => (
            <div key={item.productId}>${item.price}</div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default CartSummary;
