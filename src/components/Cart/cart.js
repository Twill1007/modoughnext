import React, { Fragment, useEffect, useState } from "react";

import useCart from "@/hooks/use-cart";
import "../../app/order-form/page.css";
import useCookieDough from "@/hooks/use-cookieDough";

function CartSummary() {
  const { items } = useCart();
  const { getCookieDough } = useCookieDough();
  const [cookieData, setCookieData] = useState([]);

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

  const itemPrices = items.map((price) => price.price);

  const totalPrice = itemPrices.reduce((sum, price) => sum + price, 0);

  return (
    <Fragment>
      <h1>This is the cart summary</h1>
      <div className="order-summary-container">
        <div className="flex-container-column-1">
          {items.map((item) => (
            <div key={item.productId} className={`cart cookie${item.id}`}></div>
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
      <div> Total Price:${totalPrice} </div>
    </Fragment>
  );
}

export default CartSummary;
