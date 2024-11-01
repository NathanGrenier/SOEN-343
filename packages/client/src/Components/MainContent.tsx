import React from "react";
import { Link } from "react-router-dom";

// Functional component without props
const MainContent: React.FC = () => {
  return (
    <>
      <div className="relative h-[400px] w-full">
        <img
          src="../public/assets/images/main.jpg"
          alt="Man holding package"
          className="h-[400px] w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col bg-black bg-opacity-30">
          <div className="absolute inset-x-0 top-[30%] flex flex-col items-center justify-center text-center">
            <p className="text-5xl font-bold text-white">SwiftSend</p>
            <p className="text-mainGreen text-xl"> On Time, Every Time</p>
            <p className="text-sm text-white">
              Experience the fastest most reliable delivery service worldwide
            </p>
            <div className="absolute inset-x-0 mt-[170px] flex h-screen items-center justify-center space-x-4">
              <Link to="/test">
                <button className="bg-mainGreen text-gray rounded px-4 py-2">
                  Ship Now
                </button>
              </Link>
              <Link to="/">
                <button className="bg-gray text-mainGreen rounded px-4 py-2">
                  Track Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 top-[50%] mx-auto flex h-[30%] w-[50%] items-start justify-start bg-white shadow-xl">
        <div className="bg-lightGray relative flex h-[100%] w-[30%] items-start justify-start">
          <div className="bg-mainGreen absolute inset-0 mx-auto my-auto flex h-20 w-20 -translate-y-10 transform items-center justify-center rounded-full shadow-lg" />
          <img
            src="../public/assets/images/DeliveryTruck.png"
            alt="delivery truck"
            className="absolute inset-0 mx-auto my-auto h-[50%] w-[55%] object-cover"
          />
        </div>
        <div className="ml-[5%] mt-[2%] flex w-[65%] flex-col justify-center p-4 text-left">
          <p className="font-bold">
            Need Reliable Delivery for Your Everyday Needs?
          </p>
          <br />
          <p>
            Wherever you are, SwiftSend is here to ensure your packages reach
            their destination quickly and securely, every time.
          </p>
          <br />
          <Link to="/">
            <p className="text-mainGreen">Get Started</p>
          </Link>
        </div>
      </div>
    </>
  );
};

// Export the component
export default MainContent;
