import React, { Fragment, useEffect, useState } from "react";

import Link from "next/link";
import useCart from "@/hooks/use-cart";
import { calculatePrices } from "./pricingLogic";
import { v4 as uuidv4 } from "uuid";
import "../components/itemSelector.css";

function ItemSelector({ cookieType }) {
  const { discountedPrices } = calculatePrices();
  const { items, addItem, removeItem } = useCart();
  const [selectedValue, setSelectedValue] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  console.log("Here is the cookie Type in itemSelector", cookieType);
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
    option.productId = uuidv4();
  });

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedValue !== "Select" && selectedValue !== "" && !buttonClicked) {
      setButtonClicked(true);
      const selectedItem = dropdownOptions.find(
        (option) => option.value === selectedValue
      );
      addItem(selectedItem);
    }
  };

  const handleRemoveItem = (productId) => {
    removeItem(productId);
  };

  return (
    <Fragment>
      <div className="dropdown-container">
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

        {selectedValue !== "Select" &&
          selectedValue !== "" &&
          !buttonClicked && (
            <button id="dropdown-container-addTo" onClick={handleSubmit}>
              Add to Cart
            </button>
          )}

        <div>
          {items.map((item) => (
            <div key={item.id}>
              {item.label} {item.title}
              <span
                style={{ fontFamily: "monospace", cursor: "pointer" }}
                onClick={() => handleRemoveItem(item.productId)}
              >
                {""} x
              </span>
            </div>
          ))}
        </div>

        {buttonClicked === true && (
          <Link href="/order-form">
            <button id="dropdown-container-cart">Go to Cart</button>
          </Link>
        )}
        <Link id="dropdown-container-shop" href="/cookie-menu">
          <button>Shop Other Treats</button>
        </Link>
        <div className="cookie-description">
          Experience the ultimate convenience and freshness with our frozen
          chocolate chip cookie dough balls. Immerse yourself in the aroma of
          gourmet baking without the effort. Crafted from the finest
          ingredients, each perfectly portioned ball guarantees a batch of warm,
          gooey cookies in minutes. From freezer to oven, effortlessly transform
          your space into a bakery, delighting in the anticipation of every
          golden, chewy bite. Elevate your dessert game with the convenience of
          our frozen dough balls – a culinary secret ready to unfold. Make every
          moment special, savor the warmth, and relish the joy of homemade
          perfection, one cookie at a time.
        </div>

        {/* {selectedValue === "select" && (
        <div>
          {selectedValue} {props.cookieType.title}
        </div>
      )} */}
      </div>
    </Fragment>
  );
}

export default ItemSelector;
