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
    id: String,
    label: String,
    price: Number,
    productId: String,
    title: String,
    type: String,
    value: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
