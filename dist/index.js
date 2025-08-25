import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.set("trust proxy", true);
app.get("/", (req, res) => {
    const ip = req.ip;
    if (!ip) {
        return console.log("Elgot  has no IP");
    }
    return res.json({
        ip,
    });
});
app.listen(PORT, () => {
    console.log(`Elogit, Abdu, David app listening on port http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map