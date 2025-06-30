const express = require("express");
const Book = require("./models/Book");
const mongoose = require("mongoose");
const app = express();
const PORT = 4000;
const bookRouter = require("./routes/booksRouter");
const connectDb = require("./config/dbConnect")

//Connect to DB
connectDb();

//Middlewares
app.use(express.json()); // pass JSON data
app.use("/api/v1/book",bookRouter)


// start server
app.listen(PORT, console.log(`Server is running on the port ${PORT}`));
