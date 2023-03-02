import express from "express";
const router = express.Router();
import adminController from "../controller/adminController";

router.get("/signup", adminController.signup);
router.get("/login", adminController.login);

export = router;