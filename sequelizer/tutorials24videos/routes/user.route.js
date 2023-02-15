const express = require("express");
const route = express.Router();
const user_controller = require("../controllers/user.controller");

route.post("/adduser", user_controller.createUser);

module.exports = route;
