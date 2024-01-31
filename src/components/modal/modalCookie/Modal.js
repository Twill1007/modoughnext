import React from "react";
import "../modalCookie/modal.css";
import "../../itemSelector.css";

const ModalCookie = ({ children, onCartOptionChoice }) => {
  return (
    <>
      <div className="modalOverlay">
        <div className="modalContent">
          <p>
            You already have this cookie item in your cart. If you want to
            replace, click "Replace" or "Edit Cart Items".
          </p>

          {children}
          <div>
            <button
              className="modalButtons"
              onClick={() => onCartOptionChoice("cancel")}
            >
              Cancel
            </button>
            <button
              className="modalButtons"
              onClick={() => onCartOptionChoice("replace")}
            >
              Replace
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCookie;
