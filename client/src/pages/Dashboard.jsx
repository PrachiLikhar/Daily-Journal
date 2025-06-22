// src/pages/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";

const mockEntries = [
  {
    id: 1,
    date: "2025-06-20",
    mood: "😊",
    content: "Today I felt really good after finishing my journal setup!",
  },
  {
    id: 2,
    date: "2025-06-19",
    mood: "😔",
    content: "It was a tough day, but I’m learning every day.",
  },
];

export default function Dashboard() {
  const today = new Date().toLocaleDateString();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">📓 Daily Journal</h1>
          <p className="text-gray-500">Today: {today}</p>
        </div>
        <Link
          to="/create"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          + New Entry
        </Link>
      </div>

      {/* Journal Entries */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockEntries.map((entry) => (
          <div
            key={entry.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-xl">{entry.mood}</span>
              <span className="text-sm text-gray-500">{entry.date}</span>
            </div>
            <p className="text-gray-800">{entry.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
