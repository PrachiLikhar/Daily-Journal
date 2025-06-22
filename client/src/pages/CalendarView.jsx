import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css"; // Optional custom style
import { useNavigate } from "react-router-dom";

const mockEntries = [
  {
    id: 1,
    date: "2025-06-20",
    mood: "😊",
    content: "I learned Tailwind today!",
  },
  {
    id: 2,
    date: "2025-06-19",
    mood: "😴",
    content: "Was tired but made progress.",
  },
];

export default function CalendarView() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigate = useNavigate();

  const formatDate = (date) => date.toISOString().split("T")[0];

  const entriesForDate = mockEntries.filter(
    (entry) => entry.date === formatDate(selectedDate)
  );

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 items-start">
        {/* Calendar */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4 text-gray-700">
            📅 Select a Date
          </h2>
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            className="rounded-md"
          />
        </div>

        {/* Entry List */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4 text-gray-700">
            Entries on {formatDate(selectedDate)}
          </h2>

          {entriesForDate.length === 0 ? (
            <p className="text-gray-500">No entries found for this date.</p>
          ) : (
            <div className="space-y-4">
              {entriesForDate.map((entry) => (
                <div
                  key={entry.id}
                  className="p-4 border rounded-lg shadow-sm bg-gray-50"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-lg">{entry.mood}</span>
                    <button
                      onClick={() => navigate(`/edit/${entry.id}`)}
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Edit
                    </button>
                  </div>
                  <p className="text-gray-700 mt-2">{entry.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
