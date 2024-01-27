import React from "react";
import "../modalEditCart/modalEditCart.css";
import useCart from "@/hooks/use-cart";

const ModalEditCart = ({ children, onCartOptionChoice }) => {
  const { items } = useCart();
  const itemsInCart = items.map((i) => i.title);

  return (
    <>
      <div className="modalOverlay">
        <div className="modalContent">
          <p>
            {`${itemsInCart}`} cookies in your cart. If you want to replace,
            click "replace" or edit your cart items.
          </p>
          <button onClick={() => onCartOptionChoice("cancel")}>Close</button>
          {children}
        </div>
      </div>
    </>
  );
};

export default ModalEditCart;
