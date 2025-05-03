
import { useEffect, useState } from "react";

const IPAddress = ({ version = "v4" }) => {
  const [ip, setIp] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url =
      version === "v6"
        ? "https://api64.ipify.org?format=json"
        : "https://api.ipify.org?format=json";

    fetch(url)
      .then((res) => res.json())
      .then((data) => setIp(data.ip))
      .catch(() => setError("Error fetching IP address."));
  }, [version]);

  return (
    <div className="bg-slate-700 p-4 rounded-lg shadow-sm border border-slate-600">
      <h3 className="text-lg font-medium text-white mb-1">
        Your Public IP ({version.toUpperCase()})
      </h3>
      <p className="text-slate-300 text-sm">
        {error ? error : ip ? ip : "Loading..."}
      </p>
    </div>
  );
};

export default IPAddress;
