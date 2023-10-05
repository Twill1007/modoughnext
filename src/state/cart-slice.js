import { createSlice } from "@reduxjs/toolkit";

const initialState = { cart: [] };

export const cartSlice = createSlice({
  name: "CookieDough",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      state.cart.push(newItem);
    },
    removeItemFromCartById: (state, action) => {
      const itemId = action.payload;
      state.cart = state.cart.filter((item) => item.id !== itemId);
    },
  },
});

export const { addItemToCart, removeItemFromCartById } = cartSlice.actions;

export default cartSlice.reducer;
