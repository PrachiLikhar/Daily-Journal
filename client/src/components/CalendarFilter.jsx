// src/components/CalendarFilter.jsx
import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css"; // optional custom styling

export default function CalendarFilter({ selectedDate, onChange }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">
        📅 Filter by Date
      </h3>
      <Calendar onChange={onChange} value={selectedDate} className="rounded" />
    </div>
  );
}
