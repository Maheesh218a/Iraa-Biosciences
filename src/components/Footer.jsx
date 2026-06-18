import React, { useState } from 'react';

const Linkedin = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Instagram = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const Facebook = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const Youtube = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.498 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      alert("Thank you for subscribing!");
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-white font-sans pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Top Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr] gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Newsletter */}
          <div className="flex flex-col">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex flex-col gap-1 items-center">
                <div className="w-3 h-3 bg-[#364f6b] rounded-tr-lg rounded-bl-sm"></div>
                <div className="w-3 h-6 bg-[#5a8bc3] rounded-br-sm rounded-bl-sm"></div>
              </div>
              <div className="flex flex-col -mt-1">
                <span className="text-[#364f6b] font-light text-[26px] leading-none tracking-tight">Iraa</span>
                <span className="text-gray-400 font-light text-[24px] leading-none tracking-tight">Biosciences</span>
              </div>
            </div>
            
            <p className="text-[#364f6b] text-[18px] font-light mb-12">
              Research Simplified.
            </p>

            <h4 className="text-gray-400 text-[14px] font-light tracking-[0.25em] uppercase mb-4">
              News Letter
            </h4>
            
            <div className="flex w-full max-w-[320px] h-[38px] bg-[#5a8bc3] p-0.5 rounded-[1px]">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder-white/80 px-3 text-[12px] font-light outline-none"
              />
              <button 
                onClick={handleSubscribe}
                className="bg-white text-[#5a8bc3] text-[12px] font-medium px-5 hover:bg-gray-50 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col">
            <h4 className="text-[#364f6b] text-[16px] font-medium mb-6">Company</h4>
            <ul className="flex flex-col gap-3.5 text-[13px] text-[#6b7b8f] font-light">
              <li><a href="#" className="hover:text-[#5a8bc3] transition-colors">About</a></li>
              <li><a href="#" className="hover:text-[#5a8bc3] transition-colors">Leadership</a></li>
              <li><a href="#" className="hover:text-[#5a8bc3] transition-colors">IRC</a></li>
              <li><a href="#" className="hover:text-[#5a8bc3] transition-colors">Associates</a></li>
              <li><a href="#" className="hover:text-[#5a8bc3] transition-colors">Enterprise</a></li>
              <li><a href="#" className="hover:text-[#5a8bc3] transition-colors">Partners & Collabs</a></li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="flex flex-col">
            <h4 className="text-[#364f6b] text-[16px] font-medium mb-6">Solutions</h4>
            <ul className="flex flex-col gap-3.5 text-[13px] text-[#6b7b8f] font-light">
              <li><a href="#" className="hover:text-[#5a8bc3] transition-colors">Explore</a></li>
              <li><a href="#" className="hover:text-[#5a8bc3] transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-[#5a8bc3] transition-colors">Laboratory Services</a></li>
              <li><a href="#" className="hover:text-[#5a8bc3] transition-colors">R and D</a></li>
              <li><a href="#" className="hover:text-[#5a8bc3] transition-colors">Custom Solutions</a></li>
              <li><a href="#" className="hover:text-[#5a8bc3] transition-colors">Bulk Ordering</a></li>
            </ul>
          </div>

          {/* Column 4: Hub & Support */}
          <div className="flex flex-col">
            <h4 className="text-[#364f6b] text-[16px] font-medium mb-6">Hub & Support</h4>
            <ul className="flex flex-col gap-3.5 text-[13px] text-[#6b7b8f] font-light">
              <li><a href="#" className="hover:text-[#5a8bc3] transition-colors">Resources</a></li>
              <li><a href="#" className="hover:text-[#5a8bc3] transition-colors">Iraa Bio Advanced</a></li>
              <li><a href="#" className="hover:text-[#5a8bc3] transition-colors">Track Your Order</a></li>
              <li><a href="#" className="hover:text-[#5a8bc3] transition-colors">Raise a Support Ticket</a></li>
              <li><a href="#" className="hover:text-[#5a8bc3] transition-colors">Careers | FAQs</a></li>
              <li><a href="#" className="hover:text-[#5a8bc3] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 5: Trust & Governance */}
          <div className="flex flex-col">
            <h4 className="text-[#364f6b] text-[16px] font-medium mb-6">Trust & Governance</h4>
            <ul className="flex flex-col gap-3.5 text-[13px] text-[#6b7b8f] font-light">
              <li><a href="#" className="hover:text-[#5a8bc3] transition-colors">Research Ethics & Integrity</a></li>
              <li><a href="#" className="hover:text-[#5a8bc3] transition-colors">SOPs</a></li>
              <li><a href="#" className="hover:text-[#5a8bc3] transition-colors">Quality Management System</a></li>
              <li><a href="#" className="hover:text-[#5a8bc3] transition-colors">Policies</a></li>
              <li><a href="#" className="hover:text-[#5a8bc3] transition-colors">Certifications & Accreditations</a></li>
              <li><a href="#" className="hover:text-[#5a8bc3] transition-colors">Connect With Us</a></li>
            </ul>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-4 text-[#5a8bc3]">
              <a href="#" className="hover:text-[#364f6b] transition-colors">
                <Linkedin className="w-5 h-5 fill-current" />
              </a>
              <a href="#" className="hover:text-[#364f6b] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#364f6b] transition-colors">
                <Facebook className="w-5 h-5 fill-current border-none" />
              </a>
              <a href="#" className="hover:text-[#364f6b] transition-colors">
                <Youtube className="w-[22px] h-[22px] fill-current" />
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-[#f0f4f8] w-full mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-0">
          
          {/* Bottom Left: Logo & Copyright */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 opacity-80">
              <div className="flex flex-col gap-0.5 items-center">
                <div className="w-1.5 h-1.5 bg-[#364f6b] rounded-tr-md rounded-bl-sm"></div>
                <div className="w-1.5 h-3 bg-[#5a8bc3] rounded-br-sm rounded-bl-sm"></div>
              </div>
              <div className="flex flex-col -mt-0.5">
                <span className="text-[#364f6b] font-light text-[12px] leading-none tracking-tight">Iraa</span>
                <span className="text-gray-400 font-light text-[11px] leading-none tracking-tight">Biosciences</span>
              </div>
            </div>
            <span className="text-[10px] text-gray-400 font-light tracking-wide">
              © 2026 Iraa Biosciences. All rights reserved.
            </span>
          </div>

          {/* Bottom Middle: Policies & Parent Company */}
          <div className="flex flex-col border-l border-[#f0f4f8] pl-5 lg:mr-auto lg:ml-12">
            <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#86a7cc] font-light mb-1">
              <a href="#" className="hover:text-[#364f6b]">Site Use Terms</a> <span className="text-gray-300">|</span>
              <a href="#" className="hover:text-[#364f6b]">Privacy Policy</a> <span className="text-gray-300">|</span>
              <a href="#" className="hover:text-[#364f6b]">Shipping Policy</a> <span className="text-gray-300">|</span>
              <a href="#" className="hover:text-[#364f6b]">All Policies</a>
            </div>
            <div className="text-[10px] text-gray-400 font-light">
              Parent Company | DhiShi Scientific Pvt. Ltd. <br/>
              <a href="#" className="text-[#86a7cc] hover:text-[#364f6b] transition-colors">dhishi.com ↗</a>
            </div>
          </div>

          {/* Bottom Right: Other Brands */}
          <div className="flex flex-col lg:items-end mt-4 lg:mt-0">
            <span className="text-[11px] text-[#364f6b] font-medium tracking-widest uppercase mb-2">
              OTHER BRANDS
            </span>
            <div className="flex items-center gap-2 text-[13px] text-gray-400 font-light">
              <a href="#" className="hover:text-[#5a8bc3] transition-colors">Iraa Pharmacy</a> 
              <span className="text-gray-300">|</span>
              <a href="#" className="hover:text-[#5a8bc3] transition-colors">iWrite</a> 
              <span className="text-gray-300">|</span>
              <a href="#" className="hover:text-[#5a8bc3] transition-colors">iPharmacist</a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
