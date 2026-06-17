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
        
        {/* Research & Articles Side-by-Side Section */}
        <section className="w-full bg-white font-sans py-12 lg:py-20 border-b border-gray-100">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 xl:gap-20">
            <ResearchMonth />
            <Articles />
          </div>
        </section>

        <InnovationHub />
        <Dashboard />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}
