"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const adminController_1 = __importDefault(require("../controller/adminController"));
router.get("/signup", adminController_1.default.signup);
router.get("/login", adminController_1.default.login);
module.exports = router;
