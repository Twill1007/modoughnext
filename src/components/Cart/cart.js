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
          {items.length > 0 ? (
            <>
              {items.map((item) => (
                <div key={item.productId} className="cart-flex-container-row">
                  <div className={`cart cookie${item.id}`}></div>
                  <div>{item.label}</div>
                  <div>{item.title}</div>
                  <div>${item.price}</div>
                </div>
              ))}
            </>
          ) : (
            <div>No items in the cart</div>
          )}
        </div>
        <div className="price-edit-button-container">
          <div className="cart-total-price">Total Price: ${totalPrice}</div>
          {items.length > 0 && (
            <div>
              <button>Edit Cart Items</button>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default CartSummary;
