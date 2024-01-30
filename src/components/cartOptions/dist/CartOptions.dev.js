"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _pricingLogic = require("../../components/Utility/pricingLogic");

var _uuid = require("uuid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function CartOptions(_ref) {
  var cookieType = _ref.cookieType;

  var _calculatePrices = (0, _pricingLogic.calculatePrices)(),
      discountedPrices = _calculatePrices.discountedPrices;

  var prices = discountedPrices;
  var dropdownOptions = [{
    value: "1",
    label: "One Dozen",
    type: "cookie",
    id: cookieType ? cookieType.id : "",
    title: cookieType ? cookieType.title : ""
  }, {
    value: "2",
    label: "Two Dozen",
    type: "cookie",
    id: cookieType ? cookieType.id : "",
    title: cookieType ? cookieType.title : ""
  }, {
    value: "3",
    label: "Three Dozen",
    type: "cookie",
    id: cookieType ? cookieType.id : "",
    title: cookieType ? cookieType.title : ""
  }, {
    value: "4",
    label: "Four Dozen",
    type: "cookie",
    id: cookieType ? cookieType.id : "",
    title: cookieType ? cookieType.title : ""
  }, {
    value: "5",
    label: "Five Dozen",
    type: "cookie",
    id: cookieType ? cookieType.id : "",
    title: cookieType ? cookieType.title : ""
  }];
  dropdownOptions.forEach(function (option) {
    option.price = prices[parseInt(option.value, 10) - 1];
    option.productId = (0, _uuid.v4)();
  });
  return dropdownOptions;
}

var _default = CartOptions;
exports["default"] = _default;