"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _cartSlice = require("@/state/cart-slice");

function useCart() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var items = (0, _reactRedux.useSelector)(_cartSlice.selectItems);

  var addItem = function addItem(item) {
    dispatch((0, _cartSlice.addItemToCart)(item));
  };

  var removeItem = function removeItem(_ref) {
    var productId = _ref.productId,
        id = _ref.id;
    console.log("this is in the use-cart hook and is showing what the id is hopefully it is the cookie id", id);
    dispatch((0, _cartSlice.removeItemFromCartById)({
      productId: productId,
      id: id
    }));
  };

  return {
    addItem: addItem,
    removeItem: removeItem,
    items: items
  };
}

var _default = useCart;
exports["default"] = _default;