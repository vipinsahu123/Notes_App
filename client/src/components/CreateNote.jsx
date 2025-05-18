import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send data to backend
    axios.post("http://localhost:3001/notes", { title, content })
      .then(() => {
        setTitle("");
        setContent("");
        navigate("/"); // Redirect to notes list
      })
      .catch((err) => console.error("Error creating note:", err));
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 mt-10 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Create a New Note</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Title</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter note title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Content</label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded resize-none h-40 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter note content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition"
        >
          Save Note
        </button>
      </form>
    </div>
  );
};

export default CreateNote;
