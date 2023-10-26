import Image from "next/image";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <NavBar />
      <div className="container mt-24 px-2 py-4">
        <HeroSection />
        <AboutSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
