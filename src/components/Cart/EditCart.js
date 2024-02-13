import React from "react";
import CartOptions from "@/components/cartOptions/CartOptions";
import SelectComponent from "../Utility/SelectComponent";
import { generateDropdownOptions } from "../itemSelector";

function EditCart({ cookieType, cookieEditId, onCartOptionsChoice }) {
  const dropdownOptions = generateDropdownOptions(cookieType);
  return (
    <>
      <SelectComponent dropdownOptions={dropdownOptions} />
      <div>Where is the code?</div>
      <CartOptions
        cookieEditId={cookieEditId}
        onCartOptionsChoice={onCartOptionsChoice}
      />
    </>
  );
}

export default EditCart;
