import React from 'react';
import { 
  Briefcase, 
  Zap, 
  Code, 
  BarChart3, 
  CheckSquare, 
  GraduationCap,
  TrendingUp,
  Settings,
  Database,
  PieChart,
  Users,
  BookOpen
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: 'Business Consulting',
      description: 'Strategic business guidance to optimize operations, improve efficiency, and accelerate growth through data-driven insights and proven methodologies.',
      features: [
        'Business Process Optimization',
        'Strategic Planning & Analysis',
        'Market Research & Intelligence',
        'Performance Management Systems',
        'Risk Assessment & Mitigation',
        'Compliance & Regulatory Support'
      ]
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Comprehensive digital solutions to modernize your business operations, enhance customer experience, and position you for future success.',
      features: [
        'Digital Strategy Development',
        'Technology Implementation',
        'Process Automation Solutions',
        'Cloud Migration Services',
        'Digital Marketing Solutions',
        'E-commerce Development'
      ]
    },
    {
      icon: Code,
      title: 'Technology Solutions',
      description: 'Cutting-edge technology services including custom software development, system integration, and comprehensive IT infrastructure management.',
      features: [
        'Custom Software Development',
        'Web & Mobile Applications',
        'Database Design & Management',
        'System Integration Services',
        'API Development & Integration',
        'Technical Support & Maintenance'
      ]
    },
    {
      icon: BarChart3,
      title: 'Data Analytics & Intelligence',
      description: 'Transform your data into actionable insights with advanced analytics, comprehensive reporting, and intelligent business intelligence solutions.',
      features: [
        'Business Intelligence Dashboards',
        'Predictive Analytics Solutions',
        'Data Visualization & Reporting',
        'Performance Metrics & KPIs',
        'Custom Reporting Solutions',
        'Data Mining & Analysis'
      ]
    },
    {
      icon: CheckSquare,
      title: 'Project Management',
      description: 'End-to-end project management services ensuring successful delivery of complex initiatives on time, within budget, and exceeding quality expectations.',
      features: [
        'Project Planning & Execution',
        'Resource Management & Allocation',
        'Risk Management & Mitigation',
        'Quality Assurance & Control',
        'Stakeholder Communication',
        'Change Management Support'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Training & Development',
      description: 'Comprehensive training programs to upskill your team and ensure successful adoption of new technologies, processes, and best practices.',
      features: [
        'Technology Training Programs',
        'Process & Workflow Training',
        'Leadership Development',
        'Custom Workshop Design',
        'Ongoing Support & Mentoring',
        'Certification Programs'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f4463] mb-6">
            Our Core Services
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            We offer a comprehensive suite of business and technology solutions designed to 
            accelerate your success and drive sustainable growth across all industries and sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="flex items-center mb-4">
                <service.icon className="h-8 w-8 text-[#ff0000] mr-3" />
                <h3 className="text-xl font-bold text-[#2f4463]">{service.title}</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-[#ff0000] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;