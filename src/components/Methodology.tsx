import React from 'react';
import { Search, Target, Cog, TrendingUp } from 'lucide-react';

const Methodology = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discovery & Analysis',
      description: 'We begin by understanding your unique challenges, goals, and requirements through comprehensive analysis and stakeholder engagement.'
    },
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Develop customized strategies and detailed roadmaps that align with your business objectives and deliver measurable results.'
    },
    {
      icon: Cog,
      title: 'Implementation',
      description: 'Execute solutions with precision, maintaining clear communication and delivering key milestones according to schedule.'
    },
    {
      icon: TrendingUp,
      title: 'Optimization',
      description: 'Continuously monitor, measure, and optimize solutions to ensure sustained success and maximum return on investment.'
    }
  ];

  return (
    <section id="methodology" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f4463] mb-6">
            Our Proven Methodology
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Our systematic approach ensures consistent delivery of high-quality solutions 
            that meet your specific needs and exceed expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-[#ff0000] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#2f4463] mb-4">{step.title}</h3>
              <p className="text-gray-700 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;