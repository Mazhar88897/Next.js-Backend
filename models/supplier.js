import mongoose, { Schema } from "mongoose";

const supplierSchema = new Schema(
  {
    name: String,
    phoneNumber: String,
    amount: String,
    command: String,
    supplierphonenumber: String
  }
);

const supplier = mongoose.models.supplier || mongoose.model("supplier", supplierSchema);

export default supplier;
