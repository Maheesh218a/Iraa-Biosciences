import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Articles from "../components/Articles";
import Statistics from "../components/Statistics";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Articles />
      <Statistics />
      <Footer />
    </div>
  );
}
