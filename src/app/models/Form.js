import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

mongoose.Promise = global.Promise;

const formSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    street: String,
    city: String,
    zipCode: Number,
    emailAddress: String,
  },
  {
    timestamps: true,
  }
);

const Form = mongoose.models.Form || mongoose.model("Form", formSchema);

export default Form;
