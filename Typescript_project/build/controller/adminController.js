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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const adminModel_1 = __importDefault(require("../models/adminModel"));
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield adminModel_1.default.create({ name: "rahul" });
        res.send("hi");
    }
    catch (error) {
    }
});
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield adminModel_1.default.create({ name: "rahul" });
    }
    catch (error) {
    }
});
module.exports = {
    signup,
    login
};
