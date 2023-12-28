"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.increment = exports.DISCOUNT_TABLE = void 0;
//A number of "dozens" and a coresponding discount rate
var DISCOUNT_TABLE = {
  1: 1,
  2: 0.95,
  3: 0.9,
  4: 0.85,
  5: 0.8
};
exports.DISCOUNT_TABLE = DISCOUNT_TABLE;
var increment = 10; // What this object represents is:

exports.increment = increment;
{// `1 Dozen`: `No Discount`,
  // `2 Dozen`: `10% Discount`,
  // `3 Dozen`: `15% Discount`,
  // and so on...
}