let fs = require("fs");

fs.readFile("./mod2.js", "utf-8", (err, data) => {
    if (err) {
        console.log("sorry")
    } else {
        console.log(data);
    }
})

fs.appendFile("./app3.js", "//this is my data\n", (err) => {
    if (err) {
        console.log("sorry");
    } else {
        console.log("success");
    }
})

fs.unlink("./app3.js", (err) => {
    if (err) {
        console.log("sorry");
    } else {
        console.log("success");
    }
})