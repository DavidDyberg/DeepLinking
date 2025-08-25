"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./db"));
dotenv_1.default.config();
(0, db_1.default)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.set("trust proxy", true);
app.get("/", (req, res) => {
    const ip = req.ip;
    return res.json({
        ip,
    });
});
app.listen(PORT, () => {
    console.log(`Elogit, Abdu, David app listening on port http://localhost:${PORT}`);
});
