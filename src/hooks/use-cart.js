"use client";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCartById,
  selectItems,
} from "@/state/cart-slice";

function useCart() {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  const addItem = (item) => {
    dispatch(addItemToCart(item));
  };
  const removeItem = ({ productId, id }) => {
    console.log(
      "this is in the use-cart hook and is showing what the id is hopefully it is the cookie id",
      id
    );
    dispatch(removeItemFromCartById({ productId, id }));
  };

  return { addItem, removeItem, items };
}

export default useCart;
