import React from 'react';
import { motion } from 'framer-motion';

const InnovationHub = () => {
  const stats = [
    { value: "70", suffix: "+", label: "Industry Partners" },
    { value: "100", suffix: "%", label: "Personalized" },
    { value: "98", suffix: "+%", label: "Report Accuracy Rate" },
    { value: "75", suffix: "+", label: "IRC & Associates" }
  ];

  return (
    <section className="w-full bg-[#f8f9fa] py-16 lg:py-24 font-sans">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h2 className="text-[32px] md:text-[38px] font-light text-[#364f6b] tracking-wide mb-6">
              Innovation Hub
            </h2>
            
            <p className="text-[14px] text-[#364f6b]/80 font-light leading-[1.8] mb-6 max-w-[500px]">
              A collaborative space where visionary researchers and experienced scientists unite to nurture novel ideas, accelerate innovation and create solutions that shape the future.
            </p>
            
            <a href="#" className="text-[#364f6b] text-[15px] hover:text-blue-700 transition-colors inline-block mb-8">
              Learn More ↗
            </a>
            
            <div className="flex flex-wrap items-center gap-4 mb-16 lg:mb-24">
              <button className="bg-[#364f6b] hover:bg-[#253950] text-white text-[14px] font-light px-8 py-2.5 transition-colors flex items-center gap-2">
                Researcher <span className="text-[12px] font-medium">&gt;</span>
              </button>
              <button className="bg-[#364f6b] hover:bg-[#253950] text-white text-[14px] font-light px-8 py-2.5 transition-colors flex items-center gap-2">
                Mentor <span className="text-[12px] font-medium">&gt;</span>
              </button>
            </div>
            
            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex items-baseline text-[#364f6b] mb-1">
                    <span className="text-[42px] sm:text-[48px] font-light leading-none">
                      {stat.value}
                    </span>
                    <span className="text-[18px] font-light ml-1">
                      {stat.suffix}
                    </span>
                  </div>
                  <span className="text-[12px] text-gray-400 font-light tracking-wide">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Global Teams Box */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <div className="relative w-full h-[400px] sm:h-[480px] bg-gray-200 overflow-hidden flex shadow-sm">
              
              {/* Background Image */}
              <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop" 
                alt="Global Researcher" 
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              
              {/* Dark Blue Overlay Block */}
              <div className="relative w-full sm:w-[50%] lg:w-[55%] bg-[#364f6b]/95 backdrop-blur-sm p-8 lg:p-10 flex flex-col justify-center">
                
                <h3 className="text-[26px] font-light text-white tracking-wide mb-2">
                  Global Teams
                </h3>
                <p className="text-[11px] text-gray-300 font-light tracking-wide mb-8">
                  The First-of-Its-Kind Research Service
                </p>
                
                <p className="text-[15px] text-gray-200 font-light leading-[1.8] mb-10 max-w-[280px]">
                  Global Research Execution Partner for Universities, Scientists, Healthcare Orgs. and Life Science Industries.
                </p>
                
                <div className="flex flex-col gap-3 text-[13px] text-white font-light mt-auto">
                  <a href="#" onClick={(e) => { e.preventDefault(); alert("Partner request started"); }} className="hover:text-blue-200 transition-colors w-fit">
                    Partner with Iraa ↗
                  </a>
                  <div className="flex flex-wrap items-center gap-4">
                    <a href="#" onClick={(e) => { e.preventDefault(); alert("Try IRC action triggered"); }} className="hover:text-blue-200 transition-colors">
                      Try - IRC ↗
                    </a>
                    <a href="#" onClick={(e) => { e.preventDefault(); alert("Associate action triggered"); }} className="hover:text-blue-200 transition-colors">
                      Associate ↗
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default InnovationHub;
