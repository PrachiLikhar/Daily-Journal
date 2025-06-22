import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateEntry() {
  const navigate = useNavigate();
  const [entry, setEntry] = useState({
    mood: "",
    text: "",
  });

  const handleChange = (e) => {
    setEntry({ ...entry, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Connect to backend later
    console.log("Entry saved:", entry);
    navigate("/dashboard");
  };

  const wordCount = entry.text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex justify-center items-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          📝 Create New Entry
        </h2>

        {/* Mood Selector */}
        <div>
          <label className="block text-gray-600 mb-1 font-medium">Mood</label>
          <select
            name="mood"
            value={entry.mood}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
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
            placeholder="Write about your day..."
            required
            className="w-full border p-3 rounded-md resize-none focus:ring-2 focus:ring-blue-500"
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
            ← Back
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Save Entry
          </button>
        </div>
      </form>
    </div>
  );
}
