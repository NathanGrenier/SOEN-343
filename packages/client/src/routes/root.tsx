import React from "react";
import { Outlet } from "react-router-dom";
import LiveChatPopUp from "../Components/LiveChatPopUp";
import Navbar from "../Components/Navbar";
import MainContent from "../Components/MainContent";
import Footer from "../Components/Footer";

const App: React.FC = () => {

  return (
    <div>
      <Navbar />
      <div style={{ overflowY: "auto", height: "170vh", marginTop: "4rem" }}>
        <MainContent />
        <LiveChatPopUp />
        <Outlet />
      </div>
        <Footer />
    </div>
  );
};

export default App;
