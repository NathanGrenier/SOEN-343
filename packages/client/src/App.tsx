import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-6 text-4xl font-bold text-blue-600">Test App!</h1>
      <div className="w-3/4 rounded-lg bg-white p-6 shadow-md md:w-1/2 lg:w-1/3">
        <h3 className="mb-4 text-2xl font-semibold">Server Data</h3>
        <pre className="overflow-auto rounded-lg bg-gray-200 p-4">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default App;
