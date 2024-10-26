import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const App: React.FC = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shipping", path: "/" },
    { name: "Tracking", path: "/" },
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
    <>
      <Navbar navItems={navItems} logo="../public/assets/images/logo.png" />
      <Outlet />
    </>
  );
};

export default App;
