import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function TrackPackage() {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const packageId = (event.target as HTMLInputElement).value;
      window.location.href = `/trackPackage/${packageId}/status`;
    }
  };

  const handleClick = () => {
    const packageId = (document.getElementById('packageId') as HTMLInputElement).value;
    window.location.href = `/trackPackage/${packageId}/status`;
  };

  return (
    <>
    <Navbar/>
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 p-4">
      <h1 className="text-5xl font-bold mb-10 text-green-500">Track Your Package</h1>
      <p className="mb-6 text-xl text-gray-700 text-center">
        Please enter your package's tracking number to view its status.
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-md">
        <input
          type="text"
          id="packageId"
          placeholder="Enter Package ID"
          required
          className="border border-gray-300 p-3 rounded w-full"
          onKeyDown={handleKeyPress}
        />
        <button
          onClick={handleClick}
          className="bg-custom-blueishGray text-white p-4 rounded w-full sm:w-auto text-lg font-semibold hover:bg-custom-mainGreen"
        >
          Track
        </button>
      </div>
    </div>
    <Footer/>
    </>
  );
}
