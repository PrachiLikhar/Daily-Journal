// src/components/MoodSelector.jsx
import React from "react";

export default function MoodSelector({ value, onChange }) {
  const moods = [
    { emoji: "😊", label: "Happy" },
    { emoji: "😢", label: "Sad" },
    { emoji: "😡", label: "Angry" },
    { emoji: "😌", label: "Relaxed" },
    { emoji: "😴", label: "Tired" },
  ];

  return (
    <div>
      <label className="block mb-1 text-gray-600 font-medium">Mood</label>
      <select
        name="mood"
        value={value}
        onChange={onChange}
        required
        className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Select mood</option>
        {moods.map((mood) => (
          <option key={mood.emoji} value={mood.emoji}>
            {mood.emoji} {mood.label}
          </option>
        ))}
      </select>
    </div>
  );
}
