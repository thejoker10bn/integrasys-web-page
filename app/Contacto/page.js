import React from "react";
import Navbar from "../components/NavBar";
import Contacto2 from "./Contacto2";

import Footer from "../components/Footer";
import EmailSection from "../components/EmailSection";

const Contacto = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className="container mt-24 px-2 py-4">
        <Contacto2 />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
};

export default Contacto;
