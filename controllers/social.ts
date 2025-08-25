import type { Response, Request } from "express";
import { IpAddress } from "../models/ipadress";

export const ipCheckUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const ip = req.ip;
  if (!ip) {
    res.send(console.log("Elgot has no IP"));
  }

  res.json({ ip });
};

export const saveNewIp = async (req: Request, res: Response): Promise<void> => {
  try {
    const ip = await IpAddress.create(req.ip);
    res.status(201).json(ip);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error when saving ip-adress: ${error.message}`);
    }
  }
};
