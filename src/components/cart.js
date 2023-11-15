import React, { useState, Fragment } from "react";

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
            {item.label} {item.type}
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default CartSummary;
