import React from 'react';
import { ArrowRight, Award, Clock, Infinity, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 relative bg-gradient-to-br from-[#2f4463] to-[#1a2537] text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      ></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2f4463]/80 to-[#1a2537]/80"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Business &<br />
            <span className="text-[#ff0000]">Technology Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            You ASK and We provide - Dynamic solutions that drive measurable results 
            and sustainable growth for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#contact"
              className="bg-[#ff0000] hover:bg-[#c55555] text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-colors duration-200"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#services"
              className="border-2 border-white hover:bg-white hover:text-[#2f4463] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Our Services
            </a>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="h-8 w-8 text-[#ff0000]" />
              </div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm text-gray-300">Client Satisfaction Focus</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-8 w-8 text-[#ff0000]" />
              </div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm text-gray-300">Support Available</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Infinity className="h-8 w-8 text-[#ff0000]" />
              </div>
              <div className="text-3xl font-bold">∞</div>
              <div className="text-sm text-gray-300">Innovative Solutions</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Calendar className="h-8 w-8 text-[#ff0000]" />
              </div>
              <div className="text-3xl font-bold">2025</div>
              <div className="text-sm text-gray-300">Established</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;