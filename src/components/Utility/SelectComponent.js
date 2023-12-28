import React from "react";
import "../../components/itemSelector.css";

const SelectComponent = ({
  selectedValue,
  dropdownOptions,
  handleDropdownChange,
  handleSubmit,
}) => {
  return (
    <>
      <select
        value={selectedValue}
        label="Quantity"
        onChange={handleDropdownChange}
      >
        <option value="Select">--Select--</option>
        {dropdownOptions.map((option, productId) => (
          <option
            key={productId}
            value={option.value}
            data-info={JSON.stringify(option)}
          >
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectComponent;
