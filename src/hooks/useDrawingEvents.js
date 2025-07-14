export default function useDrawingEvents({
  canvasRef,
  stack,
  color,
  brushSize,
  isEraser,
  setSketches,
  drawing,
  setDrawing,
}) {
  const saveState = () => {
    const data = canvasRef.current.toDataURL();
    stack.current.push(data);
    localStorage.setItem("latestCanvas", data);
  };

  const loadImage = (dataURL) => {
    const img = new Image();
    img.onload = () => {
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctx.drawImage(img, 0, 0);
    };
    img.src = dataURL;
  };

  const startDrawing = (e) => {
    setDrawing(true);
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const draw = (e) => {
    if (!drawing) return;
    const ctx = canvasRef.current.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineWidth = brushSize;
    ctx.strokeStyle = isEraser ? "#ffffff" : color;
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setDrawing(false);
    saveState();
  };

  const handleUndo = () => {
    const prev = stack.current.undo();
    if (prev) loadImage(prev);
  };

  const handleRedo = () => {
    const next = stack.current.redo();
    if (next) loadImage(next);
  };

  const handleClear = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    localStorage.removeItem("latestCanvas");
    saveState();
  };

  const handleSave = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const dataURL = canvasRef.current.toDataURL();
        const now = new Date();

        const newSketch = {
          id: Date.now(),
          image: dataURL,
          location: {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          },
          date: now.toLocaleDateString(),
          time: now.toLocaleTimeString(),
        };

        const saveSketchToLocal = JSON.parse(localStorage.getItem("sketches") || "[]");
        saveSketchToLocal.unshift(newSketch);
        localStorage.setItem("sketches", JSON.stringify(saveSketchToLocal));
        setSketches((prev) => [newSketch, ...prev]);
        alert("Sketch saved!");
      },
      () => alert("Location permission denied!")
    );
  };

  const handleExport = () => {
    const link = document.createElement("a");
    link.download = "sketch.png";
    link.href = canvasRef.current.toDataURL();
    link.click();
  };

  return {
    startDrawing,
    draw,
    stopDrawing,
    handleUndo,
    handleRedo,
    handleClear,
    handleSave,
    handleExport,
  };
}
