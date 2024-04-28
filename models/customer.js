import mongoose, { Schema } from "mongoose";

const customerSchema = new Schema(
  {
    name: String,
    phoneNumber: String,
    amount: String,
    command: String,
    customerphonenumber: String
  }
);

const customer = mongoose.models.customer || mongoose.model("customer", customerSchema);

export default customer;
