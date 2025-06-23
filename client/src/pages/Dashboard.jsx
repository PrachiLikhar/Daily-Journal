import React, { useEffect, useState } from "react";
import axios from "axios";
import EntryForm from "../components/EntryForm";
import EntryItem from "../components/EntryItem";
import EntryFilters from "../components/EntryFilters";

export default function Dashboard() {
  const [entries, setEntries] = useState([]);
  const [editingEntryId, setEditingEntryId] = useState(null);
  const [editForm, setEditForm] = useState({
    title: "",
    content: "",
    mood: "",
    category: "",
  });
  const [newEntry, setNewEntry] = useState({
    title: "",
    content: "",
    mood: "",
    category: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [filterMood, setFilterMood] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterDate, setFilterDate] = useState("");

  const fetchEntries = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get("http://localhost:5000/api/entries", {
      headers: { Authorization: token },
    });
    setEntries(res.data);
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const handleNewChange = (e) => {
    setNewEntry({ ...newEntry, [e.target.name]: e.target.value });
  };

  const handleNewSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await axios.post("http://localhost:5000/api/entries", newEntry, {
      headers: { Authorization: token },
    });
    setNewEntry({ title: "", content: "", mood: "", category: "" });
    setShowForm(false);
    fetchEntries();
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    await axios.delete(`http://localhost:5000/api/entries/${id}`, {
      headers: { Authorization: token },
    });
    fetchEntries();
  };

  const startEdit = (entry) => {
    setEditingEntryId(entry._id);
    setEditForm({
      title: entry.title,
      content: entry.content,
      mood: entry.mood,
      category: entry.category,
    });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const submitEdit = async (id) => {
    const token = localStorage.getItem("token");
    await axios.put(`http://localhost:5000/api/entries/${id}`, editForm, {
      headers: { Authorization: token },
    });
    setEditingEntryId(null);
    fetchEntries();
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">📓 Your Journal Dashboard</h2>

      <EntryFilters
        filterMood={filterMood}
        setFilterMood={setFilterMood}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        filterDate={filterDate}
        setFilterDate={setFilterDate}
      />

      <button
        onClick={() => setShowForm(!showForm)}
        className="mb-6 bg-blue-600 text-white px-4 py-2 rounded"
      >
        {showForm ? "Close Entry Form" : "Write New Entry"}
      </button>

      {showForm && (
        <EntryForm
          formData={newEntry}
          onChange={handleNewChange}
          onSubmit={handleNewSubmit}
        />
      )}

      {entries
        .filter((entry) => {
          const matchesMood =
            filterMood === "" || entry.mood.toLowerCase() === filterMood;
          const matchesCategory =
            filterCategory === "" ||
            entry.category.toLowerCase() === filterCategory;
          const matchesDate =
            filterDate === "" ||
            new Date(entry.date).toISOString().split("T")[0] === filterDate;
          return matchesMood && matchesCategory && matchesDate;
        })
        .map((entry) => (
          <EntryItem
            key={entry._id}
            entry={entry}
            isEditing={editingEntryId === entry._id}
            editForm={editForm}
            onEditChange={handleEditChange}
            onStartEdit={startEdit}
            onSubmitEdit={submitEdit}
            onCancelEdit={() => setEditingEntryId(null)}
            onDelete={handleDelete}
          />
        ))}
    </div>
  );
}
