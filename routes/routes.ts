import express from "express";

import { ipSchema } from "../models/ipadress";

const ipaddress = express.Router();

ipaddress.post("/", ipaddress);
ipaddress.get("/", ipaddress);

export default ipaddress;
