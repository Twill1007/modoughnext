import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { addItemToCart } from "@/state/cart-slice";
import { removeItemFromCartById } from "@/state/cart-slice";
import { cartSlice } from "@/state/cart-slice";

function ItemSelector() {
  const selectCart = (state) => state.cart;
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState("Select");

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };
  console.log(cart);

  const handleSubmit = () => {
    if (selectedValue !== "Select") {
      const item = {
        id: selectedValue,
        title: selectedValue,
      };
      dispatch(addItemToCart(item));
    }
  };

  const handleRemoveItem = () => {
    dispatch(removeItemFromCartById(selectedValue));
  };

  return (
    <Fragment>
      <select value={selectedValue} onChange={handleDropdownChange}>
        <option value="Select">--Please Select a Cookie--</option>
        <option value="1Dozen">One Dozen for $10</option>
        <option value="2Dozen">Two Dozen for $18</option>
      </select>
      <button onClick={handleSubmit}>Complete Order</button>
      <div>
        {cart.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
      <button onClick={() => handleRemoveItem(selectedValue)}>
        Delete Item
      </button>
      <Link href="/cookie-home">Home</Link>
      {selectedValue === "select" && <div>{selectedValue}</div>}
    </Fragment>
  );
}

export default ItemSelector;
