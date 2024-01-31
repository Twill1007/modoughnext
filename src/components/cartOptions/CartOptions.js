import React, { useState } from "react";
import { calculatePrices } from "../../components/Utility/pricingLogic";
import { v4 as uuidv4 } from "uuid";
import useCart from "@/hooks/use-cart";

function CartOptions({ cookieType, cookieEditId, onCartOptionsChoice }) {
  const { removeItemByCookieId } = useCart();
  const [selectedValue, setSelectedValue] = useState();
  const { discountedPrices } = calculatePrices();
  const prices = discountedPrices;

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

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

  const handleSubmit = () => {};

  return (
    <>
      <select value={selectedValue} onChange={handleSelectChange}>
        {dropdownOptions.map((option, index) => (
          <option value={option.label} key={index}>
            {option.label}
          </option>
        ))}
      </select>
      <p>Selected Value: {selectedValue}</p>
      <button onClick={handleSubmit}>Update Cart</button>
      <button
        onClick={() => {
          removeItemByCookieId(cookieEditId);
          // onCartOptionsChoice("cancel");
        }}
      >
        Delete Cart Item
      </button>
    </>
  );
}

export default CartOptions;
