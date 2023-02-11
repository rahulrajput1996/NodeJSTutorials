const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blogs = require("./models/Blogs");

mongoose.set("strictQuery", true);
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded());
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

app.get("/", (req, res) => {
  res.redirect("/allblogs");
});

app.get("/allblogs", (req, res) => {
  Blogs.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      //   res.send(result);
      res
        .status(200)
        .render("blogs/Home.ejs", { title: "Home", blogs: result });
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/about", (req, res) => {
  res.status(200).render("blogs/About.ejs", { title: "About" });
});

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

app.get("/singleblog/:id", (req, res) => {
  Blogs.findById(req.params.id)
    .then((result) => {
      console.log(result);
      res.render("blogs/blog.ejs", { title: "single blog", blog: result });
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/create", (req, res) => {
  res.status(200).render("blogs/Create.ejs", { title: "Create" });
});

app.delete("/singleblog/:id", (req, res) => {
  console.log(req.params.id);
  Blogs.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json({ success: true, redirect: "/allblogs" });
    })
    .catch(() => {
      console.log(err);
    });
});

app.post("/create", (req, res) => {
  //   console.log(req.body);
  Blogs.create(req.body)
    .then((result) => {
      //   console.log(result);
      res.redirect("/allblogs");
    })
    .catch(() => {
      console.log(err);
    });
});

app.use((req, res) => {
  res.status(404).render("blogs/404.ejs", { title: "404 not found" });
});
