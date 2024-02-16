"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _reactRouterDom = require("react-router-dom");

var _cookieDough = _interopRequireDefault(require("@/constants/cookie-dough"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useDropdownOptions = function useDropdownOptions() {
  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      dropdownOptions = _useState2[0],
      setDropdownOptions = _useState2[1];

  var _useParams = (0, _reactRouterDom.useParams)(),
      cookieType = _useParams.cookieType;

  (0, _react.useEffect)(function () {
    var cookie = _cookieDough["default"].find(function (cookie) {
      return cookie.id === cookieType;
    });

    if (cookie) {
      var options = [{
        value: "1",
        label: "One Dozen",
        type: "cookie",
        id: cookieType ? cookieType.id : "",
        title: cookieType ? cookieType.title : "",
        productId: "product_".concat(cookie.id, "_1")
      }, {
        value: "2",
        label: "Two Dozen",
        type: "cookie",
        id: cookieType ? cookieType.id : "",
        title: cookieType ? cookieType.title : "",
        productId: "product_".concat(cookie.id, "_2")
      }, {
        value: "3",
        label: "Three Dozen",
        type: "cookie",
        id: cookieType ? cookieType.id : "",
        title: cookieType ? cookieType.title : "",
        productId: "product_".concat(cookie.id, "_3")
      }, {
        value: "4",
        label: "Four Dozen",
        type: "cookie",
        id: cookieType ? cookieType.id : "",
        title: cookieType ? cookieType.title : "",
        productId: "product_".concat(cookie.id, "_4")
      }, {
        value: "5",
        label: "Five Dozen",
        type: "cookie",
        id: cookieType ? cookieType.id : "",
        title: cookieType ? cookieType.title : "",
        productId: "product_".concat(cookie.id, "_5")
      }];
      setDropdownOptions(options);
    }
  }, []);
  return dropdownOptions; // options.forEach((option) => {
  //   option.price = prices[parseInt(option.value, 10) - 1];
  // });
};

var _default = useDropdownOptions;
exports["default"] = _default;