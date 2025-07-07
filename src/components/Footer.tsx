
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white p-2 rounded-full">
                <span className="text-lg font-bold">OM</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Om Tours & Travels</h3>
                <p className="text-sm text-gray-400">Your Journey, Our Passion</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Creating unforgettable travel experiences for over 15 years. From luxury holidays to budget-friendly getaways, we make your dream trips a reality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/packages" className="text-gray-400 hover:text-white transition-colors">Holiday Packages</Link></li>
              <li><Link to="/luxury" className="text-gray-400 hover:text-white transition-colors">Luxury Holidays</Link></li>
              <li><Link to="/cruise" className="text-gray-400 hover:text-white transition-colors">Cruise Holidays</Link></li>
              <li><Link to="/wildlife" className="text-gray-400 hover:text-white transition-colors">Wildlife Tours</Link></li>
              <li><Link to="/honeymoon" className="text-gray-400 hover:text-white transition-colors">Honeymoon Packages</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/india" className="text-gray-400 hover:text-white transition-colors">India Holidays</Link></li>
              <li><Link to="/international" className="text-gray-400 hover:text-white transition-colors">International Tours</Link></li>
              <li><Link to="/weekend" className="text-gray-400 hover:text-white transition-colors">Weekend Getaways</Link></li>
              <li><Link to="/mice" className="text-gray-400 hover:text-white transition-colors">Corporate Travel</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Travel Blog</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Photo Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Head Office:</p>
                  <p className="text-sm">123, Travel Street, Connaught Place, New Delhi - 110001</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-sm">+91 98765 43210</p>
                  <p className="text-sm">+91 11 4567 8900</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-sm">info@omtoursandtravels.com</p>
                  <p className="text-sm">booking@omtoursandtravels.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Om Tours & Travels. All rights reserved. | 
            <Link to="/privacy" className="hover:text-white ml-1">Privacy Policy</Link> | 
            <Link to="/terms" className="hover:text-white ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
