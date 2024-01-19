import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Tech from "../components/Tech";
import Pengalaman from "../components/Pengalaman";

function LandingPage() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Pengalaman />
      <Contact />
      <Footer />
    </div>
  );
}

export default LandingPage;
