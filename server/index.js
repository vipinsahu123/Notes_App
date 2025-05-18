// index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const Note = require("./model/note");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Atlas connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB error:", err));

// Get all notes
app.get("/notes", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get single note
app.get("/notes/:id", async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create new note
app.post("/notes", async (req, res) => {
  try {
    const newNote = new Note({
      title: req.body.title,
      content: req.body.content,
    });
    await newNote.save();
    res.json(newNote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update note
app.put("/notes/:id", async (req, res) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title: req.body.title, content: req.body.content },
      { new: true }
    );
    res.json(updatedNote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete note
app.delete("/notes/:id", async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
