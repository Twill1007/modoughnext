import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import ModalCookie from "../components/modal/modalCookie/Modal";
import SelectComponent from "./Utility/SelectComponent";
import useCart from "@/hooks/use-cart";
import { calculatePrices } from "./Utility/pricingLogic";
import { v4 as uuidv4 } from "uuid";
import "../components/itemSelector.css";

function ItemSelector({ cookieType }) {
  const { discountedPrices } = calculatePrices();
  const { items, addItem, removeItem } = useCart();
  const [selectedValue, setSelectedValue] = useState("");
  const [showEditDeleteX, setShowDeleteX] = useState(false);
  const [showModal, setShowModal] = useState(false);
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
      }
    }
  };

  const valueOfElement = dropdownOptions.find((element) => {
    return element.value === selectedValue;
  });

  const usersSelectedId = selectedValue;

  const handleCartOptionChoice = (choice) => {
    if (choice === "combine") {
      const combinedItem = {
        ...cartOptionChoice,
      };
      addItem(combinedItem);
    } else if (choice === "replace") {
      const filteredItems = items.filter((item) => item.id !== selectedItem.id);
      console.log("items that pass the filter test", filteredItems);

      const itemsToRemove = filteredItems.map((item) => ({
        productId: item.productId,
        id: item.id,
      }));

      itemsToRemove.forEach((item) => {
        removeItem(item.id);
        console.log("this is supposed to be the cookie id", item.id);
      });

      // filteredItems.forEach((filteredItem) => {
      //   addItem(filteredItem);
      // });

      addItem(selectedItem);
    }
    setShowModal(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleRemoveItem = (productId) => {
    console.log("productId", productId);
    removeItem({ productId });
  };

  const handleShowDeleteX = () => {
    setShowDeleteX(true);
  };

  const handleHideDeleteX = () => {
    setShowDeleteX(false);
  };

  return (
    <>
      <div>
        <SelectComponent
          selectedValue={selectedValue}
          dropdownOptions={dropdownOptions}
          handleDropdownChange={handleDropdownChange}
          handleSubmit={handleSubmit}
        />

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
      <div className="cartSummary">
        Cart Items
        {items.map((item) => (
          <div key={item.productId}>
            {item.label} {item.title}
            {showEditDeleteX && (
              <span onClick={() => handleRemoveItem(item.productId)}>
                {""} x
              </span>
            )}
          </div>
        ))}
        <div className="buttonCookieMenu">
          <button id="dropdown-button-addTo" onClick={handleSubmit}>
            Add to Cart
          </button>
          <Link href="/order-form">
            <button>Go to Cart</button>
          </Link>
          <Link href="/cookie-menu">
            <button>Shop Other Treats</button>
          </Link>
          {items.length > 0 && !showEditDeleteX && (
            <button onClick={handleShowDeleteX}>Edit Cart Items</button>
          )}
          {items.length > 0 && showEditDeleteX && (
            <button onClick={handleHideDeleteX}>Done Editing</button>
          )}
          {items.length === 0 && showEditDeleteX && setShowDeleteX(false)}
        </div>
      </div>
      {showModal && (
        <ModalCookie
          onCartOptionChoice={handleCartOptionChoice}
          onClose={closeModal}
        ></ModalCookie>
      )}
    </>
  );
}

export default ItemSelector;
