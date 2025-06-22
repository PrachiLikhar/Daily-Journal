import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateEntry() {
  const [form, setForm] = useState({ mood: "", content: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      await axios.post("http://localhost:5000/api/entries", form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Entry added!");
      navigate("/dashboard");
    } catch (err) {
      alert("Failed to add entry");
      console.log(err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">✍️ Create Journal Entry</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          type="text"
          name="mood"
          placeholder="Mood (e.g., 😊)"
          value={form.mood}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="content"
          placeholder="Write your thoughts..."
          value={form.content}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save Entry
        </button>
      </form>
    </div>
  );
}
