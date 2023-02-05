const fs = require("fs");
// fs.readFileSync("./assets/blog.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log("sorry i can not read");
//     } else {
//         console.log(data);
//     }
// })

// console.log("first");
// if (fs.existsSync("./assets/blogdata.txt")) {
//     fs.unlink("./assets/blogdata.txt", (err) => {
//         if (err) {
//             console.log("sorry");
//         } else {
//             console.log("deleted");
//         }
//     })
// } else {
//     fs.writeFile("./assets/blogdata.txt", "i love you priyanka", (err) => {
//         if (err) {
//             console.log("mera chand");
//         } else {
//             console.log("meri zindagi");
//         }
//     })
// }

//directories
if (fs.existsSync("./public/abc.txt")) {
    fs.rmdir("./public", (err) => {
        if (err) {
            console.log("internal error");
        } else {
            console.log("deleted successfully");
        }
    })
} else {
    fs.mkdir("./public", (err) => {
        if (err) {
            console.log("unable to create it");
        } else {
            console.log("directory created");
        }
    })
}
