import React, { Fragment } from "react";
import useCart from "@/hooks/use-cart";
import "../../app/order-form/page.css";

function CartSummary() {
  const { items } = useCart();

  const itemPrices = items.map((price) => price.price);

  const totalPrice = itemPrices.reduce((sum, price) => sum + price, 0);

  return (
    <Fragment>
      <div className="order-summary-container">
        <h1>This is the cart summary</h1>
        <div className="flex-container-row">
          {items.map((item) => (
            <div className="flex-container-column-1" key={item.productId}>
              {item.id}
            </div>
          ))}
          {items.map((item) => (
            <div className="flex-container-column-2" key={item.productId}>
              {item.label} {item.title} {item.price}
            </div>
          ))}
        </div>
      </div>
      <div> Total Price: {totalPrice} </div>
    </Fragment>
  );
}

export default CartSummary;
