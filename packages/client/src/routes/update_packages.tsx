import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// Define the type for package information
interface PackageInfo {
  id: string;
  dropOffName: string;
  dropOffLastName: string;
  dropOffAddress: string;
  pickUpName: string;
  pickUpLastName: string;
  pickUpAddress: string;
  pickUpDate: string;
  dropOffDate: string;
  amount: number;
  email: string;
  status?: string;
}

const AdminPage: React.FC = () => {
  const [id, setId] = useState<string>("");
  const [packageInfo, setPackageInfo] = useState<PackageInfo | null>(null);
  const [statusMessage, setStatusMessage] = useState<string>("");

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const searchPackage = async () => {
    try {
      const response = await axios.get<PackageInfo>(`/api/packages/${id}`);
      console.log(response.data);
      setPackageInfo(response.data);
      setStatusMessage("");
    } catch (error) {
      console.error("Error fetching package:", error);
      setPackageInfo(null);
      setStatusMessage("No package found for this ID.");
    }
  };

  const updateStatus = async (newStatus: string, id:string) => {
    if (packageInfo) {
      try {
        await axios.put(`/api/packages/${packageInfo.id}/${newStatus}`,);
        setPackageInfo({ ...packageInfo, status: newStatus });
        setStatusMessage(`Package status updated to "${newStatus}".`);
        if (newStatus === "shipped"){
            await axios.post(`/api/send-delivery-shipped/${id}`);
        }else {
            await axios.post(`/api/send-delivery-confirmation/${id}`);
        }
      } catch (error) {
        console.error("Error updating status:", error);
        setStatusMessage("Failed to update package status.");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-custom-lightGray">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow">
        <h2 className="text-5xl font-bold mb-8 text-center">Package Status Update</h2>
        <div className="flex flex-col items-center space-y-4">
          <input
            type="text"
            placeholder="Enter package ID"
            value={id}
            onChange={handleIdChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-blueishGray"
          />
          <button
            className="px-6 py-2 bg-custom-blueishGray text-white font-semibold rounded-lg hover:bg-custom-mainGreen"
            onClick={() => {
                void (async () => {
                  await searchPackage();
                })();
              }}
          >
            Find Package
          </button>
        </div>

        {statusMessage && <p className="mt-4 text-center text-red-500">{statusMessage}</p>}

        {packageInfo && (
          <div className="mt-8 p-6 border rounded-lg shadow-md bg-white max-w-md text-center space-y-4">
            <h3 className="text-2xl font-semibold">Package Details</h3>
            <p><strong>Tracking ID:</strong> {packageInfo.id}</p>
            <p><strong>Drop-Off Name:</strong> {packageInfo.dropOffName} {packageInfo.dropOffLastName}</p>
            <p><strong>Drop-Off Address:</strong> {packageInfo.dropOffAddress}</p>
            <p><strong>Pick-Up Name:</strong> {packageInfo.pickUpName} {packageInfo.pickUpLastName}</p>
            <p><strong>Pick-Up Address:</strong> {packageInfo.pickUpAddress}</p>
            <p><strong>Pick-Up Date:</strong> {new Date(packageInfo.pickUpDate).toDateString()}</p>
            <p><strong>Drop-Off Date:</strong> {new Date(packageInfo.dropOffDate).toDateString()}</p>
            <p><strong>Amount:</strong> ${packageInfo.amount}</p>
            <p><strong>Email:</strong> {packageInfo.email}</p>
            <p><strong>Status:</strong> {packageInfo.status}</p>

            <div className="flex justify-around mt-4">
            <button
                className="px-4 py-2 bg-custom-blueishGray mr-3 text-white font-semibold rounded-lg hover:bg-custom-mainGreen"
                onClick={() => {
                    void (async () => {
                    await updateStatus("shipped", packageInfo.id);
                    })();
                }}
                >
                Mark as Shipped
                </button>
              <button
                className="px-4 py-2 bg-custom-blueishGray ml-3 text-white font-semibold rounded-lg hover:bg-custom-mainGreen"
                onClick={() => {
                    void (async () => {
                    await updateStatus("delivered", packageInfo.id);
                    })();
                }}
                >
                Mark as Delivered
                </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AdminPage;
