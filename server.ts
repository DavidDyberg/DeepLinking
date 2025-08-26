import express from "express";
import type { Express, Response, Request } from "express";
import dotenv from "dotenv";
import connectDB from "./db";
import cors from "cors";

dotenv.config();
connectDB();

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.set("trust proxy", true);
app.get("/", (req: Request, res: Response) => {
  const ip = req.ip;
  return res.json({
    ip,
  });
});

app.listen(PORT, () => {
  console.log(
    `Elogit, Abdu, David app listening on port http://localhost:${PORT}`
  );
});
