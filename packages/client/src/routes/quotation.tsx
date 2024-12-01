import React, { useState } from "react";
import { ShippingCostCalculator } from "../utils/ShippingCostCalculator";
import { insideCanadaStrategy } from "../utils/insideCanadaStrategy";
import { outsideCanadaStrategy } from "../utils/outsideCanadaStrategy";
import { getShippingMethods } from "../utils/ShippingMethods";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const Quotation: React.FC = () => {
  const [destination, setDestination] = useState("inside");
  const [weight, setWeight] = useState(0);
  const [isExpress, setIsExpress] = useState(false);
  const [cost, setCost] = useState<number | null>(null);
  const [address, setAddress] = useState("");
  const [departureAddress, setDepartureAddress] = useState("");
  const [selectedShippingMethod, setSelectedShippingMethod] = useState(getShippingMethods()[0].getName());
  const [error, setError] = useState<string | null>(null); // Error state
  const shippingMethods = getShippingMethods();
  
  const calculateShippingCost = () => {
    try {
      // Reset cost to null to hide the display
      setCost(null);
  
      // Validation for required fields
      if (!departureAddress || !address || !selectedShippingMethod || weight <= 0) {
        setError("Please fill in all the information.");
        return;
      }
  
      setError(null); // Clear error if all fields are valid
  
      // Calculate shipping cost
      const strategy = destination === "inside" ? insideCanadaStrategy : outsideCanadaStrategy;
      const calculator = new ShippingCostCalculator(strategy);
      const selectedMethod = shippingMethods.find((method) => method.getName() === selectedShippingMethod);
      const shippingFee = selectedMethod ? selectedMethod.getFee() : shippingMethods[0].getFee();
      const calculatedCost = calculator.calculate(weight, isExpress, shippingFee);
      setCost(calculatedCost); // Set the calculated cost
  
      // Debugging: Log current and shipping dates
      const currentDate = new Date(Date.now()).toISOString().split("T")[0];
      const shippingDate = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];
      console.log(currentDate);
      console.log(shippingDate);
    } catch (error) {
      console.error("An error occurred while calculating shipping cost:", error);
    }
  };
  


  return (
    <div className="min-h-screen">
    <Navbar/>
      <header
        className="relative w-full h-64 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://marlink.com/_Resources/Persistent/9/1/1/1/9111d28f94013d19819e6e4bafb5a7f75dbfefbf/Shipping%20hero-7112x3724-1200x628.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex items-center justify-start h-full text-white pl-40">
          <h1 className="text-3xl font-bold">Our Shipping Rates</h1>
        </div>
      </header>

      <div className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Shipping Quotation</h2>

    <div className="mb-6 p-4 border border-gray-200 rounded bg-green-50">
      <h3 className="text-xl font-semibold mb-2">Factors Influencing Shipping Cost</h3>
      <div className="flex flex-col space-y-3 text-sm">
        <div className="flex items-center space-x-2">
          <span role="img" aria-label="destination" className="text-lg">
            🌍
          </span>
          <span><strong>Destination:</strong> Ship within Canada for 0.50$, or deliver you package to and from international destinations for only 5$!</span>
        </div>
        <div className="flex items-center space-x-2">
          <span role="img" aria-label="weight" className="text-lg">
            ⚖️
          </span>
          <span><strong>Weight:</strong> Larger packages may need a little extra to cover the journey, but we’ve got you covered at $5/kg.</span>
        </div>
        <div className="flex items-center space-x-2">
          <span role="img" aria-label="express" className="text-lg">
            🚀
          </span>
          <span><strong>Express Shipping:</strong> Add an extra $15 for express delivery to ensure your package arrives on time!</span>
        </div>
        <div className="flex flex-col space-y-2">
      <h4 className="text-medium font-semibold">Different shipping methods add fixed fees:</h4>
      <div className="flex items-start space-x-2">
        <span role="img" aria-label="rail" className="text-lg">
          🚂
        </span>
        <span>
          <strong>Rail Shipping:</strong> Affordable and reliable, available at just $10.
        </span>
      </div>
      <div className="flex items-start space-x-2">
        <span role="img" aria-label="sea" className="text-lg">
          🌊
        </span>
        <span>
          <strong>Sea Shipping:</strong> Perfect for international bulk deliveries, costing $15.
        </span>
      </div>
      <div className="flex items-start space-x-2">
        <span role="img" aria-label="air" className="text-lg">
          ✈️
        </span>
        <span>
          <strong>Air Shipping:</strong> Fast and efficient, priced at $20.
        </span>
      </div>
      <div className="flex items-start space-x-2">
        <span role="img" aria-label="door-to-door" className="text-lg">
          🚪
        </span>
        <span>
          <strong>Door-to-Door Shipping:</strong> A premium service to your doorstep for $60.
        </span>
      </div>
    </div>
      </div>
    </div>


      {/* Form for Cost Calculation */}
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
        <label className="block text-lg font-semibold">Destination Country:</label>
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
          <label className="block text-lg font-semibold">Weight (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
            className="w-full p-2 mt-2 border rounded"
            min="0"
            placeholder="Weight"
          />
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
            calculateShippingCost();
          }}
          className="w-full p-3 bg-custom-blueishGray font-bold text-white rounded hover:bg-custom-mainGreen"
        >
          Calculate Cost
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

export default Quotation;
