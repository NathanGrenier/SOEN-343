import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as Error;
  console.error("Error:", error);

  let errorMessage: string;
  let errorStatus: number | null = null;
  let errorDetails: string | null = null;

  if (isRouteErrorResponse(error)) {
    errorMessage = error?.message || error.statusText;
    errorStatus = error.status;
    errorDetails = JSON.stringify(error.data, null, 2);
  } else if (error instanceof Error) {
    errorMessage = error.message;
    errorDetails = error.stack || null;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }

  return (
    <div
      id="error-page"
      className="flex h-screen flex-col items-center justify-center gap-8 bg-slate-200 p-4">
      <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
      <p className="text-lg">Sorry, an unexpected error has occurred:</p>
      <div className="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md">
        {errorStatus && (
          <p className="mb-4 text-xl font-bold text-red-600">{`Status: ${errorStatus}`}</p>
        )}
        <p className="mb-4 text-lg font-bold text-red-600">{`Error: ${errorMessage}`}</p>
        {errorDetails && (
          <pre className="whitespace-pre-wrap break-words rounded-lg bg-gray-100 p-4 shadow-inner">
            {errorDetails}
          </pre>
        )}
      </div>
      <button
        onClick={() => window.location.reload()}
        className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Reload Page
      </button>
    </div>
  );
}
