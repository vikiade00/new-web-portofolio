import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import PortofolioPage from "../pages/PortofolioPage";

function RouteManagement() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="portofolio" element={<PortofolioPage />} />
      </Routes>
    </div>
  );
}

export default RouteManagement;
