"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dropdownOptions = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
exports.dropdownOptions = dropdownOptions;
dropdownOptions.forEach(function (option) {
  option.price = prices[parseInt(option.value, 10) - 1];
  option.productId = uuidv4();
});