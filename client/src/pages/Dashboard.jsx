import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Dashboard() {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEntries = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No token found. Please login again.");
        return;
      }

      try {
        const res = await axios.get("http://localhost:5000/api/entries", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (Array.isArray(res.data)) {
          setEntries(res.data);
        } else {
          setError("Invalid data received");
        }
      } catch (err) {
        console.error("❌ Error fetching entries:", err.message);
        setError("Failed to fetch entries");
      }
    };

    fetchEntries();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">📒 Your Journal Entries</h1>
        <button
          onClick={() => navigate("/create")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          ➕ Create Entry
        </button>
      </div>

      {error ? (
        <p className="text-red-500 font-semibold">{error}</p>
      ) : entries.length === 0 ? (
        <p className="text-gray-500">No entries found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {entries.map((entry) => (
            <div
              key={entry._id}
              className="bg-white p-4 rounded-lg shadow-md border"
            >
              <div className="text-2xl">{entry.mood}</div>
              <p className="mt-2 text-gray-700">{entry.content}</p>
              <p className="mt-1 text-sm text-gray-400">
                {new Date(entry.date).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
