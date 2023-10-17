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
  const removeItem = (id) => {
    dispatch(removeItemFromCartById(id));
  };

  return { addItem, removeItem, items };
}

export default useCart;
