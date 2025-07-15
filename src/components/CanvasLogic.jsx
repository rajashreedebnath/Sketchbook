import React, { useEffect } from "react";

export default function CanvasLogic({
  canvasRef,
  startDrawing,
  draw,
  stopDrawing,
  showGrid,
}) {
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
        className="block w-full h-full cursor-crosshair"
      />
      {showGrid && (
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(#ccc_1px,transparent_1px),linear-gradient(90deg,#ccc_1px,transparent_1px)] bg-[size:20px_20px] opacity-30" />
      )}
    </>
  );
}
