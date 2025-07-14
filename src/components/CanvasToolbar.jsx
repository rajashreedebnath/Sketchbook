import React from "react";

export default function CanvasToolbar({
  onColorChange,
  onSizeChange,
  onEraserToggle,
  isEraser,
  onUndo,
  onRedo,
  onToggleGrid,
  showGrid,
}) {
  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 px-5 py-2 flex items-center gap-4 z-50 rounded-full">
      <button
        onClick={onUndo}
        title="Undo"
        className="hover:scale-110 transition"
      >
        ↩️
      </button>
      <button
        onClick={onRedo}
        title="Redo"
        className="hover:scale-110 transition"
      >
        ↪️
      </button>

      <input
        type="color"
        onChange={(e) => onColorChange(e.target.value)}
        title="Brush Color"
        className="w-8 h-8 rounded-full border border-gray-300 shadow cursor-pointer"
      />

      <input
        type="range"
        min="1"
        max="50"
        onChange={(e) => onSizeChange(Number(e.target.value))}
        title="Brush Size"
        className="w-24 cursor-pointer"
      />

      <button
        onClick={onEraserToggle}
        className={`px-3 py-1 rounded-full transition ${
          isEraser ? "bg-orange-400 text-white" : "hover:bg-orange-100"
        }`}
        title="Eraser"
      >
        🧽
      </button>

      <button
        onClick={onToggleGrid}
        className={`px-3 py-1 rounded-full transition ${
          showGrid ? "bg-gray-400 text-white" : "hover:bg-gray-100"
        }`}
        title="Toggle Grid"
      >
        #️⃣
      </button>
    </div>
  );
}
