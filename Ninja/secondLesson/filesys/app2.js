const fs = require("fs");
const readstream = fs.createReadStream("./views/myread.txt", "utf-8");

const writestream = fs.createWriteStream("./views/mywrite.txt");

// readstream.on("data", (chunk) => {
//     console.log("\n...................\n");
//     console.log(chunk);
//     writestream.write("\n------------\n");
//     writestream.write(chunk);
// })

readstream.pipe(writestream);


