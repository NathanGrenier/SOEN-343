import { Link } from "react-router-dom";

export default function MainContent() {
  return (
    <div>
      <div className="relative h-[400px] w-full">
        <img
          src="../assets/images/main.jpg"
          alt="Man holding package"
          className="h-[400px] w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col bg-black bg-opacity-30">
          <div className="absolute inset-x-0 top-[30%] flex flex-col items-center justify-center text-center">
            <p className="text-5xl font-bold text-white">SwiftSend</p>
            <p className="text-custom-mainGreen text-xl">On Time, Every Time</p>
            <p className="text-sm text-white">
              Experience the fastest most reliable delivery service worldwide
            </p>
            <div className="absolute inset-x-0 mt-[170px] flex items-center justify-center space-x-4">
              <Link to="/quotation">
                <button className="bg-custom-mainGreen text-custom-gray rounded px-4 py-2">
                  Ship Now
                </button>
              </Link>
              <Link to="/trackPackage">
                <button className="bg-custom-gray text-custom-mainGreen rounded px-4 py-2">
                  Track Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 top-[50%] mx-auto flex h-[30%] w-[50%] items-start justify-start bg-white shadow-xl">
        <div className="bg-custom-lightGray relative flex h-[100%] w-[30%] items-start justify-start">
          <div className="bg-custom-mainGreen absolute inset-0 mx-auto my-auto flex h-20 w-20 -translate-y-10 transform items-center justify-center rounded-full shadow-lg" />
          <img
            src="../assets/images/DeliveryTruck.png"
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
          <Link to="/request_delivery">
            <button className="bg-custom-mainGreen text-custom-gray rounded px-4 py-2">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      <div className="absolute inset-x-10 mt-32 flex h-[90%] flex-col justify-center">
        <p className="flex justify-center text-4xl">Why Choose Swift</p>
        <div className="ml-20 mt-14 flex justify-center">
          <div className="relative h-[400px] w-full">
            <img
              src="../assets/images/boxes.jpg"
              alt="boxes"
              className="absolute h-auto max-h-[350px] w-auto max-w-[70%] rounded-md object-contain shadow-xl"
            />
          </div>
          <div className="absolute ml-[40%] mt-4 flex flex-col items-center">
            <div className="flex space-x-48">
              <div className="relative flex flex-col items-center">
                <div className="bg-custom-mainGreen relative flex h-20 w-20 items-center justify-center rounded-full shadow-lg" />
                <img
                  src="../assets/images/fast.png"
                  alt="time"
                  className="object-fit absolute left-[20%] top-[35px] h-[50%] w-[100%]"
                />
                <p className="mt-8 text-center">Fast Delivery</p>
              </div>
              <div className="relative flex flex-col items-center">
                <div className="bg-custom-mainGreen relative flex h-20 w-20 items-center justify-center rounded-full shadow-lg" />
                <img
                  src="../assets/images/tracking.png"
                  alt="tracking"
                  className="object-fit absolute left-[55%] top-[35px] h-[50%] w-[48%]"
                />
                <p className="mt-8 text-center">Real Time Tracking</p>
              </div>
            </div>
            <div className="mt-16 flex space-x-40">
              <div className="relative flex flex-col items-center">
                <div className="bg-custom-mainGreen relative flex h-20 w-20 items-center justify-center rounded-full shadow-lg" />
                <img
                  src="../assets/images/earth.png"
                  alt="earth"
                  className="object-fit absolute left-[45%] top-[35px] h-[50%] w-[48%]"
                />
                <p className="mt-8 text-center">Worldwide Shipping</p>
              </div>
              <div className="relative flex flex-col items-center">
                <div className="bg-custom-mainGreen relative flex h-20 w-20 items-center justify-center rounded-full shadow-lg" />
                <img
                  src="../assets/images/service.png"
                  alt="headset"
                  className="object-fit absolute left-[45%] top-[35px] h-[50%] w-[40%]"
                />
                <p className="mt-8 text-center">24/7 Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
