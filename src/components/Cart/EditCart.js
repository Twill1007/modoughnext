import React, { useState } from "react";
import CartOptions from "@/components/cartOptions/CartOptions";
import SelectComponent from "../Utility/SelectComponent";
import { calculatePrices } from "../Utility/pricingLogic";
import { generateDropdownOptions } from "../itemSelector";
import ItemSelector from "../itemSelector";
import useCart from "@/hooks/use-cart";

function EditCart({ cookieType, cookieEditId, onCartOptionChoice }) {
  const { discountedPrices } = calculatePrices();
  const [selectedValue, setSelectedValue] = useState("");
  const { addItem, removeItemByCookieId } = useCart();

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
    }
  };

  return (
    <>
      <div style={{ maxWidth: "200px", marginLeft: "20px" }}>
        <div>Change Quantity</div>
        <SelectComponent
          selectedValue={selectedValue}
          dropdownOptions={dropdownOptions}
          handleDropdownChange={handleDropdownChange}
        />
      </div>
      <button
        style={{ marginLeft: "20px" }}
        className="buttons"
        onClick={() => {
          handleSubmit();
          onCartOptionChoice("cancel");
        }}
      >
        Update Quantity
      </button>
      <CartOptions
        cookieEditId={cookieEditId}
        onCartOptionChoice={onCartOptionChoice}
      />
    </>
  );
}

export default EditCart;
