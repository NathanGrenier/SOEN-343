import { useState } from 'react';

export default function Root() {
  const [usageDetails, setUsageDetails] = useState('');
  const [deliveryPersonComments, setDeliveryPersonComments] = useState('');
  const [otherDetails, setOtherDetails] = useState('');

  return (
    <form className="flex flex-col items-center max-w-2xl mx-auto">
      
      <div className="w-full mb-6">
        <label className="block text-custom-blueishGray text-xl mb-2" htmlFor="usageDetails">
          Usage Details:
        </label>
        <textarea
          rows={8}
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-custom-mainGreen"
          value={usageDetails}
          onChange={(e) => setUsageDetails(e.target.value)}
          placeholder="Describe how you used the service"
          required
        />
      </div>

      <div className="w-full mb-6">
        <label className="block text-custom-blueishGray text-xl mb-2" htmlFor="deliveryPersonComments">
          Comments on Delivery Person:
        </label>
        <textarea
          rows={8}
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-custom-mainGreen"
          value={deliveryPersonComments}
          onChange={(e) => setDeliveryPersonComments(e.target.value)}
          placeholder="Comments about the delivery person"
          required
        />
      </div>

      <div className="w-full mb-6">
        <label className="block text-custom-blueishGray text-xl mb-2" htmlFor="otherDetails">
          Other Details:
        </label>
        <textarea
          rows={8}
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-custom-mainGreen"
          value={otherDetails}
          onChange={(e) => setOtherDetails(e.target.value)}
          placeholder="Additional details about the service (optional)"
        />
      </div>
    </form>
  );
};
