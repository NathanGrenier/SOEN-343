import { useLoaderData } from "react-router-dom";
import type { PackageStatusLoaderData } from "./packageStatus.ts"
import { Check } from "lucide-react";
import Navbar from "../Components/Navbar.tsx";
import Footer from "../Components/Footer.tsx";

export default function PackageStatus() {
  const { data } = useLoaderData() as PackageStatusLoaderData;

  return (
    <>
    <Navbar/>
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg rounded-lg bg-white p-8 shadow-xl">
        <h1 className="mb-6 text-center text-3xl font-bold">
          Tracking Information
        </h1>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-700">Status:</span>
            <span
              className={`rounded-full px-3 py-1 text-white ${data.status === "delivered" ? "bg-green-500" : "bg-blue-500"}`}>
                {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-700">
              Estimated Delivery:
            </span>
            <span className="text-gray-600">
              {new Date(data.dropOffDate).toLocaleDateString()}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-700">
              Delivery Address:
            </span>
            <span className="text-gray-600">{data.dropOffAddress}</span>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="mb-4 text-center text-xl font-semibold">
            Tracking Progress
          </h2>
          <div className="space-y-2">
            {/* Example tracking steps */}
            <div className="flex items-center">
              <div className={`flex h-10 w-10 items-center justify-center rounded-full text-white ${data.pickUpAddress ? "bg-green-500" : "bg-blue-500"}`}>
                1
              </div>
              <div className="ml-4 text-gray-700">
                Package received at origin facility
              </div>
              {data.pickUpAddress ? <Check className="ml-2"  /> : ""}
            </div>
            <div className="flex items-center">
              <div className={`flex h-10 w-10 items-center justify-center rounded-full text-white ${data.pickUpDate ? "bg-green-500" : "bg-blue-500"}`}>
                2
              </div>
              <div className="ml-4 text-gray-700">Package in transit</div>
              {data.pickUpDate ? <Check className="ml-2"  /> : ""}
            </div>
            <div className="flex items-center">
              <div className={`flex h-10 w-10 items-center justify-center rounded-full text-white ${data.status === "delivered" ? "bg-green-500" : "bg-blue-500"}`}>
                3
              </div>
              <div className="ml-4 text-gray-700">Package delivered</div>
                {data.status === "delivered" ? <Check className="ml-2"  /> : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
