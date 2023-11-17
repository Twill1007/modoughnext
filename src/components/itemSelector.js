import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { removeItem } from "@/hooks/use-cart";
import useCart from "@/hooks/use-cart";
import { addItemToCart } from "@/state/cart-slice";
import { calculatePrices } from "./pricingLogic";

function ItemSelector({ cookieType }) {
  const { discountedPrices } = calculatePrices();
  const { items, addItem, removeItem } = useCart();
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  const prices = discountedPrices;

  const dropdownOptions = [
    {
      value: "1",
      label: "One Dozen",
      type: "cookie",
      id: cookieType ? cookieType.id : "",
      title: cookieType ? cookieType.title : "",
    },
    {
      value: "2",
      label: "Two Dozen",
      type: "cookie",
      id: cookieType ? cookieType.id : "",
      title: cookieType ? cookieType.title : "",
      // price: prices.map((index) => index[value]),
    },
    {
      value: "3",
      label: "Three Dozen",
      type: "cookie",
      id: cookieType ? cookieType.id : "",
      title: cookieType ? cookieType.title : "",
    },
    {
      value: "4",
      label: "Four Dozen",
      type: "cookie",
      id: cookieType ? cookieType.id : "",
      title: cookieType ? cookieType.title : "",
    },
    {
      value: "5",
      label: "Five Dozen",
      type: "cookie",
      id: cookieType ? cookieType.id : "",
      title: cookieType ? cookieType.title : "",
    },
  ];

  dropdownOptions.forEach((option) => {
    option.price = prices[parseInt(option.value, 10) - 1];
  });
  console.log("Will this work?", dropdownOptions);

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
    dispatch(removeItem(cookieType.id));
  };

  return (
    <Fragment>
      <select
        value={selectedValue}
        label="Quantity"
        onChange={handleDropdownChange}
      >
        <option value="Select">--Select--</option>
        {dropdownOptions.map((option, index) => (
          <option
            key={index}
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
          <div key={item.id}>
            {item.label} {item.title}
          </div>
        ))}
      </div>
      {/* <button onClick={() => handleRemoveItem(cookieType.id)}>
        Delete Item
      </button> */}
      {buttonClicked === true && (
        <Link href="/order-form">
          <button>Go to Cart</button>
        </Link>
      )}
      <Link href="/cookie-menu">
        <button>Shop Other Treats</button>
      </Link>

      {selectedValue === "select" && (
        <div>
          {selectedValue} {props.cookieType.title}
        </div>
      )}
    </Fragment>
  );
}

export default ItemSelector;
