import React from "react";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProgrammesSection from "./components/ProgrammesSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <HeroSection />
        <ProgrammesSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
