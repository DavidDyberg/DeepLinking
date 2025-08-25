"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveNewIp = exports.ipCheckUser = void 0;
const ipadress_1 = require("../models/ipadress");
const ipCheckUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ip = req.ip;
    if (!ip) {
        res.send(console.log("Elgot has no IP"));
    }
    res.json({ ip });
});
exports.ipCheckUser = ipCheckUser;
const saveNewIp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ip = yield ipadress_1.IpAddress.create(req.ip);
        res.status(201).json(ip);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Error when saving ip-adress: ${error.message}`);
        }
    }
});
exports.saveNewIp = saveNewIp;
