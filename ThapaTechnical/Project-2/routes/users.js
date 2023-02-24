var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/sendCookie", function (req, res, next) {
  res.cookie("auth-token", "abcd", {
    expires: new Date(Date.now() + 50000),
    httpOnly: true,
    // secure: true,
  });
  res.send("respond with a resource");
});

router.get("/getCookie", function (req, res) {
  console.log(req.cookies);
  res.send("getting cookie");
});

router.get("/deleteCookie", async (req, res) => {
  console.log(req.cookies);
  res.clearCookie("auth-token");
  res.send("deleting cookie");
});

module.exports = router;
