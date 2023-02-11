const mongoose = require("mongoose");
const blogsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Blogs = mongoose.model("Blogs", blogsSchema);

module.exports = Blogs;
