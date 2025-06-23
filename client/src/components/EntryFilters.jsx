import React from "react";

export default function EntryFilters({
  filterMood,
  setFilterMood,
  filterCategory,
  setFilterCategory,
  filterDate,
  setFilterDate,
}) {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <select
        value={filterMood}
        onChange={(e) => setFilterMood(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">All Moods</option>
        <option value="happy">Happy</option>
        <option value="sad">Sad</option>
        <option value="angry">Angry</option>
        <option value="excited">Excited</option>
      </select>

      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">All Categories</option>
        <option value="personal">Personal</option>
        <option value="work">Work</option>
        <option value="travel">Travel</option>
      </select>

      <input
        type="date"
        value={filterDate}
        onChange={(e) => setFilterDate(e.target.value)}
        className="p-2 border rounded"
      />
    </div>
  );
}
