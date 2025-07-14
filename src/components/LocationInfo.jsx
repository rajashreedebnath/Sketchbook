import React, { useEffect, useState } from "react";

export default function LocationInfo({ setLocationInfo }) {
  const [location, setLocation] = useState(null);
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const loc = {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        };
        setLocation(loc);

        const now = new Date();
        setDateTime(now);

        setLocationInfo({
          ...loc,
          date: now.toLocaleDateString(),
          time: now.toLocaleTimeString(),
        });
      },
      () => {
        setLocation(null);
      }
    );
  }, []);

  return (
    <div className="p-5 rounded-xl shadow-md bg-gradient-to-br from-indigo-200 via-violet-300 to-fuchsia-300 w-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">📌 Location</h2>
      {location ? (
        <div className="text-sm text-gray-700 space-y-1">
          <div>
            🗺 Lat:{" "}
            <span className="font-medium">{location.latitude.toFixed(4)}</span>
          </div>
          <div>
            🧭 Long:{" "}
            <span className="font-medium">{location.longitude.toFixed(4)}</span>
          </div>
          <div>
            📅 Date:{" "}
            <span className="font-medium">{dateTime.toLocaleDateString()}</span>
          </div>
          <div>
            ⏰ Time:{" "}
            <span className="font-medium">{dateTime.toLocaleTimeString()}</span>
          </div>
        </div>
      ) : (
        <div className="text-red-600">Location unavailable</div>
      )}
    </div>
  );
}
