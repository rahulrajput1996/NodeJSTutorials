const express = require("express");
const sequelize = require("./db.config");
const app = express();
app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(express.json());
app.use("/api/user/", require("./routes/user.route"));

sequelize
  .authenticate()
  .then(() => {
    app.listen(3000, () => {
      console.log("database connected");
      console.log("server is running http://localhost:3000/");
    });
  })
  .catch((err) => {
    console.log("sorry not connected", err);
  });
