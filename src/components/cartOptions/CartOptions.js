import React from "react";
import useCart from "@/hooks/use-cart";
import SelectComponent from "../Utility/SelectComponent";

function CartOptions({ cookieEditId }) {
  const { removeItemByCookieId } = useCart();

  return (
    <>
      {/* <SelectComponent /> */}
      <button
        className="buttons"
        onClick={() => {
          removeItemByCookieId(cookieEditId);
        }}
      >
        Delete Cart Item
      </button>
    </>
  );
}

export default CartOptions;
