import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

mongoose.Promise = global.Promise;

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    street: String,
    city: String,
    zipCode: Number,
    emailAddress: String,
    // cartItems: [String],
  },
  {
    timestamps: true,
  }
);

// const userSchema = new Schema({
//   firstName: String,
//   lastName: String,
//   street: String,
//   city: String,
//   zipCode: Number,
//   emailAddress: String,
// });

// const itemSchema = new Schema({
//   id: String,
//   label: String,
//   price: Number,
//   productId: String,
//   title: String,
//   type: String,
//   value: String,
// });

// const cartSchema = new Schema({
//   items: [itemSchema],
// });

// const userCartSchema = new Schema({
//   user: userSchema,
//   cart: cartSchema,
// });

const UserCartModel =
  mongoose.models.User || mongoose.model("User", userSchema);

export default UserCartModel;
