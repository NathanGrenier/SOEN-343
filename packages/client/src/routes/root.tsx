import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import MainContent from "../Components/MainContent";
import Footer from "../Components/Footer";

const App: React.FC = () => {
  const navItems = [
    { name: "Home", path: "/test" },
    { name: "Shipping", path: "/" },
    { name: "Tracking", path: "/" },
    { name: "Request Delivery", path: "/delivery_request" },
    { name: "Services", path: "/" },
    { name: "Support", path: "/" },
    { name: "About", path: "/" },

    //Drop down use example
    // {
    //   name: "Shipping",
    //   path: "/",
    //   dropdownItems: [
    //     { name: "New Reservation", path: "/" },
    //     { name: "View", path: "/" },
    //     { name: "Modify", path: "/" },
    //     { name: "Cancel", path: "/" },
    //   ],
    // },
  ];

  return (
    <div>
      <Navbar navItems={navItems} logo="../public/assets/images/logo.png" />
      <div style={{ overflowY: "auto", height: "50vh", marginTop: "4rem" }}>
        <MainContent />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
