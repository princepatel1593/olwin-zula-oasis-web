
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/cce0a9a4-8cf6-4fa9-b4dd-fbe623952af5.png" 
              alt="Olwin Zula House Logo" 
              className="h-12 w-12"
            />
            <span className="text-2xl font-bold text-amber-800">Olwin Zula House</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => window.scrollTo(0, 0)}
                className={`text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium ${
                  isActive(item.path) ? 'text-amber-600 border-b-2 border-amber-600' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full transition-all duration-200 hover:scale-105">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-2 text-gray-700 hover:text-amber-600 transition-colors duration-200 ${
                  isActive(item.path) ? 'text-amber-600 font-semibold' : ''
                }`}
                onClick={() => {
                  setIsOpen(false);
                  window.scrollTo(0, 0);
                }}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full mt-4 w-full">
                Get Quote
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
