import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["STUDENT", "INSTRUCTOR", "ADMIN"],
    default: "STUDENT",
  },
  phone: {
    type: String,
    default: null,
  },
  gender: {
    type: String,
    enum: ["MALE", "FEMALE", "OTHER"],
    default: null,
  },
  bio: {
    type: String,
    default: null,
    maxlength: 1000,
  },
  headline: {
    type: String,
    default: null,
    maxlength: 100,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});

const User = models.User || model("User", userSchema);

export default User;
