const express = require("express");

const bookRouter = express.Router();

//Update a book
bookRouter.put("/:id", async (req,res) => {
  try {
    const bookUpdated = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(bookUpdated);
  }catch (error) {
    res.status(500).json({error: error.message});
  }
})

//Delete a book
bookRouter.delete("/:id", async (req,res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({message: "Book deleted successfully"});
  }catch (error) {
    res.status(500).json({error: error.message});
  }
})

//Fetch a book
bookRouter.get("/:id", async (req,res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json(book);
  }catch (error) {
    res.status(500).json({error: error.message});
  }
})

//Get all Books
bookRouter.get("/books", async (req,res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  }catch (error) {
    res.status(500).json({error: error.message})
  }
})

//Create new book
bookRouter.post("/books", async (req, res) => {
  try {
    console.log(req.body);

    const { title, author, isAvailable, publishedYear, genre } = req.body;
    const existingBook = await Book.findOne({title,author});

    if (existingBook) {
        return res.status(409).json({ error: "Book already exists"});
    }

    const book = await Book.create({
        title,
        author,
        genre,
        publishedYear,
        isAvailable
    });

    // send the response to the user
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
});

module.exports = bookRouter;