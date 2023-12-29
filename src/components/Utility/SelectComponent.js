import React from "react";
import "../../components/Utility/selectComponent.css";

const SelectComponent = ({
  selectedValue,
  dropdownOptions,
  handleDropdownChange,
}) => {
  return (
    <>
      <select
        className="dropdown-selector"
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
