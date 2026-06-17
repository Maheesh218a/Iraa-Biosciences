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
    <header className="w-full bg-white font-sans">
      {/* Top Tier */}
      <div className="w-full border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo Area */}
            <div className="flex items-center gap-2">
              <div className="flex flex-col">
                <div className="w-4 h-4 bg-blue-600 rounded-tl-full shrink-0"></div>
                <div className="w-4 h-8 bg-blue-600 shrink-0"></div>
              </div>
              <div className="flex flex-col leading-tight mt-1">
                <span className="text-[22px] text-gray-700 tracking-wide">Iraa</span>
                <span className="text-[22px] text-gray-400 font-light tracking-wide">Biosciences</span>
              </div>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center border border-gray-300 rounded overflow-hidden">
              <button className="px-4 py-2 text-blue-500 bg-white border-r border-gray-300 text-sm hover:bg-gray-50">
                Search All
              </button>
              <input 
                type="text" 
                placeholder="Search products, resources, etc..." 
                className="px-4 py-2 w-96 outline-none text-sm text-gray-600 placeholder-gray-400"
              />
              <button className="px-3 py-2 text-blue-500 bg-white hover:bg-gray-50">
                <Search className="w-4 h-4" />
              </button>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                Associates
              </button>
              <button className="bg-[#4b82c3] hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                Enterprise
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors ml-2">
                <User className="w-5 h-5 text-gray-600" />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Tier */}
      <div className="w-full border-b border-gray-200 bg-white hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            
            {/* Left Links */}
            <nav className="flex space-x-8">
              {bottomLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-500 hover:text-blue-600 text-[14px] font-normal transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>

            {/* Right Link */}
            <a href="#" className="text-blue-600 hover:text-blue-700 text-[14px] font-medium transition-colors">
              Iraa Bio Advanced
            </a>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
