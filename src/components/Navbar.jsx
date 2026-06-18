import { useState } from 'react';
import { Search, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full font-sans">
      {/* Top Tier - Dark Blue */}
      <div className="w-full bg-[#364f6b] text-white">
        <div className="px-6 lg:px-12 w-full max-w-[1600px] mx-auto">
          <div className="flex justify-between items-center h-[72px]">
            
            {/* Logo Area */}
            <div className="flex items-center gap-3">
              <svg width="26" height="42" viewBox="0 0 100 100" className="mt-1 shrink-0">
                <path d="M 0 40 A 40 40 0 0 1 40 0 L 100 0 L 100 100 L 0 100 Z" fill="#ffffff"/>
              </svg>
              <div className="flex flex-col leading-none ml-1">
                <span className="text-[26px] font-semibold tracking-wide">Iraa</span>
                <span className="text-[18px] font-light tracking-[0.18em] mt-1">Biosciences</span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center text-[15px] font-medium tracking-wide">
              {/* Left Group */}
              <nav className="flex gap-8 border-r border-white/20 pr-8">
                <a href="#solutions" onClick={(e) => handleSmoothScroll(e, '#solutions')} className="hover:text-blue-200 transition-colors">Solutions</a>
                <a href="#bulk-order" onClick={(e) => handleSmoothScroll(e, '#bulk-order')} className="hover:text-blue-200 transition-colors">Bulk Order</a>
                <a href="#" onClick={(e) => { e.preventDefault(); alert("Track Order feature coming soon"); }} className="hover:text-blue-200 transition-colors">Track Order</a>
                <a href="#partnerships" onClick={(e) => handleSmoothScroll(e, '#partnerships')} className="hover:text-blue-200 transition-colors">Partnerships</a>
                <a href="#quick-links" onClick={(e) => handleSmoothScroll(e, '#quick-links')} className="hover:text-blue-200 transition-colors">Quick Links</a>
              </nav>
              
              {/* Right Group */}
              <nav className="flex gap-8 pl-8">
                <a href="#irc" onClick={(e) => handleSmoothScroll(e, '#irc')} className="hover:text-blue-200 transition-colors">IRC</a>
                <a href="#associates" onClick={(e) => handleSmoothScroll(e, '#associates')} className="hover:text-blue-200 transition-colors">Associates</a>
                <a href="#ib-advanced" onClick={(e) => handleSmoothScroll(e, '#ib-advanced')} className="hover:text-blue-200 transition-colors">IB Advanced</a>
              </nav>
            </div>

            {/* Mobile Menu Button (Visible only on small screens) */}
            <div className="lg:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#253950] w-full px-6 py-4 border-t border-white/10">
          <nav className="flex flex-col gap-4 text-white text-[15px] font-medium tracking-wide">
            <a href="#solutions" onClick={(e) => handleSmoothScroll(e, '#solutions')}>Solutions</a>
            <a href="#bulk-order" onClick={(e) => handleSmoothScroll(e, '#bulk-order')}>Bulk Order</a>
            <a href="#" onClick={(e) => { e.preventDefault(); alert("Track Order feature coming soon"); setIsMobileMenuOpen(false); }}>Track Order</a>
            <a href="#partnerships" onClick={(e) => handleSmoothScroll(e, '#partnerships')}>Partnerships</a>
            <hr className="border-white/10" />
            <button 
              onClick={() => { alert("Login/Register feature coming soon"); setIsMobileMenuOpen(false); }}
              className="text-left"
            >
              Login/Register
            </button>
          </nav>
        </div>
      )}

      {/* Bottom Tier - White */}
      <div className="w-full bg-white border-b border-gray-200 hidden lg:block shadow-sm">
        <div className="px-6 lg:px-12 w-full max-w-[1600px] mx-auto">
          <div className="flex justify-end items-center h-[60px]">
            
            {/* Right Side Actions */}
            <div className="flex items-center gap-6">
              <button className="text-[#364f6b] hover:text-[#253950] transition-colors p-2">
                <Search className="w-[20px] h-[20px]" strokeWidth={2.5} />
              </button>
              
              <button 
                onClick={() => alert("Login/Register feature coming soon")}
                className="text-[#364f6b] hover:text-[#253950] text-[15px] font-medium transition-colors"
              >
                Login/Register
              </button>
              
              <button className="w-10 h-10 bg-[#364f6b] hover:bg-[#253950] flex items-center justify-center rounded-full transition-colors ml-2">
                <User className="w-[20px] h-[20px] text-white" />
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
