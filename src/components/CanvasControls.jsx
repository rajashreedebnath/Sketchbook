import React from "react";

export default function CanvasControls({
  handleClear,
  handleSave,
  handleExport,
}) {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 z-50">
      <button
        onClick={handleClear}
        className="px-4 py-2 rounded-md bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white shadow-lg hover:scale-105 transition"
      >
        🧹 Clear
      </button>

      <button
        onClick={handleSave}
        className="px-4 py-2 rounded-md bg-gradient-to-r from-green-400 via-teal-400 to-emerald-500 text-white shadow-lg hover:scale-105 transition"
      >
        💾 Save
      </button>

      <button
        onClick={handleExport}
        className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-500 text-white shadow-lg hover:scale-105 transition"
      >
        📤 Export
      </button>
    </div>
  );
}
