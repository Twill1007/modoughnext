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
    removeItemFromCartByProductId: (state, action) => {
      const productId = action.payload;
      console.log("Removing item with productId:", productId);
      return state.filter((item) => item.productId !== productId);
    },
    removeItemFromCartByCookieId: (state, action) => {
      const id = action.payload;
      console.log("Removing item with productId:", id);
      return state.filter((item) => item.id !== id);
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

export const {
  addItemToCart,
  removeItemFromCartById,
  removeItemFromCartByCookieId,
  removeItemFromCartByProductId,
} = cartSlice.actions;

export default cartSlice.reducer;
