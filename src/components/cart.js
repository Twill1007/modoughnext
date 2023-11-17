import React, { Fragment } from "react";
import useCart from "@/hooks/use-cart";

function CartSummary() {
  const { items } = useCart();

  const itemPrices = items.map((price) => price.price);

  const totalPrice = itemPrices.reduce((sum, price) => sum + price, 0);

  console.log("This is the total Price:", totalPrice);

  return (
    <Fragment>
      <h1>This is the cart summary</h1>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            {item.label} {item.title} {item.price}
          </div>
        ))}
      </div>
      <div> Total Price: {totalPrice} </div>
    </Fragment>
  );
}

export default CartSummary;
