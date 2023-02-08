const http = require("http");
const server = http.createServer((req, res) => {
    console.log("backend server");
    console.log(req.url);
    res.end("hello world again");
})
// .listen(3000);

server.listen(3000, "localhost", () => {
    console.log("server on http://localhost:3000");
})