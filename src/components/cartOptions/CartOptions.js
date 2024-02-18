import React from "react";
import useCart from "@/hooks/use-cart";

function CartOptions({ cookieEditId, onCartOptionChoice, cookieType }) {
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
        Delete {cookieType.title}
      </button>
    </>
  );
}

export default CartOptions;
