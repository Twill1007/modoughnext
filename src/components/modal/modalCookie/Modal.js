import React from "react";
import "../modalCookie/modal.css";

const ModalCookie = ({ onClose, children, onCartOptionChoice }) => {
  return (
    <>
      <div className="modalOverlay">
        <div className="modalContent">
          <p>
            You already have this cookie type in your cart. If you want to
            change the quantity, click "edit cart" and remove the item to select
            a new quantity.
          </p>

          {children}
        </div>
        <div className="button">
          <button onClick={() => onCartOptionChoice("combine")}>Combine</button>
          <button onClick={() => onCartOptionChoice("replace")}>Replace</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </>
  );
};

export default ModalCookie;
