import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sujith Varma",
      role: "Clinical Pharmacologist",
      quote: "Iraa Biosciences has significantly improved the reliability of our diagnostic workflows. Their sample analysis expertise helped streamline complex testing processes, and their scientific team is highly responsive.",
      color: "bg-[#42658d]" // Darker slate blue
    },
    {
      name: "Dr. Sujith Varma",
      role: "Clinical Pharmacologist",
      quote: "Iraa Biosciences has significantly improved the reliability of our diagnostic workflows. Their sample analysis expertise helped streamline complex testing processes, and their scientific team is highly responsive.",
      color: "bg-[#5480c2]" // Lighter cornflower blue
    },
    {
      name: "Dr. Sujith Varma",
      role: "Clinical Pharmacologist",
      quote: "Iraa Biosciences has significantly improved the reliability of our diagnostic workflows. Their sample analysis expertise helped streamline complex testing processes, and their scientific team is highly responsive.",
      color: "bg-[#42658d]" // Darker slate blue
    }
  ];

  // Custom SVG for the large classic quotation marks seen in the design
  const QuoteIcon = () => (
    <svg width="45" height="35" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
      <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
    </svg>
  );

  return (
    <section className="w-full font-sans overflow-hidden">
      
      {/* Dark Blue Header Section (Extends from the Dashboard above) */}
      <div className="bg-[#364f6b] w-full pt-16 pb-40 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[32px] md:text-[38px] text-white font-light tracking-wide">
              What People Say?
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Testimonial Cards Section (Overlaps the boundary between blue and white) */}
      <div className="bg-white w-full pb-24 px-6 lg:px-12 relative z-10">
        <div className="max-w-[1600px] mx-auto -mt-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {testimonials.map((test, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className={`${test.color} rounded-[2px] p-8 lg:p-10 xl:p-12 shadow-xl cursor-pointer transition-all duration-300 flex flex-col h-full min-h-[300px]`}
              >
                {/* Top Row: Quote Icon on Left, Author Details on Right */}
                <div className="flex justify-between items-start mb-12">
                  <QuoteIcon />
                  <div className="text-right">
                    <h4 className="text-white text-[15px] font-medium tracking-wide mb-1">
                      {test.name}
                    </h4>
                    <p className="text-white/70 text-[12px] font-light">
                      {test.role}
                    </p>
                  </div>
                </div>

                {/* Centered Quote Text */}
                <p className="text-white/80 text-[14px] font-light leading-[1.8] text-center mt-auto px-2 md:px-0 lg:px-6">
                  {test.quote}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Testimonials;
