const http = require("http");
http.createServer((req, res) => {
    console.log(req.url);
    res.end("hello world");
}).listen(2000);


