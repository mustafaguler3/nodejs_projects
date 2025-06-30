require("dotenv").config(); // Load env variables
const express = require("express");

//Express Init
const app = express();
//Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log( "server is running. "+PORT))