"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose_1 = __importDefault(require("mongoose"));
const adminSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
    },
});
const admin = mongoose_1.default.model("admin", adminSchema);
module.exports = admin;
