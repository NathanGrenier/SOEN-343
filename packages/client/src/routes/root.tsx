import { Outlet } from "react-router-dom";
import LiveChatPopUp from "../components/LiveChatPopUp";
import Navbar from "../components/Navbar";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

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
