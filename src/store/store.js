import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "@/state/cart-slice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
