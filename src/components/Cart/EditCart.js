import React from "react";

import CartOptions from "@/components/cartOptions/CartOptions";

function EditCart({ cookieEditId, onCartOptionsChoice }) {
  return (
    <>
      <CartOptions
        cookieEditId={cookieEditId}
        onCartOptionsChoice={onCartOptionsChoice}
      />
    </>
  );
}

export default EditCart;
