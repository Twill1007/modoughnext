"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongodb = require("mongodb");

var URI = process.env.MONGODB_URI;
var options = {};
if (!URI) throw new Error("Please add your Mongo URI to .env.local");
var client = new _mongodb.MongoClient(URI, options);
var clientPromise;

if (process.env.NODE_ENV !== "production") {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect();
  }

  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = client.connect();
}

var _default = clientPromise;
exports["default"] = _default;