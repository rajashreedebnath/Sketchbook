import React, { useEffect, useState } from "react";
import CanvasBoard from "./components/CanvasBoard";
import LocationInfo from "./components/LocationInfo";
import NetworkStatus from "./components/NetworkStatus";
import SketchGallery from "./components/SketchGallery";
import { simulateBackgroundSync } from "./utils/syncSketches";

function App() {
  const [sketches, setSketches] = useState([]);
  const [locationInfo, setLocationInfo] = useState(null);

  useEffect(() => {
    simulateBackgroundSync();

    const saved = JSON.parse(localStorage.getItem("sketches") || "[]");
    setSketches(saved);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100 flex flex-col items-center p-4 transition-all duration-500">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 drop-shadow-lg">
        🌍 Smart Outdoor Sketchbook
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mb-6">
        <NetworkStatus />
        <LocationInfo setLocationInfo={setLocationInfo} />
      </div>

      <CanvasBoard setSketches={setSketches} locationInfo={locationInfo} />
      <SketchGallery sketches={sketches} setSketches={setSketches} />
    </div>
  );
}

export default App;
