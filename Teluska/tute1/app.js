const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("hello home page");
})

app.get("/auth/:id", (req, res) => {
    res.send(`hello id no. ${req.params.id}`);
})

app.get("/auth", (req, res) => {
    res.send(req.query);
})
app.listen(2000, () => {
    console.log(`server is running at http://localhost:2000`);
})