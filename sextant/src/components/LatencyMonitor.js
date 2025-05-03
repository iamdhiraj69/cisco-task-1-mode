
import { useEffect, useState, useRef } from "react";

const LatencyMonitor = () => {
  const [latency, setLatency] = useState(null);
  const wsRef = useRef(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:55455");
    wsRef.current = ws;

    ws.onopen = () => {
      console.log("Connected to Pylon WebSocket");
    };

    ws.onmessage = (event) => {
      const sentTimestamp = Number(event.data);
      const now = Date.now();
      const latencyMs = now - sentTimestamp;
      setLatency(latencyMs);
    };

    ws.onerror = (error) => {
      console.error("WebSocket Error:", error);
    };

    ws.onclose = () => {
      console.log("WebSocket closed");
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="bg-slate-700 p-4 rounded-lg shadow-sm border border-slate-600">
      <h3 className="text-lg font-medium text-white mb-1">Packet Latency</h3>
      <p className="text-slate-300 text-sm">
        {latency !== null ? `${latency} ms` : "Waiting for packets..."}
      </p>
    </div>
  );
};

export default LatencyMonitor;
