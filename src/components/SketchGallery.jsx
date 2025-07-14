import React from "react";

export default function SketchGallery({ sketches, setSketches }) {
  const handleDelete = (id) => {
    const updated = sketches.filter((s) => s.id !== id);
    localStorage.setItem("sketches", JSON.stringify(updated));
    setSketches(updated);
  };

  return (
    <div className="mt-8 w-full max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">
        📚 Sketch Gallery
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sketches.map((sketch) => (
          <div
            key={sketch.id}
            className="rounded p-4 flex flex-col shadow
    bg-gradient-to-br from-pink-100 via-purple-200 to-violet-100
    border border-gray-200"
          >
            <img
              src={sketch.image}
              alt="Sketch"
              className="w-full mb-3 rounded border border-gray-200 object-cover"
            />
            <div className="text-sm text-gray-600 space-y-1 flex-grow">
              <div>
                📅 {sketch.date} ⏰ {sketch.time}
              </div>
              <div>🗺 Lat: {sketch.location.latitude.toFixed(4)}</div>
              <div>🧭 Long: {sketch.location.longitude.toFixed(4)}</div>
            </div>
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => handleDelete(sketch.id)}
                className="flex-1 text-white font-semibold py-2 rounded
                  bg-gradient-to-r from-pink-300 via-fuchsia-400 to-red-500
                  hover:from-pink-400 hover:via-yellow-400 hover:to-red-400
                  transition-colors duration-300"
              >
                🗑️ Delete
              </button>
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = sketch.image;
                  link.download = `sketch-${sketch.id}.png`;
                  link.click();
                }}
                className="flex-1 text-white font-semibold py-2 rounded
                  bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300
                  hover:from-blue-400 hover:via-indigo-400 hover:to-purple-400
                  transition-colors duration-300"
              >
                📤 Export
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
