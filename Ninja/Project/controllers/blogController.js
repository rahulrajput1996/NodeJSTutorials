const Blogs = require("../models/Blogs");

const getAllBlogs = (req, res) => {
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
};
const getSingleBlog = (req, res) => {
  Blogs.findById(req.params.id)
    .then((result) => {
      console.log(result);
      res.render("blogs/blog.ejs", { title: "single blog", blog: result });
    })
    .catch((err) => {
      //   res.send(err);
      res.status(404).render("blogs/404.ejs", { title: "404 not found" });
    });
};

const getHomePage = (req, res) => {
  res.redirect("/allblogs");
};

const getAboutPage = (req, res) => {
  res.status(200).render("blogs/About.ejs", { title: "About" });
};

const getCreateBlogPage = (req, res) => {
  res.status(200).render("blogs/Create.ejs", { title: "Create" });
};

const createSingleBlog = (req, res) => {
  //   console.log(req.body);
  Blogs.create(req.body)
    .then((result) => {
      //   console.log(result);
      res.redirect("/allblogs");
    })
    .catch(() => {
      console.log(err);
    });
};

const deleteSingleBlog = (req, res) => {
  //   console.log(req.params.id);
  Blogs.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json({ success: true, redirect: "/allblogs" });
    })
    .catch(() => {
      console.log(err);
    });
};

module.exports = {
  getAllBlogs,
  getSingleBlog,
  getAboutPage,
  createSingleBlog,
  deleteSingleBlog,
  getCreateBlogPage,
  getHomePage,
};
