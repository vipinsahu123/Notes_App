import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditNote = () => {
  const { id } = useParams(); // Get note ID from URL
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Fetch existing note
  useEffect(() => {
    axios.get(`https://notes-app-server-ag2f.onrender.com/notes/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setContent(res.data.content);
      })
      .catch((err) => console.error("Error fetching note:", err));
  }, [id]);

  // Submit updated note
  const handleUpdate = (e) => {
    e.preventDefault();

    axios.put(`https://notes-app-server-ag2f.onrender.com/notes/${id}`, { title, content })
      .then(() => navigate("/"))
      .catch((err) => console.error("Error updating note:", err));
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 mt-10 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Edit Note</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Title</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Content</label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded resize-none h-40 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition"
        >
          Update Note
        </button>
      </form>
    </div>
  );
};

export default EditNote;
