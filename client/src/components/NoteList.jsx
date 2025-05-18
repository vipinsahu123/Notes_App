import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get("https://notes-app-server-ag2f.onrender.com/notes")
      .then((res) => setNotes(res.data))
      .catch((err) => console.error("Error fetching notes:", err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://notes-app-server-ag2f.onrender.com/notes/${id}`)
      .then(() => setNotes(notes.filter(note => note._id !== id)))
      .catch((err) => console.error("Error deleting note:", err));
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-gray-800">All Notes</h2>
        <Link
          to="/create"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-medium"
        >
          + Add Note
        </Link>
      </div>

      {notes.length === 0 ? (
        <p className="text-gray-600 text-center">No notes found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {notes.map((note) => (
            <div key={note._id} className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold text-blue-700">{note.title}</h3>
              <p className="text-gray-700 mt-2">{note.content}</p>
              <div className="flex justify-end mt-4">
                <Link
                  to={`/edit/${note._id}`}
                  className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded mr-2"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(note._id)}
                  className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotesList;
