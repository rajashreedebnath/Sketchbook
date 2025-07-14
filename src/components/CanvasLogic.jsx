import React from "react";

export default function CanvasCanvas({
  canvasRef,
  startDrawing,
  draw,
  stopDrawing,
  showGrid,
}) {
  return (
    <>
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        className="block w-full h-full"
      />
      {showGrid && (
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(#ccc_1px,transparent_1px),linear-gradient(90deg,#ccc_1px,transparent_1px)] bg-[size:20px_20px] opacity-30" />
      )}
    </>
  );
}
