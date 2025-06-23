import React from "react";

export default function EntryForm({ formData, onChange, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-gray-100 p-4 rounded mb-6 space-y-2"
    >
      <input
        name="title"
        value={formData.title}
        onChange={onChange}
        placeholder="Title"
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        name="content"
        value={formData.content}
        onChange={onChange}
        placeholder="Write your thoughts..."
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="mood"
        value={formData.mood}
        onChange={onChange}
        placeholder="Mood (happy/sad)"
        className="w-full p-2 border rounded"
      />
      <input
        name="category"
        value={formData.category}
        onChange={onChange}
        placeholder="Category (work/personal)"
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Add Entry
      </button>
    </form>
  );
}
