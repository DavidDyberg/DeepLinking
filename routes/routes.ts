import express from "express";
import { saveNewIp } from "../controllers/social";

const ipaddress = express.Router();

ipaddress.get("/", saveNewIp);

export default ipaddress;
