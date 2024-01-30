import React, { useState } from "react";
import "../modalEditCart/modalEditCart.css";
import useCart from "@/hooks/use-cart";
import EditCart from "@/components/Cart/EditCart";

const ModalEditCart = ({ children, onCartOptionChoice }) => {
  const { items, addItem } = useCart();

  return (
    <>
      <div className="modalOverlay">
        <EditCart />
        <button onClick={() => onCartOptionChoice("cancel")}>Close</button>
        {children}
      </div>
    </>
  );
};

export default ModalEditCart;
