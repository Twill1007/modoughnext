import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { addItemToCart } from "@/state/cart-slice";

function ItemSelector() {
  const dispatch = useDispatch();
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
  };
  console.log(selectedValue);
  return (
    <Fragment>
      <select value={selectedValue} onChange={handleDropdownChange}>
        <option value="Select">--Please Select a Cookie--</option>
        <option value="1Dozen">One Dozen for $10</option>
        <option value="2Dozen">Two Dozen for $18</option>
      </select>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <Link href="/cookie-home">Home</Link>
    </Fragment>
  );
}

export default ItemSelector;
