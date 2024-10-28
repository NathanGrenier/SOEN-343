import { useState } from "react";
import { useLoaderData } from "react-router-dom";

declare interface TestLoaderData {
  data: JSON;
}

export async function loader(): Promise<TestLoaderData | null> {
  try {
    const response = await fetch(`${__API_PATH__}/test`, {
      method: "GET",
    });
    const data = (await response.json()) as JSON;
    return { data };
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export default function Contact() {
  const { data } = useLoaderData() as TestLoaderData;
  const [formData, setFormData] = useState("");
  const [responseText, setResponseText] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetch(`${__API_PATH__}/test`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    })
      .then((response) => response.text())
      .then((text) => {
        setResponseText(text);
      })
      .catch((error) => console.error("Error submitting form:", error));
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-8 text-4xl font-bold text-blue-600">Test App!</h1>
      <div className="w-3/4 rounded-lg bg-white p-6 shadow-md md:w-1/2 lg:w-1/3">
        <h3 className="mb-4 text-2xl font-semibold">Server Data</h3>
        <pre className="overflow-auto rounded-lg bg-gray-200 p-4">
          {JSON.stringify(data, null, 2)}
        </pre>
        <form onSubmit={handleSubmit} className="mt-4">
          <label className="mb-2 block text-lg font-semibold">
            Enter some text:
            <input
              type="text"
              value={formData}
              onChange={(e) => setFormData(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 bg-gray-200 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>
          <button
            type="submit"
            className="mt-2 w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Submit
          </button>
        </form>
        {responseText && (
          <div className="mt-4 rounded-lg bg-green-100 p-4 text-green-800">
            {responseText}
          </div>
        )}
      </div>
    </div>
  );
}
