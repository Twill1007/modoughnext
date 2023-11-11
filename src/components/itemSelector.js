import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { addItemToCart } from "@/state/cart-slice";
import { removeItemFromCartById } from "@/state/cart-slice";
import useCart from "@/hooks/use-cart";

function ItemSelector(props) {
  const { items, addItem, removeItem } = useCart();

  const dispatch = useDispatch();
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [selectedValue, setSelectedValue] = useState("Select");

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedValue !== "Select") {
      const item = {
        id: selectedValue,
        title: selectedValue,
      };
      dispatch(addItemToCart(item));
    }
    setIsButtonVisible(false);
    if (isButtonVisible === true && selectedValue !== "Select") {
      setSelectedValue("Select");
    }
  };

  const handleRemoveItem = () => {
    dispatch(removeItemFromCartById(selectedValue));
  };

  console.log(selectedValue);

  return (
    <Fragment>
      <select
        value={selectedValue}
        label="Quantity"
        onChange={handleDropdownChange}
      >
        <option value="Select">--Select--</option>
        <option value="1Dozen">One Dozen</option>
        <option value="2Dozen">Two Dozen</option>
        <option value="3Dozen">Three Dozen</option>
        <option value="4Dozen">Four Dozen</option>
        <option value="5Dozen">Five Dozen</option>
      </select>

      {selectedValue !== "Select" && isButtonVisible && (
        <button onClick={handleSubmit}>Add to Cart</button>
      )}

      <div>
        {items.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
      <button onClick={() => handleRemoveItem(selectedValue)}>
        Delete Item
      </button>
      {isButtonVisible !== true && (
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
