import React, { useRef, useState } from "react";
import CanvasToolbar from "./CanvasToolbar";
import CanvasLogic from "./CanvasLogic";
import CanvasControls from "./CanvasControls";
import useCanvasSetup from "../hooks/useCanvasSetup";
import useDrawingEvents from "../hooks/useDrawingEvents";
import UndoRedoStack from "../utils/undoRedoStack";

export default function CanvasBoard({ setSketches }) {
  const canvasRef = useRef(null);
  const stack = useRef(new UndoRedoStack());

  const [color, setColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(5);
  const [isEraser, setIsEraser] = useState(false);
  const [drawing, setDrawing] = useState(false);
  const [showGrid, setShowGrid] = useState(true);

  useCanvasSetup(canvasRef, stack);

  const {
    startDrawing,
    draw,
    stopDrawing,
    handleUndo,
    handleRedo,
    handleClear,
    handleSave,
    handleExport,
  } = useDrawingEvents({
    canvasRef,
    stack,
    color,
    brushSize,
    isEraser,
    setSketches,
    drawing,
    setDrawing,
  });

  return (
    <div className="relative w-full h-screen bg-gradient-to-bl from-purple-50 via-blue-50 to-pink-50 overflow-hidden">
      <CanvasToolbar
        onColorChange={setColor}
        onSizeChange={setBrushSize}
        onEraserToggle={() => setIsEraser(!isEraser)}
        isEraser={isEraser}
        onUndo={handleUndo}
        onRedo={handleRedo}
        onToggleGrid={() => setShowGrid(!showGrid)}
        showGrid={showGrid}
      />

      <CanvasLogic
        canvasRef={canvasRef}
        startDrawing={startDrawing}
        draw={draw}
        stopDrawing={stopDrawing}
        showGrid={showGrid}
      />

      <CanvasControls
        handleClear={handleClear}
        handleSave={handleSave}
        handleExport={handleExport}
      />
    </div>
  );
}
