const mongoose = require("mongoose");

// id, name, email, gender, phone, password, status, date) and by default status is pending.
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    phone: { type: Number, required: true },
    password: { type: String, required: true },
    reEnterPassword: { type: String, required: true },
    status: { type: String, default: "pending" },
    date: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
