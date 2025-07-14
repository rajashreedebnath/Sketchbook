import React, { useState, useEffect } from "react";

export default function NetworkStatus() {
  const [connectionInfo, setConnectionInfo] = useState(null);

  useEffect(() => {
    const connection =
      navigator.connection ||
      navigator.webkitConnection ||
      navigator.mozConnection ||
      null;

    const updateConnectionInfo = () => {
      if (connection) {
        setConnectionInfo({
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
        });
      }
    };

    updateConnectionInfo();

    if (connection) {
      connection.addEventListener("change", updateConnectionInfo);
    }

    return () => {
      if (connection) {
        connection.removeEventListener("change", updateConnectionInfo);
      }
    };
  }, []);

  return (
    <div className="p-5 rounded-xl shadow-md bg-gradient-to-br from-violet-200 via-indigo-200 to-purple-300 w-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        🌐 Network Status
      </h2>
      {connectionInfo ? (
        <div className="text-gray-700 space-y-1 text-sm">
          <div>
            📡 Type:{" "}
            <span className="font-medium">{connectionInfo.effectiveType}</span>
          </div>
          <div>
            ⬇️ Downlink:{" "}
            <span className="font-medium">{connectionInfo.downlink} Mbps</span>
          </div>
          <div>
            ⚡ RTT: <span className="font-medium">{connectionInfo.rtt} ms</span>
          </div>
        </div>
      ) : (
        <p className="text-gray-600">Connection info not available.</p>
      )}
    </div>
  );
}
