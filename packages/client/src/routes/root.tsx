import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import MainContent from "../Components/MainContent";
import Footer from "../Components/Footer";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div style={{ overflowY: "auto", height: "170vh", marginTop: "4rem" }}>
        <MainContent />
        <Outlet />
      </div>
        <Footer />
    </div>
  );
};

export default App;
