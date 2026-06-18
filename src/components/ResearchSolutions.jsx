import 'react';
import { Hexagon, CircleDashed, Activity, Zap, Beaker } from 'lucide-react';

const ResearchSolutions = () => {
  // Placeholder logos data combining Lucide icons and tailored typography 
  // to mimic real corporate biotech logos.
  const logos = [
    { 
      name: 'Roche', 
      icon: <CircleDashed className="w-7 h-7 mr-2 text-gray-400" strokeWidth={2.5} />,
      style: 'font-sans font-bold text-[22px]' 
    },
    { 
      name: 'Neuberg DIAGNOSTICS', 
      icon: <Hexagon className="w-7 h-7 mr-2 text-gray-400" strokeWidth={2.5} />,
      style: 'font-sans font-bold text-[18px] leading-tight w-[100px]' 
    },
    { 
      name: 'Abbott', 
      icon: <Activity className="w-7 h-7 mr-2 text-gray-400" strokeWidth={3} />,
      style: 'font-sans font-black text-[24px] tracking-wide' 
    },
    { 
      name: 'ThermoFisher', 
      icon: <Beaker className="w-6 h-6 mr-2 text-gray-400" strokeWidth={2} />,
      style: 'font-sans font-bold text-[20px] tracking-tight',
      subText: 'SCIENTIFIC'
    },
    { 
      name: 'Aster', 
      icon: <Zap className="w-6 h-6 mr-2 text-gray-400" fill="currentColor" />,
      style: 'font-serif font-bold text-[24px]' 
    },
  ];

  // Triplicate the array to create a seamless infinite marquee effect
  const marqueeLogos = [...logos, ...logos, ...logos];

  return (
    <section className="w-full font-sans bg-white">
      
      {/* Top Blue Header Section */}
      <div className="w-full bg-[#364f6b] py-14 px-6 text-center">
        <h2 className="text-[34px] sm:text-[38px] md:text-[44px] font-light text-white tracking-wide mb-3">
          Comprehensive Research Solutions
        </h2>
        <p className="text-[16px] md:text-[18px] text-gray-300 font-light tracking-wide">
          End-to-end support for advanced scientific innovation
        </p>
      </div>

      {/* Partner Logos Marquee Area */}
      <div className="w-full bg-[#fcfcfc] border-b border-gray-100 py-8 overflow-hidden flex relative">
        
        {/* Inline CSS for the infinite marquee animation */}
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-33.3333%); }
            }
            .animate-marquee {
              animation: marquee 35s linear infinite;
              display: flex;
              width: 300%;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}
        </style>
        
        <div className="animate-marquee items-center justify-around">
          {marqueeLogos.map((logo, index) => (
            <div 
              key={index} 
              onClick={() => alert("Partner selected")}
              className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer px-10 grayscale hover:grayscale-0 hover:scale-105 transform"
            >
              {logo.icon}
              <div className="flex flex-col justify-center">
                <span className={`text-gray-600 ${logo.style}`}>
                  {logo.name}
                </span>
                {logo.subText && (
                  <span className="text-[10px] text-gray-500 font-medium tracking-[0.2em] uppercase mt-0.5">
                    {logo.subText}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Gradient fades on the edges to smooth the marquee entry/exit */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#fcfcfc] to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#fcfcfc] to-transparent pointer-events-none"></div>
        
      </div>
    </section>
  );
};

export default ResearchSolutions;
