import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { addItemToCart } from "@/state/cart-slice";
import { removeItemFromCartById } from "@/state/cart-slice";
import useCookieDough from "@/hooks/use-cookieDough";

function ItemSelector(props) {
  const selectCart = (state) => state.cart;
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState("Select");

  const { getCookieDough } = useCookieDough();

  useEffect(() => {
    const fetchCookieDough = async () => {
      try {
        const cookieDough = await getCookieDough();
        console.log("Cookie Dough:", cookieDough);
      } catch (error) {
        console.error("Error fetching cookie dough", error);
      }
    };
    fetchCookieDough();
  }, [getCookieDough]);

  // const [isOrderCompleted, setIsOrderCompleted] = useState(false);
  // const { getDiscountedPrice } = useCookieDough();
  // const discountPrice = getDiscountedPrice(5, 10);
  // console.log("Discounted Price", discountPrice);

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

  const handleRemoveItem = () => {
    dispatch(removeItemFromCartById(selectedValue));
  };

  const cookieDoughData = getCookieDough();
  console.log("What is this?", cookieDoughData);

  return (
    <Fragment>
      <select value={selectedValue} onChange={handleDropdownChange}>
        <option value="Select">--Please Select a Cookie--</option>
        {Array.isArray(cookieDoughData) &&
          cookieDoughData.map((cookie) => (
            <option key={cookie.id} value={cookie.id}>
              {cookie.title}
            </option>
          ))}
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
      {selectedValue === "select" && (
        <div>
          {selectedValue} {props.cookieType.title}
        </div>
      )}
      {/* {selectedValue.id === "cc" && <div>{props.cookieType.title}</div>} */}
    </Fragment>
  );
}

export default ItemSelector;
