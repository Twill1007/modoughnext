import React, { Fragment, useState } from "react";
import useCart from "@/hooks/use-cart";
import "../Cart/cart.css";

function CartSummary() {
  const { items } = useCart();
  const [editMode, setEditMode] = useState(false);

  const itemPrices = items.map((price) => price.price);
  const totalPrice = itemPrices.reduce((sum, price) => sum + price, 0);

  const toggleEditMode = () => {
    setEditMode((prevEditMode) => !prevEditMode);
  };

  return (
    <Fragment>
      <div className="cart-order-summary-container">
        {items.length > 0 ? (
          <div className="cart-flex-container">
            {items.map((item) => (
              <div key={item.productId}>
                {editMode ? (
                  <div className="cart-flex-container-row-edit-mode">
                    <div className={`cart cookie${item.id}`}></div>
                    <div>{item.label}</div>
                    <div>{item.title}</div>
                    <div>${item.price}</div>
                  </div>
                ) : (
                  <div className="cart-flex-container-row">
                    <div className={`cart cookie${item.id}`}></div>
                    <div>{item.label}</div>
                    <div>{item.title}</div>
                    <div>${item.price}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div>No items in the cart</div>
        )}
        {items.length > 0 && (
          <div className="price-edit-button-container">
            <div className="cart-total-price">Total Price: ${totalPrice}</div>
            <div>
              <button onClick={toggleEditMode}>
                {editMode ? "Done Editing" : "Edit Cart Items"}
              </button>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default CartSummary;
