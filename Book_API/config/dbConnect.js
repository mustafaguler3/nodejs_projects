const { default: mongoose } = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected successfully")
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;