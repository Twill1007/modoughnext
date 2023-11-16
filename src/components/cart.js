import React, { Fragment } from "react";
import useCart from "@/hooks/use-cart";
import { calculatePrices } from "./pricingLogic";

function CartSummary() {
  const { keys, discountedPrices } = calculatePrices();
  const { items } = useCart();

  console.log("Discounted Prices", discountedPrices);
  console.log("This is the quantity", keys);

  const cartItems = items.map((item) => +item.value);
  console.log("Is this a number", cartItems);

  const cookieQuantity = keys.map((key) => {
    return +key;
  });
  console.log("Quantity of cookies", cookieQuantity);
  return (
    <Fragment>
      <h1>This is the cart summary</h1>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            {item.label} {item.title} cookies!
          </div>
        ))}
      </div>
      <div> Total Price: </div>
    </Fragment>
  );
}

export default CartSummary;
