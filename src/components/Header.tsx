import React, { useState } from 'react';
import { Menu, X, Sun, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Opportunities', href: '#opportunities' },
    { name: 'Programs', href: '#programs' },
    { name: 'Food & Culture', href: '#culture' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Acknowledgment of Country Banner */}
      <div className="bg-amber-800 text-amber-100 py-2 px-4 text-center text-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
          <p>
            We acknowledge that Gaboodjoolup Cafe operates on Whadjuk Noongar Country. 
            We pay our respects to Elders past, present and emerging, and acknowledge 
            their continuing connection to Country.
          </p>
        </div>
      </div>

      <header className="bg-amber-900/95 backdrop-blur-sm text-stone-100 sticky top-0 z-50 border-b border-amber-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <Sun className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-amber-200 via-yellow-200 to-orange-200 bg-clip-text text-transparent">
                  Gaboodjoolup
                </h1>
                <p className="text-sm text-amber-200 font-medium tracking-wide">
                  CAFE • Boorloo (Perth)
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-stone-200 hover:text-amber-200 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-stone-200 hover:text-amber-200 transition-colors duration-200 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;