import mongoose, { Schema } from "mongoose";
export const ipSchema = new mongoose.Schema({
    ip: { type: String, required: true, unique: true },
    influencer: { type: String, required: true },
    source: { type: String },
});
export const IpAddress = mongoose.model("IpAddress", ipSchema);
//# sourceMappingURL=ipadress.js.map