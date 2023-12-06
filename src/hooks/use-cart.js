"use client";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCartByProductId,
  removeItemFromCartByCookieId,
  selectItems,
} from "@/state/cart-slice";

function useCart() {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  const addItem = (item) => {
    dispatch(addItemToCart(item));
  };
  const removeItemByProductId = (productId) => {
    dispatch(removeItemFromCartByProductId(productId));
  };
  const removeItemByCookieId = (id) => {
    dispatch(removeItemFromCartByCookieId(id));
  };

  return { addItem, removeItemByProductId, removeItemByCookieId, items };
}

export default useCart;
