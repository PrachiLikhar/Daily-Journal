// src/components/EntryCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function EntryCard({ entry }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xl">{entry.mood}</span>
        <span className="text-sm text-gray-500">{entry.date}</span>
      </div>
      <p className="text-gray-800 mb-3">{entry.content}</p>
      <div className="flex gap-3">
        <button
          onClick={() => navigate(`/edit/${entry.id}`)}
          className="text-blue-600 text-sm hover:underline"
        >
          ✏️ Edit
        </button>
        <button
          onClick={() => alert("Delete logic aayega yahan")}
          className="text-red-500 text-sm hover:underline"
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
}
