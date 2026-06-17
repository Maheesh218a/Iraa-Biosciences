import "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";  
import ResearchSolutions from "../components/ResearchSolutions";
import Partners from "../components/Partners";
import Statistics from "../components/Statistics";
import ResearchMonth from "../components/ResearchMonth";
import InnovationHub from "../components/InnovationHub";
import Dashboard from "../components/Dashboard";
import Articles from "../components/Articles";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <ResearchSolutions />
        <Partners />
        <Statistics />
        <ResearchMonth />
        <InnovationHub />
        <Dashboard />
        <Articles />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}
