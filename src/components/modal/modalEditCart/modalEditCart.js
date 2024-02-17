import React, { useState } from "react";
import "../modalEditCart/modalEditCart.css";
import EditCart from "@/components/Cart/EditCart";
import "../../Cart/cart.css";

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
          <div
            style={{
              height: "200px",
              margin: "20px",
            }}
            className={`cart cookie${cookieType.id}`}
          ></div>

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
