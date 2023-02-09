const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    // console.log(req);
    console.log(req.url, req.method);
    // res.end("hi");
    let path = "./views/";
    switch (req.url) {
        case "/":
            res.statusCode = 200;
            path = path + "Home.html";
            break;

        case "/about":
            res.statusCode = 200;
            path = path + "About.html";
            break;

        case "/about-me":
            res.statusCode = 301;
            res.setHeader("Location", "/about");
            // res.end();
            break;

        default:
            res.statusCode = 404;
            path = path + "404.html";

    }
    console.log(path);

    fs.readFile(path, (err, data) => {
        if (err) {
            res.end();
        } else {
            res.end(data);
        }
    })

})


server.listen(3001, "localhost", () => {
    console.log("server is running on http://localhost:3001");
})