import mongoose from "mongoose";

let connection = async() => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/testmytypescript");
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
}

export = connection;