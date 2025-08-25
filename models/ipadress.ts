import mongoose, { Schema } from "mongoose";

export const ipSchema = new mongoose.Schema({
  ip: { type: String, required: true, unique: true },
  influencer: { type: String },
  source: { type: String },
});

export const IpAddress = mongoose.model<Schema<typeof ipSchema>>(
  "IpAddress",
  ipSchema
);
