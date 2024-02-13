import React, { useState } from "react";
import "../modalEditCart/modalEditCart.css";
import EditCart from "@/components/Cart/EditCart";

const ModalEditCart = ({ children, onCartOptionChoice, cookieEditId }) => {
  return (
    <>
      <div className="modalOverlay">
        <div className="modalContent">
          <div>Change Quantity</div>
          <EditCart cookieEditId={cookieEditId} />
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
