import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import ModalCookie from "../components/modal/modalCookie/Modal";
import SelectComponent from "./Utility/SelectComponent";
import useCart from "@/hooks/use-cart";
import CartItems from "./Utility/CartItems";
import { calculatePrices } from "./Utility/pricingLogic";
import { v4 as uuidv4 } from "uuid";
import "../components/itemSelector.css";

function ItemSelector({ cookieType }) {
  const { discountedPrices } = calculatePrices();
  const { items, addItem, removeItemByCookieId, removeItemByProductId } =
    useCart();
  const [selectedValue, setSelectedValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showEditDeleteX, setShowDeleteX] = useState(false);
  const [cartOptionChoice, setCartOptionChoice] = useState(null);

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

  const selectedItem = dropdownOptions.find(
    (option) => option.value === selectedValue
  );

  const handleRemoveItem = (productId) => {
    removeItemByProductId(productId);
  };

  const handleSubmit = () => {
    if (selectedValue !== "Select" && selectedValue !== "") {
      const itemAlreadyInCart = items.some(
        (item) => item.id === selectedItem.id
      );

      if (itemAlreadyInCart) {
        setCartOptionChoice(selectedItem);
        setShowModal(true);
      } else {
        addItem(selectedItem);
        setSelectedValue("");
      }
    }
  };

  const handleCartOptionChoice = (choice) => {
    if (choice === "replace") {
      removeItemByCookieId(selectedItem.id);
      addItem(selectedItem);
      setSelectedValue("");
    } else if (choice === "cancel") {
      setShowModal(false);
    }
    setShowModal(false);
    setSelectedValue("");
  };

  const handleShowDeleteX = () => {
    setShowDeleteX(true);
  };

  const handleHideDeleteX = () => {
    setShowDeleteX(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <SelectComponent
        selectedValue={selectedValue}
        dropdownOptions={dropdownOptions}
        handleDropdownChange={handleDropdownChange}
        // handleSubmit={handleSubmit}
      />
      <div className="button-parent">
        <button className="buttons" onClick={handleSubmit}>
          Add to Cart
        </button>
        <Link href="/order-form" className="buttons">
          Go to Cart
        </Link>
        <Link href="/cookie-menu" className="buttons">
          Shop Other Treats
        </Link>
        {items.length > 0 && !showEditDeleteX && (
          <button className="buttons" onClick={handleShowDeleteX}>
            Edit Cart Items
          </button>
        )}
        {items.length > 0 && showEditDeleteX && (
          <button className="buttons" onClick={handleHideDeleteX}>
            Done Editing
          </button>
        )}
        {items.length === 0 && showEditDeleteX && setShowDeleteX(false)}
      </div>
      <div className="cart-summary">
        Cart Items
        <CartItems
          showX={showEditDeleteX}
          handleRemove={handleRemoveItem}
        ></CartItems>
      </div>

      {showModal && (
        <ModalCookie
          onCartOptionChoice={handleCartOptionChoice}
          onClose={closeModal}
        ></ModalCookie>
      )}
    </div>
  );
}

export default ItemSelector;
