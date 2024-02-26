"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongodb = require("mongodb");

// mongodb.js
//The code below is what connects to the mongoDB database.
//This code creates a new instance (or an object based on the class's blueprint or definition)
//
var uri = "mongodb+srv://thomaswillford:E3DXFPWyDGG4HEgw@cluster0.c1gvdtg.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0";
var options = {};

if (!"mongodb+srv://thomaswillford:E3DXFPWyDGG4HEgw@cluster0.c1gvdtg.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0") {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

var client;
var clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new _mongodb.MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }

  clientPromise = global._mongoClientPromise;
} else {
  client = new _mongodb.MongoClient(uri, options);
  clientPromise = client.connect();
}

var _default = clientPromise;
exports["default"] = _default;