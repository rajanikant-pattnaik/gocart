import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "username must be there"],
  },
  email: {
    type: String,
    required: [true, "email must be there"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provid a password"],
    unique: true,
  },
  userType: {
    type: String,
    default: "admin",
  },
  createdAt: {
    type: Number,
    required: [true, "Date is required"],
  },
});

const AdminUser = mongoose.models.admins || mongoose.model("admins", adminSchema);

export default AdminUser;
