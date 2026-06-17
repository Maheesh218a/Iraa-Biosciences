import { motion } from 'framer-motion';

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

  return (
    <section className="w-full bg-white relative font-sans">
      {/* Promo Banner (Matches exact styling of target photo) */}
      <div className="w-full bg-white pt-4 pb-2 hidden md:block">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex justify-center items-center gap-12">
          <p className="text-gray-500 text-[15px] font-light">
            Hurry - <span className="text-[#5a8bc3] font-medium">20% OFF</span> on Everything!
          </p>
          
          <div className="flex items-center gap-8">
            <div className="flex gap-5">
              {[ {v: '12', l: 'DAYS'}, {v: '23', l: 'HRS'}, {v: '45', l: 'MINS'}, {v: '20', l: 'SECS'} ].map((time, i) => (
                <div key={i} className="flex flex-col items-center justify-center">
                  <span className="text-[#5a8bc3] font-light text-[18px] leading-none">{time.v}</span>
                  <span className="text-gray-400 text-[9px] uppercase tracking-widest mt-1.5">{time.l}</span>
                </div>
              ))}
            </div>
            <button className="bg-[#5a8bc3] hover:bg-blue-600 text-white px-6 py-2 text-[14px] font-medium rounded transition-colors ml-2">
              Quick Enquiry
            </button>
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-16 pb-32 relative">
        <motion.div 
          className="max-w-[900px] mx-auto lg:mx-0 lg:ml-8 xl:ml-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Small Heading */}
          <motion.div variants={itemVariants} className="text-[17px] mb-4">
            <span className="text-gray-400 font-light">Built for </span>
            <span className="text-gray-700 font-normal tracking-wide">Innovation</span>
          </motion.div>
          
          {/* Main Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-[48px] sm:text-[60px] lg:text-[72px] leading-[1.15] text-[#5a8bc3] font-light mb-8 tracking-tight"
          >
            India's Integrated Research<br className="hidden md:block" /> Platform
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-[19px] md:text-[21px] text-gray-500 font-light leading-[1.7] max-w-[700px] mb-12"
          >
            Imagine the future of healthcare, where breakthroughs in bioscience and<br className="hidden md:block" /> technology come together to{' '}
            <span className="bg-[#5a8bc3] text-white px-4 py-[6px] rounded-md font-medium shadow-[0_4px_14px_rgba(90,139,195,0.4)] inline-block mx-1 transform -translate-y-0.5">
              redefine
            </span>
            {' '}what's possible.
          </motion.p>
          
          {/* Category Cards */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-5"
          >
            {['Products', 'Laboratory', 'Research', 'Technology'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
                className="px-8 py-[18px] bg-[#f4f7fa] text-[#5a8bc3] text-[16px] font-light rounded-sm transition-all hover:bg-[#e9eff5] min-w-[140px]"
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Sticky Right Button */}
      <div className="hidden xl:block fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
        <div 
          className="bg-[#5a8bc3] text-white px-3 py-8 rounded-l-md shadow-lg cursor-pointer hover:bg-blue-600 transition-colors flex items-center justify-center"
        >
          <span 
            className="text-[15px] font-medium tracking-wide whitespace-nowrap" 
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Create an Account
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
