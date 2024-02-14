import React, { useState } from "react";
import CartOptions from "@/components/cartOptions/CartOptions";
import SelectComponent from "../Utility/SelectComponent";
import { calculatePrices } from "../Utility/pricingLogic";
import { generateDropdownOptions } from "../itemSelector";
import useCart from "@/hooks/use-cart";

function EditCart({ cookieType, cookieEditId, onCartOptionChoice }) {
  const { discountedPrices } = calculatePrices();
  const [selectedValue, setSelectedValue] = useState("");
  const { items, addItem, removeItemByCookieId } = useCart();

  const dropdownOptions = generateDropdownOptions(cookieType, discountedPrices);

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const selectedItem = dropdownOptions.find(
    (option) => option.value === selectedValue
  );

  const handleSubmit = () => {
    if (selectedValue !== "Select" && selectedValue !== "") {
      removeItemByCookieId(cookieEditId);
      addItem(selectedItem);
      setSelectedValue("");
      console.log("This is selectedItem in the cart edit", selectedItem);
      console.log("This is what would be in the cart", items);
    }
  };

  return (
    <>
      <SelectComponent
        dropdownOptions={dropdownOptions}
        selectedValue={selectedValue}
        handleDropdownChange={handleDropdownChange}
      />
      <button
        className="buttons"
        onClick={() => {
          handleSubmit();
          onCartOptionChoice("cancel");
        }}
      >
        Update Cart
      </button>
      <CartOptions
        cookieEditId={cookieEditId}
        onCartOptionChoice={onCartOptionChoice}
      />
    </>
  );
}

export default EditCart;
