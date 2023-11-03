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
        //cookieDough holds the array of cookies
        //This is how I access the titles within the array.
        cookieDough.forEach((cookie) => {
          console.log("Cookie Title:", cookie.title);
          console.log("Cookie Base Price:", cookie.basePrice);
        });
      } catch (error) {
        console.log("Error fetching", error);
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

  return (
    <Fragment>
      <form>
        <select value={selectedValue} onChange={handleDropdownChange}>
          <option value="Select">--Please Select a Cookie--</option>
          <option value="One Dozen for $10">One Dozen</option>
          <option value="Two Dozen for $18">Two Dozen</option>
          <option value="Three Dozen for $24">Three Dozen</option>
          <option value="Four Dozen for $30">Four Dozen</option>
          <option value="Five Dozen for $35">Five Dozen</option>
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
      </form>
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
