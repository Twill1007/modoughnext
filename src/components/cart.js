import React, { useState, Fragment } from "react";
import cartSlice from "@/state/cart-slice";
import useCart from "@/hooks/use-cart";

function CartSummary() {
  const { items } = useCart();
  //   console.log("This should be showing cart items", items);

  return (
    <Fragment>
      <h1>This is the cart summary</h1>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            {item.id} - {item.title}
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default CartSummary;
