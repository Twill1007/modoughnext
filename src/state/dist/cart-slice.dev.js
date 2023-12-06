// "use strict";

// Object.defineProperty(exports, "__esModule", {
//   value: true
// });
// exports["default"] = exports.removeItemFromCartByProductId = exports.removeItemFromCartByCookieId = exports.removeItemFromCartById = exports.addItemToCart = exports.selectItemsById = exports.selectItems = exports.cartSlice = void 0;

// var _toolkit = require("@reduxjs/toolkit");

// var initialState = [];
// var cartSlice = (0, _toolkit.createSlice)({
//   name: "cart",
//   initialState: initialState,
//   reducers: {
//     addItemToCart: function addItemToCart(state, action) {
//       var newItem = action.payload;
//       state.push(newItem);
//     },
//     removeItemFromCartByProductId: function removeItemFromCartByProductId(state, action) {
//       var productId = action.payload;
//       return state.filter(function (item) {
//         return item.productId !== productId;
//       });
//     },
//     removeItemFromCartByCookieId: function removeItemFromCartByCookieId(state, action) {
//       var id = action.payload;
//       return state.filter(function (item) {
//         return item.id !== id;
//       });
//     }
//   }
// }); // Function to return the cart items.

// exports.cartSlice = cartSlice;

// var selectItems = function selectItems(state) {
//   return state.cart;
// }; //Function to return specific items within the cart.

// exports.selectItems = selectItems;

// var selectItemsById = function selectItemsById(id) {
//   return function (state) {
//     return state.cart.filter(function (item) {
//       return item.id === id;
//     });
//   };
// };

// exports.selectItemsById = selectItemsById;
// var _cartSlice$actions = cartSlice.actions,
//     addItemToCart = _cartSlice$actions.addItemToCart,
//     removeItemFromCartById = _cartSlice$actions.removeItemFromCartById,
//     removeItemFromCartByCookieId = _cartSlice$actions.removeItemFromCartByCookieId,
//     removeItemFromCartByProductId = _cartSlice$actions.removeItemFromCartByProductId;
// exports.removeItemFromCartByProductId = removeItemFromCartByProductId;
// exports.removeItemFromCartByCookieId = removeItemFromCartByCookieId;
// exports.removeItemFromCartById = removeItemFromCartById;
// exports.addItemToCart = addItemToCart;
// var _default = cartSlice.reducer;
// exports["default"] = _default;
