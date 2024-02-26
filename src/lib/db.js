// mongodb.js
//The code below is what connects to the mongoDB database.
//This code creates a new instance (or an object based on the class's blueprint or definition)
//

import { MongoClient } from "mongodb";

const uri = env.MONGODB_URI;

const options = {};

if (!env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
