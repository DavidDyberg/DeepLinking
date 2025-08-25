import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.get("/", (req, res) => {
    // const ip = req.ip;
    // return res.json({
    //   ip
    // });
});
app.listen(PORT, () => {
    console.log(`Elogit, Abdu, David app listening on port ${PORT}`);
});
//# sourceMappingURL=server.js.map