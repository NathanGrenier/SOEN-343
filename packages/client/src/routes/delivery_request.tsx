import React, { useState } from "react";
import { ShippingCostCalculator } from "../utils/ShippingCostCalculator";
import { insideCanadaStrategy } from "../utils/insideCanadaStrategy";
import { outsideCanadaStrategy } from "../utils/outsideCanadaStrategy";

const Delivery: React.FC = () => {
  const [destination, setDestination] = useState("inside");
  const [weight, setWeight] = useState(0);
  const [isExpress, setIsExpress] = useState(false);
  const [cost, setCost] = useState<number | null>(null);
  const [address, setAddress] = useState("");

  const calculateShippingCost = () => {
    const strategy = destination === "inside" ? insideCanadaStrategy : outsideCanadaStrategy;
    const calculator = new ShippingCostCalculator(strategy);
    setCost(calculator.calculate(weight, isExpress));
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Request Delivery</h2>

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
        <label className="block text-lg font-semibold">Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 mt-2 border rounded"
          placeholder="Enter delivery address"
        />
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
        onClick={calculateShippingCost}
        className="w-full p-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
      >
        Request
      </button>

      {cost !== null && (
        <div className="mt-4 p-3 bg-green-100 text-green-800 font-semibold rounded">
          Estimated Shipping Cost: ${cost.toFixed(2)}
        </div>
      )}
    </div>
  );
};

export default Delivery;
