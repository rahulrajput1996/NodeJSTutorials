console.log(global);
global.setTimeout(() => {
    console.log("first");
    clearInterval(myfun);
}, 3000);

let myfun = global.setInterval(() => {
    console.log("second");
}, 1000)

const os = require("os");
console.log(os.platform(), os.homedir());

console.log(__dirname);
console.log(__filename);


