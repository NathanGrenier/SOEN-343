import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import RatingStars from "../Components/RatingStars";
import ReviewForm from "../Components/ReviewForm";
import Footer from "../Components/Footer";

export default function Reviews() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();;

  const handleSubmit = () => {
    setShowModal(true);
    setTimeout(() => {
      navigate("/"); 
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-custom-lightGray">
      <Navbar />

      <div className="flex flex-col items-center mt-24 mb-8">
        <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-xl">
          <h2 className="text-5xl font-bold mb-8 text-center">Service Review</h2>
          <ReviewForm />
          <div className="mt-6">
            <RatingStars />
          </div>
          <div className="flex justify-center mt-8">
            <button
              className="px-6 py-2 bg-custom-blueishGray text-white font-semibold rounded-lg hover:bg-custom-mainGreen"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center flex items-center justify-center space-x-4">
            <div className="w-12 h-12 animate-spin flex justify-center items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-loader-circle"
              >
                <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
              </svg>
            </div>
            <p className="text-2xl font-semibold">Thank you for your review!</p>
          </div>
        </div>
      )}

      <Outlet />
      <Footer />
    </div>
  );
}
