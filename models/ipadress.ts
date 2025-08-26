import mongoose, { Schema } from "mongoose";

export const ipSchema = new mongoose.Schema({
  ip: { type: String, required: true, unique: true },
  influencer: { type: String },
  source: { type: String },
  createAt: {
    type: Date,
    default: Date.now,
    expires: 30 * 60
  }
}
);

export const IpAddress = mongoose.model<Schema<typeof ipSchema>>(
  "IpAddress",
  ipSchema
);
