// server/server.js
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/flashcard-game", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const flashcardSchema = new mongoose.Schema({
  question: String,
  answer: String,
});

const Flashcard = mongoose.model("Flashcard", flashcardSchema);

// Routes
app.get("/api/flashcards", (req, res) => {
  // Fetch flashcards from the database
  res.json(flashcards);
});

app.post("/api/flashcards", async (req, res) => {
  const newFlashcard = new Flashcard(req.body);
  await newFlashcard.save();
  res.status(201).json(newFlashcard);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
