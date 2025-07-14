import { useEffect } from "react";

export default function useCanvasSetup(canvasRef, stack) {
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");

    const saved = localStorage.getItem("latestCanvas");
    if (saved) {
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0);
        stack.current.push(saved);
      };
      img.src = saved;
    } else {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      saveState();
    }

    const saveState = () => {
      const data = canvas.toDataURL();
      stack.current.push(data);
      localStorage.setItem("latestCanvas", data);
    };

    const resizeCanvas = () => {
      const imageData = canvas.toDataURL();
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.onload = () => ctx.drawImage(img, 0, 0);
      img.src = imageData;
    };

    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);
}
