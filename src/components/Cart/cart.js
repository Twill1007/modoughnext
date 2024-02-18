import React, { Fragment, useState } from "react";
import useCart from "@/hooks/use-cart";
import "../Cart/cart.css";

import ModalEditCart from "../modal/modalEditCart/modalEditCart";

function CartSummary() {
  const { items } = useCart();
  const [cookieEditId, setCookieEditId] = useState(null);
  const [selectedCookie, setSelectedCookie] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [showEditCartModal, setShowEditCartModal] = useState(false);

  const itemPrices = items.map((price) => price.price);
  const totalPrice = itemPrices.reduce((sum, price) => sum + price, 0);

  const toggleEditMode = () => {
    setEditMode((prevEditMode) => !prevEditMode);
  };

  const handleCartOptionChoice = (choice) => {
    if (choice === "cancel") {
      setShowEditCartModal(false);
      setCookieEditId(null);
    }
  };

  const handleShowEditModal = () => {
    setShowEditCartModal(true);
  };

  const closeModal = () => {
    setShowEditCartModal(false);
  };

  const showCartItem = (index, item) => {
    const clickedObject = items[index];
    setCookieEditId(clickedObject.id);
    setSelectedCookie(item);
    console.log("This is the clicked object", clickedObject);
  };

  return (
    <Fragment>
      <div className="cart-order-summary-container">
        {items.length > 0 ? (
          <div className="cart-flex-container">
            {items.map((item, index) => (
              <div key={item.productId}>
                {editMode ? (
                  <div
                    className="cart-flex-container-row-edit-mode"
                    onClick={() => {
                      handleShowEditModal();
                      showCartItem(index, item);
                    }}
                  >
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
          <div>
            <div>No items in the cart</div>
          </div>
        )}
        {items.length > 0 && (
          <div className="price-edit-button-container">
            <div className="cart-total-price">Total Price: ${totalPrice}</div>
            {editMode && (
              <span className="edit-comment">Select Cookies to Edit</span>
            )}
            <div>
              <button
                onClick={toggleEditMode}
                className="buttons"
                style={{ margin: "0px" }}
              >
                {editMode ? "Done Editing" : "Edit Cart Items"}
              </button>
            </div>
          </div>
        )}
      </div>
      {showEditCartModal && (
        <ModalEditCart
          onCartOptionChoice={handleCartOptionChoice}
          cookieEditId={cookieEditId}
          cookieType={selectedCookie}
        />
      )}
    </Fragment>
  );
}

export default CartSummary;
