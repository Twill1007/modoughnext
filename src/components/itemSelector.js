import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import ModalCookie from "../components/modal/modalCookie/Modal";
import useCart from "@/hooks/use-cart";
import { calculatePrices } from "./pricingLogic";
import { v4 as uuidv4 } from "uuid";
import "../components/itemSelector.css";

function ItemSelector({ cookieType }) {
  const { discountedPrices } = calculatePrices();
  const { items, addItem, removeItem } = useCart();
  const [selectedValue, setSelectedValue] = useState("");
  const [showEditDeleteX, setShowDeleteX] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
    if (selectedValue !== "Select" && selectedValue !== "") {
      const selectedItem = dropdownOptions.find(
        (option) => option.value === selectedValue
      );
      const itemAlreadyInCart = items.some(
        (item) => item.id === selectedItem.id
      );
      if (itemAlreadyInCart) {
        setShowModal(true);
      } else {
        addItem(selectedItem);
      }
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleRemoveItem = (productId) => {
    removeItem(productId);
  };

  const handleShowDeleteX = () => {
    setShowDeleteX(true);
  };

  const handleHideDeleteX = () => {
    setShowDeleteX(false);
  };

  return (
    <>
      <div className="dropdown-container">
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

        <button id="dropdown-container-addTo" onClick={handleSubmit}>
          Add to Cart
        </button>

        <div id="cartSummary">
          Cart Items
          {items.map((item, productId) => (
            <div key={productId}>
              {item.label} {item.title}
              {showEditDeleteX && (
                <span onClick={() => handleRemoveItem(item.productId)}>
                  {""} x
                </span>
              )}
            </div>
          ))}
          {items.length > 0 && !showEditDeleteX && (
            <button
              style={{ position: "absolute", top: "213px", right: "85px" }}
              onClick={handleShowDeleteX}
            >
              Edit Cart Items
            </button>
          )}
          {items.length > 0 && showEditDeleteX && (
            <button
              style={{ position: "absolute", top: "213px", right: "100px" }}
              onClick={handleHideDeleteX}
            >
              Done Editing
            </button>
          )}
        </div>

        <Link href="/order-form">
          <button id="dropdown-container-cart">Go to Cart</button>
        </Link>

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
      </div>
      {showModal && <ModalCookie onClose={closeModal}></ModalCookie>}
    </>
  );
}

export default ItemSelector;
