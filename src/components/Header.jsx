import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { text: 'Home', path: '/' },
    { text: 'Activities', path: '/activities' },
    // {text:'Blog', path:'/blog'},
    {text: 'Team', path: '/team'},
    // { text: 'About', path: '/about' },
    // { text: 'Gallery', path: '/gallery' },
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50" style={{ fontFamily: "'Quicksand', sans-serif" }}>
      <div className="container mx-auto px-6 md:px-12 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                className="h-14 w-auto"
                src="./assets/logo.png"
                alt="MWNAM NGO Logo"
                onError={e => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x50/000/FFF?text=Logo'; }}
              />
            </a>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map(link => (
              <a
                key={link.text}
                href={link.path}
                className="text-[#1A2A6C] font-normal text-base no-underline transition-colors duration-300 hover:text-[#D4AF37]"
              >
                {link.text}
              </a>
            ))}
          </div>
          {/* Desktop Volunteer Button */}
          <div className="hidden md:block">
            <a
              href="/volunteer"
              className="bg-[#D4AF37] text-[#1A2A6C] font-normal py-2 px-8 rounded-full shadow-md hover:bg-[#D4AF37] transition-all duration-300"
            >
              Volunteer
            </a>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#1A2A6C] focus:outline-none"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d={isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4">
          <div className="flex flex-col items-center space-y-4">
            {navLinks.map(link => (
              <a
                key={link.text}
                href={link.path}
                className="text-[#424e98] font-normal text-base no-underline hover:text-[#D4AF37] transition-colors"
              >
                {link.text}
              </a>
            ))}
            <a
              href="/volunteer"
              className="bg-[#D4AF37] text-[#1A2A6C] font-normal py-2 px-8 rounded-full shadow-md hover:bg-[#ad8a31]"
            >
              Volunteer
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
