import React, { useState } from "react";
import CartOptions from "@/components/cartOptions/CartOptions";
import SelectComponent from "../Utility/SelectComponent";
import { generateDropdownOptions } from "../itemSelector";
import useCart from "@/hooks/use-cart";

function EditCart({ cookieType, cookieEditId, onCartOptionsChoice }) {
  const [selectedValue, setSelectedValue] = useState("");
  const { items, addItem, removeItemByCookieId } = useCart();

  const dropdownOptions = generateDropdownOptions(cookieType);

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const selectedItem = dropdownOptions.find(
    (option) => option.value === selectedValue
  );
  console.log(
    "This is what is in the cart before Update Cart is pushed",
    items
  );
  const handleSubmit = () => {
    if (selectedValue !== "Select" && selectedValue !== "") {
      removeItemByCookieId(cookieEditId);
      addItem(selectedItem);
      setSelectedValue("");
      console.log("this is selectedItem", selectedItem);
    }
    console.log("This is what is in the cart after I Update Cart", items);
  };

  return (
    <>
      <SelectComponent
        dropdownOptions={dropdownOptions}
        selectedValue={selectedValue}
        handleDropdownChange={handleDropdownChange}
      />
      <button className="buttons" onClick={handleSubmit}>
        Update Cart
      </button>
      <CartOptions
        cookieEditId={cookieEditId}
        onCartOptionsChoice={onCartOptionsChoice}
      />
    </>
  );
}

export default EditCart;
