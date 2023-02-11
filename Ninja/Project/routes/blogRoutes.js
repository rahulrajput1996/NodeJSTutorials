const express = require("express");
const router = express.Router();
const blogContoller = require("../controllers/blogController");

router.get("/", blogContoller.getHomePage);
router.get("/allblogs", blogContoller.getAllBlogs);
router.get("/about", blogContoller.getAboutPage);
router.get("/singleblog/:id", blogContoller.getSingleBlog);
router.delete("/singleblog/:id", blogContoller.deleteSingleBlog);
router.get("/create", blogContoller.getCreateBlogPage);
router.post("/create", blogContoller.createSingleBlog);

module.exports = router;
