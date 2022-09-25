import React from "react";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import SpecialMeals from "./components/SpecialMeals";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <SpecialMeals />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
