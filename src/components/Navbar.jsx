import { Search, User } from 'lucide-react';

const Navbar = () => {
  const bottomLinks = [
    'Explore',
    'Partners',
    'Resources',
    'Events',
    'Institutions',
    'Bulk Order',
    'Status Tracker',
    'Careers',
  ];

  return (
    <header className="w-full bg-white">
      {/* Top Tier */}
      <div className="w-full border-b border-gray-100">
        <div className="px-6 lg:px-12 w-full max-w-[1600px] mx-auto">
          <div className="flex justify-between items-center h-[90px]">
            
            {/* Logo Area (Left Column) */}
            <div className="flex items-center gap-3 w-[300px] xl:w-[350px]">
              <svg width="26" height="42" viewBox="0 0 100 100" className="mt-1 shrink-0">
                <path d="M 0 40 A 40 40 0 0 1 40 0 L 100 0 L 100 100 L 0 100 Z" fill="#5a8bc3"/>
              </svg>
              <div className="flex flex-col leading-none ml-1">
                <span className="text-[28px] font-semibold text-gray-800 tracking-wide">Iraa</span>
                <span className="text-[20px] font-light text-gray-400 tracking-[0.18em] mt-1">Biosciences</span>
              </div>
            </div>

            {/* Search Bar (Center Column) */}
            <div className="flex-1 flex justify-center px-4">
              <div className="flex items-center border border-gray-300 rounded overflow-hidden h-[42px] w-full max-w-[650px] shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
                <button className="px-5 py-2 text-[#5a8bc3] bg-white border-r border-gray-200 text-[15px] font-medium hover:bg-gray-50 h-full whitespace-nowrap">
                  Search All
                </button>
                <input 
                  type="text" 
                  placeholder="Search products, resources, etc..." 
                  className="px-5 py-2 flex-1 outline-none text-[15px] text-gray-600 placeholder-gray-400 h-full font-light bg-transparent"
                />
                <button className="px-4 py-2 text-[#5a8bc3] bg-white hover:bg-gray-50 h-full">
                  <Search className="w-[18px] h-[18px]" strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* Right Side Actions (Right Column) */}
            <div className="flex items-center justify-end gap-3 w-[300px] xl:w-[350px]">
              <button className="bg-[#444444] hover:bg-gray-800 text-white px-5 py-2 rounded text-[15px] font-medium transition-colors h-[42px]">
                Associates
              </button>
              <button className="bg-[#5a8bc3] hover:bg-blue-600 text-white px-5 py-2 rounded text-[15px] font-medium transition-colors h-[42px]">
                Enterprise
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 w-[42px] h-[42px] flex items-center justify-center rounded-full transition-colors ml-1">
                <User className="w-[20px] h-[20px] text-gray-600" />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Tier */}
      <div className="w-full border-b border-gray-100 bg-white hidden lg:block">
        <div className="px-6 lg:px-12 w-full max-w-[1600px] mx-auto">
          <div className="flex justify-between items-center h-14">
            
            {/* Left Spacer to align links under search */}
            <div className="w-[300px] xl:w-[350px] hidden md:block"></div>
            
            {/* Center Links */}
            <nav className="flex-1 flex items-center gap-7 xl:gap-10 px-4">
              {bottomLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[#6c757d] hover:text-[#5a8bc3] text-[15px] font-medium transition-colors whitespace-nowrap"
                >
                  {link}
                </a>
              ))}
            </nav>

            {/* Right Link */}
            <div className="w-[300px] xl:w-[350px] flex justify-end">
              <a href="#" className="text-[#5a8bc3] hover:text-blue-700 text-[15px] font-semibold transition-colors">
                Iraa Bio Advanced
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
