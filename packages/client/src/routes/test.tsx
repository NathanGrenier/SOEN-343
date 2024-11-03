import { Form, useFetcher, useLoaderData } from "react-router-dom";
import DeleteBinIcon from "../icons/DeleteBinIcon";
import type { TestLoaderData } from "./test";

export default function Contact() {
  const { data } = useLoaderData() as TestLoaderData;
  const fetcher = useFetcher();

  const handleDelete = (id: number) => {
    fetcher.submit(null, {
      method: "delete",
      action: `./${id}`,
    });
  };

  return (
    <div className="bg-cus flex min-h-screen flex-col items-center justify-center bg-gray-200">
      <h1 className="mb-8 text-4xl font-bold text-blue-600">Test App!</h1>
      <div className="rounded-lg bg-white p-6 shadow-md">
        <Form method="post" className="mt-4">
          <label className="mb-2 block text-lg font-semibold">
            Create a New Test Entry:
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 bg-gray-200 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>
          <button
            type="submit"
            className="mt-2 w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Submit
          </button>
        </Form>
        <h3 className="mb-4 mt-8 text-2xl font-semibold">Test Entries</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Created At
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {data.map((entry) => (
                <tr key={entry.id}>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                    {entry.id}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {entry.name}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {new Date(entry.created_at).toLocaleString()}
                  </td>
                  <td className="flex justify-center whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    <button
                      onClick={() => handleDelete(entry.id)}
                      className="rounded-md bg-red-600 px-3 py-2 text-white hover:bg-red-700">
                      <DeleteBinIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
