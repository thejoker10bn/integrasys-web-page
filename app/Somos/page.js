import React from "react";
import Navbar from "../components/NavBar";
import Content from "../Somos/Content";
import EmailSection from "../components/EmailSection";
import Footer from "../components/Footer";

const Somos = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className="container mt-24 px-2 py-4">
        <Content />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
};

export default Somos;
