import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditEntry() {
  const navigate = useNavigate();
  const { id } = useParams(); // entry ID from URL

  // Mock existing entry (replace with backend fetch later)
  const [entry, setEntry] = useState({
    mood: "",
    text: "",
  });

  // Simulate fetching data (replace with real API)
  useEffect(() => {
    // Mock data: Ideally, you’ll fetch from your backend
    const fetchedEntry = {
      mood: "😊",
      text: "This is my original journal entry content...",
    };
    setEntry(fetchedEntry);
  }, [id]);

  const handleChange = (e) => {
    setEntry({ ...entry, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Send updated entry to backend
    console.log("Updated Entry:", { id, ...entry });
    navigate("/dashboard");
  };

  const wordCount = entry.text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-yellow-50 flex justify-center items-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          ✏️ Edit Journal Entry
        </h2>

        {/* Mood Selector */}
        <div>
          <label className="block text-gray-600 mb-1 font-medium">Mood</label>
          <select
            name="mood"
            value={entry.mood}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded-md focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Select mood</option>
            <option value="😊">😊 Happy</option>
            <option value="😢">😢 Sad</option>
            <option value="😡">😡 Angry</option>
            <option value="😌">😌 Relaxed</option>
            <option value="😴">😴 Tired</option>
          </select>
        </div>

        {/* Journal Text */}
        <div>
          <label className="block text-gray-600 mb-1 font-medium">
            Your Thoughts
          </label>
          <textarea
            name="text"
            rows="6"
            value={entry.text}
            onChange={handleChange}
            placeholder="Edit your day..."
            required
            className="w-full border p-3 rounded-md resize-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
          <p className="text-right text-sm text-gray-500 mt-1">
            Word Count: {wordCount}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
          >
            ← Cancel
          </button>
          <button
            type="submit"
            className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
