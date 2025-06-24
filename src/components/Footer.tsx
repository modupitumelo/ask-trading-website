import React from 'react';
import { Mail, MapPin, Phone, Clock, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Business Consulting',
    'Digital Transformation',
    'Technology Solutions',
    'Data Analytics & Intelligence',
    'Project Management',
    'Training & Development'
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Methodology', href: '#methodology' },
    { name: 'Contact Us', href: '#contact' }
  ];

  return (
    <footer className="bg-[#1a2537] text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-[#ff0000] mr-3" />
                <a 
                  href="mailto:info@asktrading.co.za" 
                  className="hover:text-white transition-colors"
                >
                  info@asktrading.co.za
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-[#ff0000] mr-3 mt-1" />
                <div>
                  <p>3 Halifax, Johannesburg</p>
                  <p>Gauteng, 2191, South Africa</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-[#ff0000] mr-3" />
                <span>Mon-Fri: 8AM-6PM SAST</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 text-[#ff0000] mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 text-[#ff0000] mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Details & CTA */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Company Details</h3>
            <div className="space-y-4 mb-6">
              <div>
                <p className="text-sm text-gray-400">Registration Number</p>
                <p className="font-semibold">2025/423136/07</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Company Type</p>
                <p className="font-semibold">Private Company (Pty) Ltd</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Status</p>
                <p className="font-semibold text-green-400">Active & In Business</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Established</p>
                <p className="font-semibold">May 2025</p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center bg-[#ff0000] hover:bg-[#c55555] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 w-full justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">
                © {currentYear} ASK Trading and Projects (Pty) Ltd. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-gray-400">Registration: 2025/423136/07</span>
              <span className="text-gray-400">|</span>
              <span className="text-[#ff0000] font-medium">
                Professional Business & Technology Solutions
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;