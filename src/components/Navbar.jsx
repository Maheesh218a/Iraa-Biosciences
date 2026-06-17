import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Solutions', href: '#' },
    { name: 'Track Order', href: '#' },
    { name: 'Partnerships', href: '#' },
    { name: 'IRC Associates', href: '#' },
    { name: 'Enterprise', href: '#' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-extrabold tracking-tight">
                <span className="text-green-600 group-hover:text-green-700 transition-colors">Iraa</span> 
                <span className="text-gray-900"> Biosciences</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-green-600 font-medium text-sm transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Side Buttons */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-green-600 font-medium text-sm transition-colors duration-200"
            >
              Login / Register
            </a>
            <a
              href="#"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Bulk Order
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-green-600 focus:outline-none p-2 transition-colors rounded-md hover:bg-green-50"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 shadow-inner">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-5 mt-5 border-t border-gray-100 flex flex-col space-y-4 px-3">
                <a
                  href="#"
                  className="text-center text-gray-700 hover:text-green-600 font-medium transition-colors"
                >
                  Login / Register
                </a>
                <a
                  href="#"
                  className="text-center bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full font-medium transition-colors shadow-md"
                >
                  Bulk Order
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
