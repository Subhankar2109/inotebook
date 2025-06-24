const mongoose = require("mongoose");
const mongoURL = "mongodb://localhost:27017/";

const connectMongoose = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("Connected");
  } catch {
    console.log("Not connected");
  }
};
module.exports = connectMongoose;
