import React from 'react';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Articles = () => {
  const articles = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
      domain: "[Domain Name]",
      title: "The Role of Biotechnology in Agriculture",
      date: "14/04/2026",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
      domain: "[Domain Name]",
      title: "How Health Technology is emerging in India",
      date: "14/04/2026",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop", 
      domain: "[Domain Name]",
      title: "Effective laboratory techniques for blood glucose",
      date: "14/04/2026",
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-[800px] mx-auto lg:mx-0"
    >
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-[28px] md:text-[34px] font-light text-gray-700 tracking-wide mb-3">
          Learn. Explore. Innovate.
        </h2>
        <p className="text-[16px] text-gray-400 font-light">
          Insights for Modern Research
        </p>
      </div>

      {/* Articles List */}
      <div className="flex flex-col gap-10">
        {articles.map((article) => (
          <motion.div 
            key={article.id}
            onClick={() => alert("Opening research article")}
            whileHover={{ y: -3 }}
            className="flex flex-col sm:flex-row gap-6 group cursor-pointer"
          >
            {/* Left Side: Article Image */}
            <div className="w-full sm:w-[240px] h-[180px] sm:h-[135px] shrink-0 overflow-hidden bg-gray-100 rounded-[2px] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Right Side: Article Content */}
            <div className="flex flex-col flex-1 py-1 pr-4">
              <span className="text-gray-400 text-[13px] font-light mb-1">
                {article.domain}
              </span>
              
              <h3 className="text-gray-700 text-[16px] font-normal leading-[1.4] mb-3 group-hover:text-[#5a8bc3] transition-colors max-w-[400px]">
                {article.title}
              </h3>
              
              {/* Bottom Row: Date & Link */}
              <div className="mt-auto flex justify-between items-center w-full max-w-[400px]">
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-[18px] h-[18px] text-[#5a8bc3]" strokeWidth={2} />
                  <span className="text-[13px] font-light">{article.date}</span>
                </div>
                
                <span className="text-[#5a8bc3] text-[13px] font-light group-hover:text-blue-700 transition-colors">
                  Read More &gt;
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </motion.div>
  );
};

export default Articles;
