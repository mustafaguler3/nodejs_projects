const mongoose = require("mongoose");
const appConfig = require("./appConfig");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(appConfig.mongoURI);
        console.log(`Mongodb connected: ${conn.connection.host}`)
    }catch (error) {
        console.log(`Error connection to Mongodb: ${error.message}`)
        process.exit(1)
    }
}
module.exports = connectDB;