import React from "react";
import "../modalCookie/modal.css";
import useCart from "@/hooks/use-cart";

const ModalCookie = ({ children, onCartOptionChoice }) => {
  const { items } = useCart();
  const itemsInCart = items.map((i) => i.title);

  return (
    <>
      <div className="modalOverlay">
        <div className="modalContent">
          <p>
            You already have {`${itemsInCart}`} cookies in your cart. If you
            want to replace, click "replace" or edit your cart items.
          </p>

          {children}
          <div className="button">
            <button onClick={() => onCartOptionChoice("cancel")}>Cancel</button>
            <button onClick={() => onCartOptionChoice("replace")}>
              Replace
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCookie;
