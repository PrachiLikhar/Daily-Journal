import React from "react";

export default function EntryItem({
  entry,
  isEditing,
  editForm,
  onEditChange,
  onStartEdit,
  onSubmitEdit,
  onCancelEdit,
  onDelete,
}) {
  return (
    <div className="bg-white shadow p-4 rounded mb-4">
      {isEditing ? (
        <div className="space-y-2">
          <input
            name="title"
            value={editForm.title}
            onChange={onEditChange}
            className="w-full p-2 border rounded"
          />
          <textarea
            name="content"
            value={editForm.content}
            onChange={onEditChange}
            className="w-full p-2 border rounded"
          />
          <input
            name="mood"
            value={editForm.mood}
            onChange={onEditChange}
            className="w-full p-2 border rounded"
          />
          <input
            name="category"
            value={editForm.category}
            onChange={onEditChange}
            className="w-full p-2 border rounded"
          />
          <button
            onClick={() => onSubmitEdit(entry._id)}
            className="bg-green-500 text-white px-4 py-1 rounded mr-2"
          >
            Save
          </button>
          <button
            onClick={onCancelEdit}
            className="bg-gray-400 text-white px-4 py-1 rounded"
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold">{entry.title}</h3>
            <span className="text-sm text-gray-500">
              {new Date(entry.date).toLocaleDateString()}
            </span>
          </div>
          <p className="mt-1">{entry.content}</p>
          <p className="text-sm mt-2 text-gray-700">
            Mood: <strong>{entry.mood}</strong> | Category:{" "}
            <strong>{entry.category}</strong>
          </p>
          <div className="mt-3 space-x-2">
            <button
              onClick={() => onStartEdit(entry)}
              className="bg-yellow-500 text-white px-3 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(entry._id)}
              className="bg-red-600 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}
