import React from 'react';
import { motion } from 'framer-motion';

const Statistics = () => {
  const stats = [
    { value: "100", suffix: "+", label: "Industry Partners" },
    { value: "2M", suffix: "+", label: "Research Products" },
    { value: "98", suffix: "+%", label: "Trusted Accuracy" },
    { value: "4K", suffix: "+", label: "Laboratory Analysis" }
  ];

  return (
    <section className="w-full bg-white py-20 lg:py-28 font-sans border-y border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Top Small Description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[16px] md:text-[18px] text-gray-500 font-light tracking-wide">
            Trusted scientific solutions powered by innovation and research.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="flex flex-col items-center text-center cursor-pointer transition-transform duration-300 group"
            >
              {/* Massive Elegant Number with Gradient */}
              <div className="flex items-baseline mb-3">
                <span className="text-[56px] sm:text-[68px] lg:text-[76px] font-light leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#364f6b] to-[#5a8bc3] group-hover:from-[#253950] group-hover:to-[#4a7ab3] transition-colors duration-300">
                  {stat.value}
                </span>
                <span className="text-[24px] sm:text-[28px] font-light ml-1 bg-clip-text text-transparent bg-gradient-to-r from-[#364f6b] to-[#5a8bc3]">
                  {stat.suffix}
                </span>
              </div>
              
              {/* Clean Grey Label */}
              <span className="text-[14px] lg:text-[15px] text-gray-400 font-light tracking-wide">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Statistics;
