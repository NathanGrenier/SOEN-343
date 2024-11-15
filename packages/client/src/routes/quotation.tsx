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

  const [selectedShippingMethod, setSelectedShippingMethod] = useState("");

  const calculateShippingCost = () => {
    const strategy = destination === "inside" ? insideCanadaStrategy : outsideCanadaStrategy;
    const calculator = new ShippingCostCalculator(strategy);
    // Find the selected shipping method and get its fee
    const selectedMethod = shippingMethods.find((method) => method.getName() === selectedShippingMethod);
    const shippingFee = selectedMethod ? selectedMethod.getFee() : shippingMethods[0].getFee();
    setCost(calculator.calculate(weight, isExpress, shippingFee));
  };

  const shippingMethods = getShippingMethods();

  return (
    <>
    <Navbar />
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
          <span><strong>Destination:</strong> Ship within Canada for free 0.50$, or send it internationally for only 5$!</span>
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
          onClick={calculateShippingCost}
          className="w-full p-3 bg-custom-blueishGray font-bold text-white rounded hover:bg-custom-mainGreen"
        >
          Calculate Cost
        </button>

        {cost !== null && (
          <div className="mt-4 p-3 bg-green-100 text-green-800 font-semibold rounded">
            Estimated Shipping Cost: ${cost.toFixed(2)}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Quotation;
