import React, { useState } from "react";
import CartOptions from "@/components/cartOptions/CartOptions";

function EditCart({ cookieType }) {
  const [selectedValue, setSelectedValue] = useState();
  const dropdownOptions = CartOptions;

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  console.log("should show the value selected", selectedValue);

  return (
    <div>
      <label>Select a Value</label>

      <select value={selectedValue} onChange={handleSelectChange}>
        <option value="">Select...</option>
        <option value={dropdownOptions.value}></option>
      </select>
      <p>Selected Value: {selectedValue}</p>
    </div>
  );
}

export default EditCart;
