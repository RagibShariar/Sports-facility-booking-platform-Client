import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { useTheme } from "@/hooks/useTheme";
import React from "react";
import { Outlet } from "react-router-dom";
import "../index.css";

const MainLayout: React.FC = () => {
  useTheme();

  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
