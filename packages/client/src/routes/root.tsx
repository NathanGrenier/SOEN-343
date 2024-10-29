import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <nav className="w-full bg-blue-600 p-4">
        <div className="container mx-auto flex h-full items-center justify-around">
          <Link
            to="/"
            className="h-full px-6 py-2 text-lg font-semibold text-white hover:bg-blue-700">
            Home
          </Link>
          <Link
            to="/test"
            className="h-full px-6 py-2 text-lg font-semibold text-white hover:bg-blue-700">
            Test
          </Link>
          <Link
            to="/quotation"
            className="h-full px-6 py-2 text-lg font-semibold text-white hover:bg-blue-700">
            Quote
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
