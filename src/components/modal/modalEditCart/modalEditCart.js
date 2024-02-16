import React, { useState } from "react";
import "../modalEditCart/modalEditCart.css";
import EditCart from "@/components/Cart/EditCart";

const ModalEditCart = ({
  children,
  onCartOptionChoice,
  cookieEditId,
  cookieType,
}) => {
  return (
    <>
      <div className="modalOverlay">
        <div className="modalContent">
          <div>Change Quantity</div>
          <EditCart
            cookieType={cookieType}
            onCartOptionChoice={onCartOptionChoice}
            cookieEditId={cookieEditId}
          />
          <button
            className="buttons"
            onClick={() => onCartOptionChoice("cancel")}
          >
            Cancel
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default ModalEditCart;
