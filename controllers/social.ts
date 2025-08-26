import type { Response, Request } from "express";
import { IpAddress } from "../models/ipadress";
import { Query } from "mongoose";
const influencers = ["sara", "kalle", "ahmed"];
export const saveNewIp = async (req: Request, res: Response): Promise<void> => {
  try {
    const influencer = req.query.influencer;
    const source = req.query.source;
    const ip = req.ip;

    const existingIp: any = await IpAddress.findOne({ ip });
    if (existingIp) {
      const saveInfluencer = existingIp.influencer; 
      const saveIp = existingIp.ip;
      res.send(`Sent and delted from database: ${saveIp}, ${saveInfluencer}`);
      void IpAddress.deleteOne({ _id: existingIp._id });
      return;
    }

    const existingInfluencer = influencers.includes(String(influencer));

    if (!existingInfluencer || !source) {
      res.status(404).json("no existing influencer or source");
      return;
    }

    const newIp = await IpAddress.create({ influencer, source, ip });
    res.status(201).json(newIp);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error when saving ip-adress: ${error.message}`);
    }
  }
};
