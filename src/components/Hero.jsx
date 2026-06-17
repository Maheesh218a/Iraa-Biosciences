import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const cards = [
    { title: 'Scientific Products', label: 'PURCHASE' },
    { title: 'Analytical Testing', label: 'ANALYZE' },
    { title: 'Research & Dev.', label: 'EXECUTE' },
  ];

  return (
    <section className="relative w-full h-[650px] lg:h-[750px] flex items-center overflow-hidden font-sans">
      {/* Background Image & Dark Blue Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1532187863486-abf9db0c20a9?q=80&w=2000&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-[#314a66]/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[#253a52]/60"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1600px] w-full mx-auto px-6 lg:px-12 pt-10">
        <motion.div 
          className="max-w-[950px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Small Heading */}
          <motion.div variants={itemVariants} className="text-[17px] text-gray-300 font-light mb-4">
            Built for Innovation
          </motion.div>
          
          {/* Main Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-[42px] sm:text-[52px] lg:text-[58px] leading-[1.2] text-white font-light mb-6 tracking-tight"
          >
            The Integrated Research Ecosystem for End-to-End<br className="hidden md:block" /> Scientific Outcomes.
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-[17px] md:text-[19px] text-gray-300 font-light leading-[1.6] max-w-[650px] mb-14"
          >
            From study design and laboratory testing to complete research and development with commercialization support.
          </motion.p>
          
          {/* Feature Cards (Glass Effect) */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-5"
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.25)" }}
                className="relative bg-white/15 backdrop-blur-md rounded-md p-6 h-[130px] flex flex-col justify-between cursor-pointer w-full md:w-[280px] transition-colors overflow-hidden border border-white/10"
              >
                <div className="text-[10px] text-white/90 uppercase tracking-[0.15em] text-right font-medium">
                  {card.label}
                </div>
                <div className="flex justify-between items-end mt-4">
                  <h3 className="text-white text-[20px] font-light">
                    {card.title}
                  </h3>
                  <ArrowRight className="text-[#21354b] w-6 h-6" strokeWidth={3} /> 
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
