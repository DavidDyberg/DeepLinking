"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpAddress = exports.ipSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.ipSchema = new mongoose_1.default.Schema({
    ip: { type: String, required: true, unique: true },
    influencer: { type: String },
    source: { type: String },
});
exports.IpAddress = mongoose_1.default.model("IpAddress", exports.ipSchema);
