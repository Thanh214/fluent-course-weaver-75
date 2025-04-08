
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FallingLeaves from "../effects/FallingLeaves";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <FallingLeaves />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
