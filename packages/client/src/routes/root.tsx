import { Outlet } from "react-router-dom";
import LiveChatPopUp from "../Components/LiveChatPopUp";
import Navbar from "../Components/Navbar";
import MainContent from "../Components/MainContent";
import Footer from "../Components/Footer";

export default function Root() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Test", path: "/test" },
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
    <div>
      <Navbar navItems={navItems} logo="assets/images/logo.png" />
      <div style={{ overflowY: "auto", height: "50vh", marginTop: "4rem" }}>
        <MainContent />
        <LiveChatPopUp />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
