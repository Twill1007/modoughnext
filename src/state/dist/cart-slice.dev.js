"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.removeItemFromCartById = exports.addItemToCart = exports.selectItemsById = exports.selectItems = exports.cartSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = [];
var cartSlice = (0, _toolkit.createSlice)({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItemToCart: function addItemToCart(state, action) {
      var newItem = action.payload;
      state.push(newItem);
    },
    removeItemFromCartById: function removeItemFromCartById(state, action) {
      var itemId = action.payload;
      return state.filter(function (item) {
        return item.productId !== itemId && item.id !== itemId;
      });
    }
  }
}); // Function to return the cart items.

exports.cartSlice = cartSlice;

var selectItems = function selectItems(state) {
  return state.cart;
}; //Function to return specific items within the cart.


exports.selectItems = selectItems;

var selectItemsById = function selectItemsById(id) {
  return function (state) {
    return state.cart.filter(function (item) {
      return item.id === id;
    });
  };
};

exports.selectItemsById = selectItemsById;
var _cartSlice$actions = cartSlice.actions,
    addItemToCart = _cartSlice$actions.addItemToCart,
    removeItemFromCartById = _cartSlice$actions.removeItemFromCartById;
exports.removeItemFromCartById = removeItemFromCartById;
exports.addItemToCart = addItemToCart;
var _default = cartSlice.reducer;
exports["default"] = _default;