import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      state.push(newItem);
    },
    removeItemFromCartById: (state, action) => {
      const itemId = action.payload;
      return state.filter((item) => item.productId !== itemId);
    },
  },
});

// Function to return the cart items.
export const selectItems = (state) => {
  return state.cart;
};

//Function to return specific items within the cart.
export const selectItemsById = (id) => (state) => {
  return state.cart.filter((item) => item.id === id);
};

export const { addItemToCart, removeItemFromCartById } = cartSlice.actions;

export default cartSlice.reducer;
