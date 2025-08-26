import express from "express";
import { ipCheckUser, saveNewIp } from "../controllers/social";

const ipaddress = express.Router();

ipaddress.post("/", ipCheckUser);
ipaddress.get("/", saveNewIp);

export default ipaddress;
