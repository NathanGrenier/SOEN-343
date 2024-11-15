import { Link } from "react-router-dom";

export default function PackageNotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
            <div className="flex items-center mb-10">
                <h1 className="text-5xl font-bold text-red-600">Package Not Found</h1>
            </div>
            <p className="mb-6 text-xl text-gray-700 text-center">
                The package ID you entered does not exist. <br /> Please recheck the tracking number and try again.
            </p>
            <Link to="/trackPackage" className="bg-blue-500 text-white p-4 rounded text-lg font-semibold hover:bg-blue-600">
                Go Back
            </Link>
        </div>
    );
}