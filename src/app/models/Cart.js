import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

mongoose.Promise = global.Promise;

const cartSchema = new Schema(
  {
    value: Number,
    label: String,
    id: String,
    title: String,
    price: Number,
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
