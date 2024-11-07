import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as Error;

  let errorMessage: string;
  let errorStatus: number | null = null;
  if (isRouteErrorResponse(error)) {
    errorMessage = error?.message || error.statusText;
    errorStatus = error.status;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }

  return (
    <div
      id="error-page"
      className="flex h-screen flex-col items-center justify-center gap-8 bg-slate-200">
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred:</p>
      <div className="flex flex-col items-center justify-center">
        {errorStatus && (
          <p className="font-bold text-red-600">{`Status: ${errorStatus}`}</p>
        )}
        <p className="font-bold text-red-600">{`Error: ${errorMessage}`}</p>
      </div>
    </div>
  );
}
