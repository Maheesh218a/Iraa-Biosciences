import React from 'react';
import { motion } from 'framer-motion';

const ResearchMonth = () => {
  return (
    <section className="w-full bg-white font-sans py-12 lg:py-20">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[800px]" // Constraining width assuming it will be put into a grid later
        >
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-[28px] md:text-[34px] font-light text-gray-700 tracking-wide mb-3">
              Research of the Month | May 2026
            </h2>
            <div className="flex flex-col gap-1">
              <span className="text-[16px] text-gray-500 font-light">
                Clinical and Medical Research
              </span>
              <span className="text-[15px] text-[#5a8bc3] font-light">
                Country: India
              </span>
            </div>
          </div>

          {/* Two Column Content Area */}
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 mb-8">
            
            {/* Left Column (Image & Author) */}
            <div className="flex flex-col">
              <div className="w-full h-[180px] sm:h-[220px] md:h-[240px] bg-gray-100 mb-4 overflow-hidden rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
                  alt="Sarah Mathew - Researcher" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-[#5a8bc3] text-[18px] font-medium mb-1">
                Sarah Mathew
              </h3>
              <p className="text-gray-400 text-[13px] font-light flex gap-2">
                <span>Designation</span>
                <span>-</span>
                <span>Institution Name</span>
              </p>
            </div>

            {/* Right Column (Research Details) */}
            <div className="flex flex-col pt-2">
              <h4 className="text-gray-500 text-[16px] font-medium mb-3">
                Original Research
              </h4>
              <p className="text-gray-600 text-[14px] leading-[1.8] font-light mb-6 text-justify">
                First-line durvalumab in combination with trastuzumab deruxtecan in women with locally advanced unresectable or metastatic, hormone-receptor-negative, HER2-low breast cancer: multicenter, open-label, phase 1b/2 BEGONIA platform trial.
              </p>
              <a href="#" className="text-[#5a8bc3] text-[15px] hover:text-blue-700 transition-colors font-medium inline-flex items-center gap-1 mt-auto pb-4">
                Mentor : Kelling Mishtah <span className="text-[12px]">↗</span>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-200 mb-6"></div>

          {/* Summary Section */}
          <div>
            <h4 className="text-gray-700 text-[16px] font-medium mb-3">
              Summary
            </h4>
            <p className="text-gray-400 text-[13px] leading-[1.8] font-light text-justify">
              Cancer research article titles currently trend toward highly specific, mechanism-focused, and technology-driven phrases. The most popular trending titles highlight machine learning in diagnostics, immune checkpoint therapy resistance, and metabolic reprogramming in the tumor microenvironment and DeepFAN, a transformer-based model for human-artificial intelligence collaborative assessment of incidental pulmonary nodules in CT scans.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default ResearchMonth;
