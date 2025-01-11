import { Schema, models, model } from "mongoose";

const passwordResetTokenScehma = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
});

const PasswordResetToken =
  models.PasswordResetToken ||
  model("PasswordResetToken", passwordResetTokenScehma);

export default PasswordResetToken;
