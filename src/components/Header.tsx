import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EnquiryModal from '@/components/EnquiryModal';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const location = useLocation();
  const navigationItems = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About Us',
    path: '/about'
  }, {
    name: 'Holiday Packages',
    path: '/packages'
  }, {
    name: 'Luxury Holidays',
    path: '/luxury'
  }, {
    name: 'Cruise Holidays',
    path: '/cruise'
  }, {
    name: 'Wildlife Holidays',
    path: '/wildlife'
  }, {
    name: 'India Holidays',
    path: '/india'
  }, {
    name: 'International',
    path: '/international'
  }, {
    name: 'Weekend Getaways',
    path: '/weekend-getaways'
  }, {
    name: 'Honeymoon',
    path: '/honeymoon'
  }, {
    name: 'MICE/Corporate',
    path: '/mice'
  }, {
    name: 'Blog',
    path: '/blog'
  }, {
    name: 'Gallery',
    path: '/gallery'
  }, {
    name: 'Testimonials',
    path: '/testimonials'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  return <>
      <header className="bg-white shadow-lg sticky top-0 z-50">
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white py-2">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>info@omtoursandtravels.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>Delhi | Mumbai | Bangalore</span>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white p-2 rounded-full">
                <span className="text-xl font-bold">OM</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Om Tours & Travels</h1>
                <p className="text-sm text-gray-600">Your Journey, Our Passion</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navigationItems.slice(0, 8).map(item => <Link key={item.name} to={item.path} className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${location.pathname === item.path ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}>
                  {item.name}
                </Link>)}
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  More
                </button>
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-48">
                  {navigationItems.slice(8).map(item => <Link key={item.name} to={item.path} className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
                      {item.name}
                    </Link>)}
                </div>
              </div>
            </nav>

            <Button onClick={() => setShowEnquiry(true)} className="hidden lg:block bg-gradient-to-r from-blue-600 to-orange-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-medium mx-3">
              Enquire Now
            </Button>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && <nav className="lg:hidden mt-4 pb-4 border-t">
              <div className="grid grid-cols-2 gap-2 mt-4">
                {navigationItems.map(item => <Link key={item.name} to={item.path} className="block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </Link>)}
              </div>
              <Button className="block mt-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white px-6 py-2 rounded-full text-center font-medium w-full" onClick={() => {
            setIsMenuOpen(false);
            setShowEnquiry(true);
          }}>
                Enquire Now
              </Button>
            </nav>}
        </div>
      </header>

      {showEnquiry && <EnquiryModal onClose={() => setShowEnquiry(false)} />}
    </>;
};
export default Header;