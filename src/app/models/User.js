import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

mongoose.Promise = global.Promise;

const itemSchema = new Schema({
  id: String,
  label: String,
  price: Number,
  productId: String,
  title: String,
  type: String,
  value: String,
});

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    street: String,
    city: String,
    zipCode: Number,
    emailAddress: String,
    items: [itemSchema],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
