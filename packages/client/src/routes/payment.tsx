import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import PaymentForm from "../Components/Payment/PaymentForm";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div style={{ overflowY: "auto", marginTop: "4rem" }}>
        <PaymentForm />
        <Outlet />
      </div>
        <Footer />
    </div>
  );
};

export default App;
