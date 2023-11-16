import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { removeItem } from "@/hooks/use-cart";
import useCart from "@/hooks/use-cart";
import { addItemToCart } from "@/state/cart-slice";

function ItemSelector({ params }) {
  const { items, addItem, removeItem } = useCart();

  const dynamicId = params?.dynamicId;

  const createDynamicId = () => dynamicId;

  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  const dropdownOptions = [
    {
      value: "1Dozen",
      label: "One Dozen",
      type: "cookie",
      id: createDynamicId(),
    },
    {
      value: "2Dozen",
      label: "Two Dozen",
      type: "cookie",
      id: createDynamicId(),
    },
    {
      value: "3Dozen",
      label: "Three Dozen",
      type: "cookie",
      id: createDynamicId(),
    },
    {
      value: "4Dozen",
      label: "Four Dozen",
      type: "cookie",
      id: createDynamicId(),
    },
    {
      value: "5Dozen",
      label: "Five Dozen",
      type: "cookie",
      id: createDynamicId(),
    },
  ];

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedValue !== "Select" && selectedValue !== "" && !buttonClicked) {
      setButtonClicked(true);
      const selectedItem = dropdownOptions.find(
        (option) => option.value === selectedValue
      );
      dispatch(addItemToCart(selectedItem));
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

      {selectedValue !== "Select" && selectedValue !== "" && !buttonClicked && (
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
      {buttonClicked === true && (
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
