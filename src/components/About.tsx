import React from 'react';
import { Target, Users, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f4463] mb-6">
            About ASK Trading and Projects
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            ASK Trading and Projects (Pty) Ltd is a dynamic, newly established private company 
            committed to delivering exceptional business and technology solutions. Founded in May 2025, 
            we embody innovation, reliability, and excellence in every project we undertake.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-[#2f4463] mb-6">
              Why Choose ASK Trading and Projects?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We combine cutting-edge technology with proven business strategies to deliver 
              solutions that drive measurable results and sustainable growth.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Target className="h-6 w-6 text-[#ff0000] mt-1" />
                <div>
                  <h4 className="font-semibold text-[#2f4463]">Results-Driven Approach</h4>
                  <p className="text-gray-600">Every solution is designed to deliver measurable business outcomes</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-[#ff0000] mt-1" />
                <div>
                  <h4 className="font-semibold text-[#2f4463]">Customer-Centric Focus</h4>
                  <p className="text-gray-600">Your vision becomes our mission with personalized solutions</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="h-6 w-6 text-[#ff0000] mt-1" />
                <div>
                  <h4 className="font-semibold text-[#2f4463]">Innovation & Excellence</h4>
                  <p className="text-gray-600">Cutting-edge technology meets proven business strategies</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#2f4463] mb-6">Company Information</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Company Type:</span>
                <span className="font-semibold">Private Company (Pty) Ltd</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Registration:</span>
                <span className="font-semibold">2025/423136/07</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Established:</span>
                <span className="font-semibold">May 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="font-semibold text-green-600">Active & In Business</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Location:</span>
                <span className="font-semibold">Johannesburg, Gauteng</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;