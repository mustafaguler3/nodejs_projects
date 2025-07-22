require("dotenv").config(); // Load env variables
const express = require("express");

const connectDB = require("./config/db")

//Express Init
const app = express();
// Connect DB
connectDB();
//Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log( "server is running. "+PORT))