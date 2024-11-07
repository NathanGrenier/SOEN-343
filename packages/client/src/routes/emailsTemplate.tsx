/* eslint-disable @typescript-eslint/no-misused-promises */
import axios from 'axios';

export default function Root() {
  const handleEmailConfirmation = async (id:string) => {
      await axios.post(`/api/send-delivery-confirmation/${id}`);
  };
  const handleEmailShipped = async (id:string) => {
      await axios.post(`/api/send-delivery-shipped/${id}`);
  };
  const handleEmailPayment = async (id:string) => {
    await axios.post(`/api/send-delivery-payment/${id}`);
  };
  const handleTestDB = async () => {
    await axios.get(`/api/testdb`);
  };
  const handleTestPackage = async (id:string) => {
    await axios.get(`/api/packages/${id}`);
  };


  return (
    <>
      <div>
        <button onClick={async () => { await handleEmailConfirmation("18"); }}>Send Email Confirmation</button>
      </div>
      <div>
        <button onClick={() => handleEmailShipped("18")}>Send Email Shipped</button>
      </div>
      <div>
        <button onClick={() => handleEmailPayment("18")}>Send Email Payment</button>
      </div>
      <div>
        <button onClick={() => handleTestDB()}>Test db</button>
      </div>
      <div>
        <button onClick={() => handleTestPackage("18")}>Get Test Package</button>
      </div>
    </>
  );
}
