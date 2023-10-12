import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  orderName: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  photo: String,
  description: String,
  userId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Number,
    required: true,
  },
});

const OrderDb = mongoose.models.orders || mongoose.model("orders", orderSchema);
export default OrderDb;
