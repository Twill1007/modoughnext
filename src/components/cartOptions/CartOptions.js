import React from "react";
import useCart from "@/hooks/use-cart";

function CartOptions({ cookieEditId, onCartOptionChoice }) {
  const { removeItemByCookieId } = useCart();

  return (
    <>
      <button
        className="buttons"
        onClick={() => {
          removeItemByCookieId(cookieEditId);
          onCartOptionChoice("cancel");
        }}
      >
        Delete Cart Item
      </button>
    </>
  );
}

export default CartOptions;
