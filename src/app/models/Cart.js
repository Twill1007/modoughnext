import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

mongoose.Promise = global.Promise;

const cartSchema = new Schema(
  {
    title: String,
    price: Number,
    quantity: Number,
    // name: String,
    // address: String,
    // city: String,
    // zipCode: Number,
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);

export default Cart;
