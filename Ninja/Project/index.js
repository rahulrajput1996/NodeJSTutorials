const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const router = require("./routes/blogRoutes");

mongoose.set("strictQuery", true);
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
// app.set("views", "public");  // by-default look into views folder but if we give access of other folder

mongoose
  .connect("mongodb://127.0.0.1:27017/MyBlogs")
  .then(() => {
    console.log("db connected");
    app.listen(3001, () => {
      console.log("server is running on http://localhost:3001");
    });
  })
  .catch((err) => {
    console.log(err);
  });
// app.use((req, res,next) => {
//     console.log("#############################");
//     next();
// })
// app.use("/about",(req, res,next) => {
//     console.log(req.method,req.path,req.hostname);
//     next();
// })
app.use(morgan("dev"));
app.use(express.static("public"));
// app.use(morgan("tiny"));
app.use(router);

// app.get("/create-blog", (req, res) => {
//   let blogs = { title: "C++ language", desc: "Old,advanced and gold" };
//   Blogs.create(blogs)
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

app.use((req, res) => {
  res.status(404).render("blogs/404.ejs", { title: "404 not found" });
});
