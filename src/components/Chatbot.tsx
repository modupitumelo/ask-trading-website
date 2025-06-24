import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your ASK Trading & Projects assistant. I can help you learn about our services, company information, and how we can help transform your business. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const companyKnowledge = {
    company: {
      name: "ASK Trading and Projects (Pty) Ltd",
      tagline: "You ASK and We provide",
      registration: "2025/423136/07",
      established: "May 2025",
      type: "Private Company (Pty) Ltd",
      status: "Active & In Business",
      location: "3 Halifax, Johannesburg, Gauteng, 2191, South Africa",
      email: "sepatoandrew@gmail.com",
      hours: "Monday-Friday: 8:00 AM - 6:00 PM, Saturday: 9:00 AM - 2:00 PM, Sunday: By appointment (SAST UTC+2)"
    },
    services: [
      {
        name: "Business Consulting",
        description: "Strategic business guidance to optimize operations, improve efficiency, and accelerate growth through data-driven insights and proven methodologies.",
        features: ["Business Process Optimization", "Strategic Planning & Analysis", "Market Research & Intelligence", "Performance Management Systems", "Risk Assessment & Mitigation", "Compliance & Regulatory Support"]
      },
      {
        name: "Digital Transformation",
        description: "Comprehensive digital solutions to modernize your business operations, enhance customer experience, and position you for future success.",
        features: ["Digital Strategy Development", "Technology Implementation", "Process Automation Solutions", "Cloud Migration Services", "Digital Marketing Solutions", "E-commerce Development"]
      },
      {
        name: "Technology Solutions",
        description: "Cutting-edge technology services including custom software development, system integration, and comprehensive IT infrastructure management.",
        features: ["Custom Software Development", "Web & Mobile Applications", "Database Design & Management", "System Integration Services", "API Development & Integration", "Technical Support & Maintenance"]
      },
      {
        name: "Data Analytics & Intelligence",
        description: "Transform your data into actionable insights with advanced analytics, comprehensive reporting, and intelligent business intelligence solutions.",
        features: ["Business Intelligence Dashboards", "Predictive Analytics Solutions", "Data Visualization & Reporting", "Performance Metrics & KPIs", "Custom Reporting Solutions", "Data Mining & Analysis"]
      },
      {
        name: "Project Management",
        description: "End-to-end project management services ensuring successful delivery of complex initiatives on time, within budget, and exceeding quality expectations.",
        features: ["Project Planning & Execution", "Resource Management & Allocation", "Risk Management & Mitigation", "Quality Assurance & Control", "Stakeholder Communication", "Change Management Support"]
      },
      {
        name: "Training & Development",
        description: "Comprehensive training programs to upskill your team and ensure successful adoption of new technologies, processes, and best practices.",
        features: ["Technology Training Programs", "Process & Workflow Training", "Leadership Development", "Custom Workshop Design", "Ongoing Support & Mentoring", "Certification Programs"]
      }
    ],
    methodology: [
      {
        step: "Discovery & Analysis",
        description: "We begin by understanding your unique challenges, goals, and requirements through comprehensive analysis and stakeholder engagement."
      },
      {
        step: "Strategic Planning",
        description: "Develop customized strategies and detailed roadmaps that align with your business objectives and deliver measurable results."
      },
      {
        step: "Implementation",
        description: "Execute solutions with precision, maintaining clear communication and delivering key milestones according to schedule."
      },
      {
        step: "Optimization",
        description: "Continuously monitor, measure, and optimize solutions to ensure sustained success and maximum return on investment."
      }
    ],
    values: [
      "Results-Driven Approach - Every solution is designed to deliver measurable business outcomes",
      "Customer-Centric Focus - Your vision becomes our mission with personalized solutions",
      "Innovation & Excellence - Cutting-edge technology meets proven business strategies"
    ]
  };

  const generateResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();

    // Greeting responses
    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      return "Hello! Welcome to ASK Trading & Projects. I'm here to help you learn about our professional business and technology solutions. What specific information can I provide for you today?";
    }

    // Company information
    if (lowerInput.includes('company') || lowerInput.includes('about') || lowerInput.includes('who are you')) {
      return `ASK Trading and Projects (Pty) Ltd is a dynamic, newly established private company committed to delivering exceptional business and technology solutions. We were founded in May 2025 with the mission "You ASK and We provide." Our registration number is ${companyKnowledge.company.registration}, and we're based in Johannesburg, Gauteng, South Africa.`;
    }

    // Services
    if (lowerInput.includes('service') || lowerInput.includes('what do you do') || lowerInput.includes('offer')) {
      return `We offer six core services: 1) Business Consulting - Strategic guidance and process optimization, 2) Digital Transformation - Modernizing operations and customer experience, 3) Technology Solutions - Custom software and system integration, 4) Data Analytics & Intelligence - Business intelligence and reporting, 5) Project Management - End-to-end project delivery, 6) Training & Development - Upskilling and technology adoption. Which service interests you most?`;
    }

    // Specific service inquiries
    if (lowerInput.includes('business consulting') || lowerInput.includes('consulting')) {
      const service = companyKnowledge.services[0];
      return `${service.description} Our consulting includes: ${service.features.slice(0, 3).join(', ')}, and more. We focus on delivering measurable business outcomes through proven methodologies.`;
    }

    if (lowerInput.includes('digital transformation') || lowerInput.includes('digital')) {
      const service = companyKnowledge.services[1];
      return `${service.description} We help with: ${service.features.slice(0, 3).join(', ')}, and other digital initiatives to position your business for future success.`;
    }

    if (lowerInput.includes('technology') || lowerInput.includes('software') || lowerInput.includes('development')) {
      const service = companyKnowledge.services[2];
      return `${service.description} Our technology services include: ${service.features.slice(0, 3).join(', ')}, plus ongoing support and maintenance.`;
    }

    if (lowerInput.includes('data') || lowerInput.includes('analytics') || lowerInput.includes('intelligence')) {
      const service = companyKnowledge.services[3];
      return `${service.description} We provide: ${service.features.slice(0, 3).join(', ')}, helping you make data-driven decisions.`;
    }

    if (lowerInput.includes('project management') || lowerInput.includes('project')) {
      const service = companyKnowledge.services[4];
      return `${service.description} Our project management covers: ${service.features.slice(0, 3).join(', ')}, ensuring successful delivery every time.`;
    }

    if (lowerInput.includes('training') || lowerInput.includes('development') || lowerInput.includes('education')) {
      const service = companyKnowledge.services[5];
      return `${service.description} We offer: ${service.features.slice(0, 3).join(', ')}, ensuring your team is equipped for success.`;
    }

    // Contact information
    if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('phone') || lowerInput.includes('reach')) {
      return `You can reach us at ${companyKnowledge.company.email}. Our office is located at ${companyKnowledge.company.location}. Business hours: ${companyKnowledge.company.hours}. We respond to all inquiries within 24 hours!`;
    }

    // Location
    if (lowerInput.includes('location') || lowerInput.includes('address') || lowerInput.includes('where')) {
      return `We're located at ${companyKnowledge.company.location}. We serve clients throughout South Africa and internationally through our digital solutions.`;
    }

    // Methodology
    if (lowerInput.includes('methodology') || lowerInput.includes('process') || lowerInput.includes('approach')) {
      return `Our proven 4-step methodology ensures consistent delivery: 1) Discovery & Analysis - Understanding your needs, 2) Strategic Planning - Creating customized roadmaps, 3) Implementation - Executing with precision, 4) Optimization - Continuous improvement for sustained success.`;
    }

    // Pricing
    if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('fee')) {
      return "Our pricing is customized based on your specific needs and project scope. We offer competitive rates and flexible engagement models. Contact us at sepatoandrew@gmail.com for a complimentary consultation and personalized quote.";
    }

    // Getting started
    if (lowerInput.includes('start') || lowerInput.includes('begin') || lowerInput.includes('consultation')) {
      return "Getting started is easy! Simply email us at sepatoandrew@gmail.com or use our contact form. We'll schedule a complimentary consultation to understand your needs and provide a customized solution proposal. We respond within 24 hours!";
    }

    // Why choose us
    if (lowerInput.includes('why') || lowerInput.includes('choose') || lowerInput.includes('different')) {
      return `Why choose ASK Trading & Projects? ${companyKnowledge.values.join('. ')}. We're a fresh, innovative company established in 2025, bringing cutting-edge solutions with personalized service.`;
    }

    // Industries
    if (lowerInput.includes('industry') || lowerInput.includes('sector')) {
      return "We serve clients across all industries including healthcare, finance, retail, manufacturing, education, and more. Our solutions are customized to meet the unique challenges and requirements of each sector.";
    }

    // Default response
    return "I'd be happy to help you learn more about ASK Trading & Projects! You can ask me about our services, company information, methodology, contact details, or how we can help your business. What specific information would you like to know?";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: generateResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 sm:bottom-8 left-4 sm:left-8 z-50 bg-[#ff0000] hover:bg-[#c55555] text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Open chat"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-pulse" />
          <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed inset-x-4 bottom-4 sm:inset-x-auto sm:bottom-8 sm:left-8 z-50 bg-white rounded-lg shadow-2xl border border-gray-200 transition-all duration-300 ${
          isMinimized 
            ? 'w-auto sm:w-80 h-16' 
            : 'w-auto sm:w-96 h-[calc(100vh-2rem)] sm:h-[500px] max-h-[calc(100vh-2rem)]'
        }`}>
          {/* Header */}
          <div className="bg-[#2f4463] text-white p-3 sm:p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#ff0000] rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="h-3 w-3 sm:h-5 sm:w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-sm sm:text-base truncate">ASK Assistant</h3>
                <p className="text-xs text-gray-300 hidden sm:block">Online • Ready to help</p>
              </div>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-gray-300 hover:text-white transition-colors p-1"
              >
                {isMinimized ? <Maximize2 className="h-3 w-3 sm:h-4 sm:w-4" /> : <Minimize2 className="h-3 w-3 sm:h-4 sm:w-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white transition-colors p-1"
              >
                <X className="h-3 w-3 sm:h-4 sm:w-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4" style={{ height: 'calc(100% - 8rem)' }}>
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`flex items-start space-x-2 max-w-[85%] sm:max-w-[80%] ${
                      message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'
                    }`}>
                      <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.isBot ? 'bg-[#ff0000]' : 'bg-[#2f4463]'
                      }`}>
                        {message.isBot ? <Bot className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" /> : <User className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />}
                      </div>
                      <div className={`p-2.5 sm:p-3 rounded-lg ${
                        message.isBot 
                          ? 'bg-gray-100 text-gray-800' 
                          : 'bg-[#ff0000] text-white'
                      }`}>
                        <p className="text-xs sm:text-sm leading-relaxed break-words">{message.text}</p>
                        <p className={`text-xs mt-1 ${
                          message.isBot ? 'text-gray-500' : 'text-red-100'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-2">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#ff0000] rounded-full flex items-center justify-center">
                        <Bot className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
                      </div>
                      <div className="bg-gray-100 p-2.5 sm:p-3 rounded-lg">
                        <div className="flex space-x-1">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-3 sm:p-4 border-t border-gray-200">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me about our services..."
                    className="flex-1 px-2.5 py-2 sm:px-3 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff0000] focus:border-transparent text-xs sm:text-sm"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    className="bg-[#ff0000] hover:bg-[#c55555] disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors flex-shrink-0"
                  >
                    <Send className="h-3 w-3 sm:h-4 sm:w-4" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Chatbot;