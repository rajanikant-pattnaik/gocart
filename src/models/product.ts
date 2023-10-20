import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  AdminId: {
    type: String,
    required: true,
  },
  productType: {
    type: String,
    required: true,
  },
  photo: String,
  description: String,
  qty: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Number,
    required: [true, "Date is required"],
  },
});

const productDb =
  mongoose.models.products || mongoose.model("products", productSchema);
export default productDb;
