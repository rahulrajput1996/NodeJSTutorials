import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
  },
});

const admin = mongoose.model("admin", adminSchema);

export = admin ;