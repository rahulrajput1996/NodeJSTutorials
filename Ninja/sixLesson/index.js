const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile("./views/Home.html", { root: __dirname })
})
app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/About.html")
})
app.get("/about-us", (req, res) => {
    res.redirect("/about")
})
app.use((req, res) => {
    res.status(404).sendFile(__dirname + "/views/404.html")
})

app.listen(2000, () => {
    console.log("server is running on http://localhost:2000")
})