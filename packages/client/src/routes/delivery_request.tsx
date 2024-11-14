import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ShippingCostCalculator } from "../utils/ShippingCostCalculator";
import { insideCanadaStrategy } from "../utils/insideCanadaStrategy";
import { outsideCanadaStrategy } from "../utils/outsideCanadaStrategy";
import { getShippingMethods } from "../utils/ShippingMethods";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const Delivery: React.FC = () => {
  const navigate = useNavigate();;
  const [destination, setDestination] = useState("inside");
  const [weight, setWeight] = useState(0);
  const [isExpress, setIsExpress] = useState(false);
  const [cost, setCost] = useState<number | null>(null);
  const [address, setAddress] = useState("");
  const [departureAddress, setDepartureAddress] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedShippingMethod, setSelectedShippingMethod] = useState(getShippingMethods()[0].getName());
  const [error, setError] = useState<string | null>(null); // Error state

  const calculateShippingCost = async () => {
    // Check if any required field is empty
    if (!firstName || !lastName || !email || !departureAddress || !address || !selectedShippingMethod || weight <= 0) {
      setError("Please fill in all the information.");
      return;
    }

    setError(null); // Clear error if all fields are filled

    // Calculate shipping cost
    const strategy = destination === "inside" ? insideCanadaStrategy : outsideCanadaStrategy;
    const calculator = new ShippingCostCalculator(strategy);
    const selectedMethod = shippingMethods.find((method) => method.getName() === selectedShippingMethod);
    const shippingFee = selectedMethod ? selectedMethod.getFee() : shippingMethods[0].getFee();
    const calculatedCost = calculator.calculate(weight, isExpress, shippingFee);
    setCost(calculatedCost);
    const currentDate = new Date(Date.now()).toISOString().split("T")[0];
    const shippingDate = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];
    console.log(currentDate);
    console.log(shippingDate);
    // Prepare package data
    const packageData = {
      dropOffName: firstName,
      dropOffLastName: lastName,
      dropOffAddress: address,
      dropOffDate: shippingDate,
      pickUpName: "name", 
      pickUpLastName: "sirname", 
      pickUpAddress: departureAddress,
      pickUpDate: currentDate,
      amount: calculatedCost.toFixed(2),
      email: email,
      status: "pending"
    };

    // Send data to the backend
    try {
      const response = await axios.post<{ id: number }>('/api/packages', { packages: packageData });
      const { id } = response.data; // Retrieve the ID from the response
      console.log('Package created:', response.data);
      console.log(id);
      //REDIRECT TO PAYMENT PAGE PASS calculatedCost AS PARAMETER
      navigate('/payment', {state: {calculatedCost: calculatedCost.toFixed(2), id: id}});
    } catch (error) {
      console.error('Error creating package:', error);
      setError("Failed to create package in the database.");
    }
  };

  const shippingMethods = getShippingMethods();

  return (
    <div>
    <Navbar />

    <div className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Request Delivery</h2>

      {/* Input fields go here, unchanged */}
      <div className="mb-4">
        <label className="block text-lg font-semibold">First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full p-2 mt-2 border rounded"
          placeholder="Enter first name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold">Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full p-2 mt-2 border rounded"
          placeholder="Enter last name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold">Email Address:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mt-2 border rounded"
          placeholder="Enter email address"
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold">Departure Address:</label>
        <input
          type="text"
          value={departureAddress}
          onChange={(e) => setDepartureAddress(e.target.value)}
          className="w-full p-2 mt-2 border rounded"
          placeholder="Enter departure address"
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold">Destination Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 mt-2 border rounded"
          placeholder="Enter delivery address"
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold">Destination:</label>
        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full p-2 mt-2 border rounded"
        >
          <option value="inside">Inside Canada</option>
          <option value="outside">Outside Canada</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold">Shipping Method:</label>
        <select
          value={selectedShippingMethod}
          onChange={(e) => setSelectedShippingMethod(e.target.value)}
          className="w-full p-2 mt-2 border rounded"
        >
          {shippingMethods.map((method, index) => (
            <option key={index} value={method.getName()}>
              {method.getName()}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold">Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(parseFloat(e.target.value))}
          className="w-full p-2 mt-2 border rounded"
          min="0"
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold">Express Shipping:</label>
        <input
          type="checkbox"
          checked={isExpress}
          onChange={(e) => setIsExpress(e.target.checked)}
          className="mt-2"
        />
      </div>

      <button
        onClick={() => {
          calculateShippingCost().catch((error) => console.error(error)); // Catch any errors to handle promise rejection
        }}
        className="w-full p-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
      >
        Request
      </button>

      {error && (
        <div className="mt-4 text-red-600 font-semibold">
          {error}
        </div>
      )}

      {cost !== null && (
        <div className="mt-4 p-3 bg-green-100 text-green-800 font-semibold rounded">
          Estimated Shipping Cost: ${cost.toFixed(2)}
        </div>
      )}
      
    </div>
    <Footer />
    </div>
  );
};

export default Delivery;
