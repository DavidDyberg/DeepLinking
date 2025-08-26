import express from "express";
import type { Express, Response, Request } from "express";
import dotenv from "dotenv";
import connectDB from "./db";
import cors from "cors";
import { IpAddress } from "./models/ipadress";
import ipaddress from "./routes/routes";

dotenv.config();
connectDB();

const app: Express = express();
const PORT = process.env.PORT || 3000;
app.use(ipaddress);
app.use(express.json());
app.use(cors());
app.set("trust proxy", true);
app.get("/", async (req: Request, res: Response) => {
  // const ip = req.ip;
  // try {
  //   await IpAddress.findOneAndUpdate(
  //     { ip },
  //     { ip, createdAt: new Date() },
  //     { upsert: true, new: true }
  //   );
  // } catch (error) {
  //   console.error("Kunde inte spara IP:", error);
  // }
  // return res.json({ ip });
});

app.listen(PORT, () => {
  console.log(
    `Elogit, Abdu, David app listening on port http://localhost:${PORT}`
  );
});
