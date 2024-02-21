"use strict";

require("dotenv").config();

var express = require("express");

var app = express();
app.use(express.json());

var stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

var storeItems = new Map([[1, {
  priceInCents: 10000,
  name: "Learn React Today"
}], [2, {
  priceInCentes: 20000,
  name: "Learn CSS Today"
}]]);
app.listen(3001);