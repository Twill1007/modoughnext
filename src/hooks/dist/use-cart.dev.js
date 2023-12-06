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

  var removeItemByProductId = function removeItemByProductId(productId) {
    dispatch((0, _cartSlice.removeItemFromCartByProductId)(productId));
  };

  var removeItemByCookieId = function removeItemByCookieId(id) {
    dispatch((0, _cartSlice.removeItemFromCartByCookieId)(id));
  };

  return {
    addItem: addItem,
    removeItemByProductId: removeItemByProductId,
    removeItemByCookieId: removeItemByCookieId,
    items: items
  };
}

var _default = useCart;
exports["default"] = _default;