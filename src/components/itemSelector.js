import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { removeItem } from "@/hooks/use-cart";
import useCart from "@/hooks/use-cart";

function ItemSelector(props) {
  const { items, addItem, removeItem } = useCart();

  const dispatch = useDispatch();
  const [itemsInCart, setItemsInCart] = useState(true);
  const [selectedValue, setSelectedValue] = useState("");

  const dropdownOptions = [
    { value: "1Dozen", label: "One Dozen", type: "cookie" },
    { value: "2Dozen", label: "Two Dozen", type: "cookie" },
    { value: "3Dozen", label: "Three Dozen", type: "cookie" },
    { value: "4Dozen", label: "Four Dozen", type: "cookie" },
    { value: "5Dozen", label: "Five Dozen", type: "cookie" },
  ];

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedValue !== "Select") {
      const selectedItem = dropdownOptions.find(
        (option) => option.value === selectedValue
      );
      dispatch(addItem(selectedItem));
    }
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(selectedValue));
  };

  return (
    <Fragment>
      <select
        value={selectedValue}
        label="Quantity"
        onChange={handleDropdownChange}
      >
        <option value="Select">--Select--</option>
        {dropdownOptions.map((option) => (
          <option
            key={option.value}
            value={option.value}
            data-info={JSON.stringify(option)}
          >
            {option.label}
          </option>
        ))}
      </select>

      {selectedValue !== "Select" && itemsInCart && (
        <button onClick={handleSubmit}>Add to Cart</button>
      )}

      <div>
        {items.map((item) => (
          <div key={item.id}>{item.label}</div>
        ))}
      </div>
      <button onClick={() => handleRemoveItem(selectedValue)}>
        Delete Item
      </button>
      {itemsInCart !== true && (
        <Link href="/order-form">
          <button>Go to Cart</button>
        </Link>
      )}

      {selectedValue === "select" && (
        <div>
          {selectedValue} {props.cookieType.title}
        </div>
      )}
    </Fragment>
  );
}

export default ItemSelector;
