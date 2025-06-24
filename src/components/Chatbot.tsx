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
      text: "Hello! I'm your intelligent ASK Trading & Projects assistant. I can help you with detailed information about our services, provide business insights, and answer any questions about how we can transform your business. What would you like to know?",
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
      email: "info@asktrading.co.za",
      phone: "+27 83 303 5688",
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

  const generateAIResponse = async (input: string): Promise<string> => {
    try {
      const systemPrompt = `You are an intelligent assistant for ASK Trading and Projects (Pty) Ltd, a professional business and technology consulting company. Here's key information about the company:

COMPANY INFO:
- Name: ASK Trading and Projects (Pty) Ltd
- Tagline: "You ASK and We provide"
- Registration: 2025/423136/07
- Established: May 2025
- Location: 3 Halifax, Johannesburg, Gauteng, 2191, South Africa
- Email: info@asktrading.co.za
- Phone: +27 83 303 5688
- Hours: Monday-Friday: 8:00 AM - 6:00 PM, Saturday: 9:00 AM - 2:00 PM, Sunday: By appointment (SAST UTC+2)

SERVICES:
1. Business Consulting - Strategic guidance, process optimization, market research
2. Digital Transformation - Digital strategy, automation, cloud migration
3. Technology Solutions - Custom software, web/mobile apps, system integration
4. Data Analytics & Intelligence - BI dashboards, predictive analytics, reporting
5. Project Management - End-to-end project delivery, risk management
6. Training & Development - Technology training, leadership development

METHODOLOGY:
1. Discovery & Analysis - Understanding challenges and requirements
2. Strategic Planning - Customized strategies and roadmaps
3. Implementation - Precise execution with clear communication
4. Optimization - Continuous monitoring and improvement

VALUES:
- Results-Driven Approach
- Customer-Centric Focus
- Innovation & Excellence

You should be helpful, professional, and knowledgeable about business and technology topics. Always relate responses back to how ASK Trading and Projects can help solve business challenges. Keep responses concise but informative. If asked about pricing, mention that it's customized based on needs and suggest contacting for a consultation.`;

      // Get API key from environment variable or use a placeholder
      const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY || 'YOUR_OPENROUTER_API_KEY_HERE';
      
      if (apiKey === 'YOUR_OPENROUTER_API_KEY_HERE') {
        console.warn('OpenRouter API key not configured. Using fallback responses.');
        throw new Error('API key not configured');
      }

      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.origin,
          'X-Title': 'ASK Trading & Projects Chatbot'
        },
        body: JSON.stringify({
          model: 'anthropic/claude-3.5-sonnet',
          messages: [
            {
              role: 'system',
              content: systemPrompt
            },
            {
              role: 'user',
              content: input
            }
          ],
          max_tokens: 500,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`OpenRouter API Error: ${response.status} - ${errorText}`);
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0]?.message?.content || 'I apologize, but I encountered an issue processing your request. Please try again or contact us directly.';
    } catch (error) {
      console.error('OpenRouter API Error:', error);
      // Fallback to enhanced local knowledge base
      return generateEnhancedResponse(input);
    }
  };

  const generateEnhancedResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();

    // Greeting responses
    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey') || lowerInput.includes('good morning') || lowerInput.includes('good afternoon')) {
      return "Hello! Welcome to ASK Trading & Projects. I'm here to help you discover how our professional business and technology solutions can transform your organization. Whether you're looking to optimize operations, implement digital transformation, or develop custom technology solutions, I can provide detailed information about our services. What specific challenge or opportunity would you like to discuss?";
    }

    // Company information
    if (lowerInput.includes('company') || lowerInput.includes('about') || lowerInput.includes('who are you') || lowerInput.includes('tell me about')) {
      return `ASK Trading and Projects (Pty) Ltd is a dynamic, newly established private company founded in May 2025 with the mission "You ASK and We provide." We're a full-service business and technology consulting firm based in Johannesburg, Gauteng, South Africa (Registration: ${companyKnowledge.company.registration}). Our team specializes in delivering comprehensive solutions that drive measurable business outcomes through strategic consulting, digital transformation, and cutting-edge technology implementation. We pride ourselves on our customer-centric approach and commitment to innovation and excellence.`;
    }

    // Services - General
    if (lowerInput.includes('service') || lowerInput.includes('what do you do') || lowerInput.includes('offer') || lowerInput.includes('help')) {
      return `We offer six comprehensive service areas designed to transform your business:

🔹 **Business Consulting** - Strategic guidance, process optimization, and market intelligence
🔹 **Digital Transformation** - Modernizing operations and enhancing customer experience  
🔹 **Technology Solutions** - Custom software development and system integration
🔹 **Data Analytics & Intelligence** - Business intelligence dashboards and predictive analytics
🔹 **Project Management** - End-to-end project delivery with proven methodologies
🔹 **Training & Development** - Upskilling teams for technology adoption and leadership

Each service is tailored to your specific needs and delivered through our proven 4-step methodology. Which area would you like to explore in more detail?`;
    }

    // Business Consulting
    if (lowerInput.includes('business consulting') || lowerInput.includes('consulting') || lowerInput.includes('strategy') || lowerInput.includes('optimization')) {
      return `Our Business Consulting services provide strategic guidance to optimize your operations and accelerate growth. We offer:

• **Business Process Optimization** - Streamline workflows and eliminate inefficiencies
• **Strategic Planning & Analysis** - Data-driven roadmaps for sustainable growth
• **Market Research & Intelligence** - Competitive insights and market positioning
• **Performance Management Systems** - KPI frameworks and measurement tools
• **Risk Assessment & Mitigation** - Identify and address potential business risks
• **Compliance & Regulatory Support** - Ensure adherence to industry standards

Our consultants work closely with your team to understand your unique challenges and deliver customized solutions that drive measurable results. Would you like to discuss how we can help optimize your specific business processes?`;
    }

    // Digital Transformation
    if (lowerInput.includes('digital transformation') || lowerInput.includes('digital') || lowerInput.includes('automation') || lowerInput.includes('modernize')) {
      return `Our Digital Transformation services help modernize your business operations and position you for future success:

• **Digital Strategy Development** - Comprehensive roadmaps for digital adoption
• **Technology Implementation** - Seamless integration of modern solutions
• **Process Automation Solutions** - Reduce manual work and increase efficiency
• **Cloud Migration Services** - Secure, scalable cloud infrastructure
• **Digital Marketing Solutions** - Enhance your online presence and reach
• **E-commerce Development** - Build robust online sales platforms

We understand that digital transformation is not just about technology—it's about reimagining how your business operates. Our approach ensures smooth transitions with minimal disruption to your current operations. What aspects of digital transformation are most important for your business?`;
    }

    // Technology Solutions
    if (lowerInput.includes('technology') || lowerInput.includes('software') || lowerInput.includes('development') || lowerInput.includes('app') || lowerInput.includes('system')) {
      return `Our Technology Solutions deliver cutting-edge custom development and system integration:

• **Custom Software Development** - Tailored applications for your unique requirements
• **Web & Mobile Applications** - Responsive, user-friendly digital experiences
• **Database Design & Management** - Secure, scalable data architecture
• **System Integration Services** - Connect disparate systems seamlessly
• **API Development & Integration** - Enable smooth data flow between platforms
• **Technical Support & Maintenance** - Ongoing support to ensure optimal performance

Whether you need a simple web application or a complex enterprise system, our experienced development team uses modern technologies and best practices to deliver solutions that scale with your business. What type of technology solution are you considering?`;
    }

    // Data Analytics
    if (lowerInput.includes('data') || lowerInput.includes('analytics') || lowerInput.includes('intelligence') || lowerInput.includes('reporting') || lowerInput.includes('dashboard')) {
      return `Our Data Analytics & Intelligence services transform your data into actionable business insights:

• **Business Intelligence Dashboards** - Real-time visibility into key metrics
• **Predictive Analytics Solutions** - Forecast trends and anticipate opportunities
• **Data Visualization & Reporting** - Clear, compelling data presentations
• **Performance Metrics & KPIs** - Track what matters most to your business
• **Custom Reporting Solutions** - Automated reports tailored to your needs
• **Data Mining & Analysis** - Uncover hidden patterns and insights

We help you harness the power of your data to make informed decisions, identify new opportunities, and gain competitive advantages. Our analytics solutions are designed to be user-friendly and provide actionable insights that drive business growth. What data challenges is your organization currently facing?`;
    }

    // Project Management
    if (lowerInput.includes('project management') || lowerInput.includes('project') || lowerInput.includes('delivery') || lowerInput.includes('implementation')) {
      return `Our Project Management services ensure successful delivery of complex initiatives:

• **Project Planning & Execution** - Detailed roadmaps with clear milestones
• **Resource Management & Allocation** - Optimize team productivity and efficiency
• **Risk Management & Mitigation** - Proactive identification and resolution
• **Quality Assurance & Control** - Maintain high standards throughout delivery
• **Stakeholder Communication** - Keep everyone informed and aligned
• **Change Management Support** - Smooth transitions and user adoption

We use proven methodologies and industry best practices to deliver projects on time, within budget, and exceeding quality expectations. Our experienced project managers work as an extension of your team to ensure success. Do you have any specific projects or initiatives you'd like to discuss?`;
    }

    // Training & Development
    if (lowerInput.includes('training') || lowerInput.includes('development') || lowerInput.includes('education') || lowerInput.includes('learning') || lowerInput.includes('skills')) {
      return `Our Training & Development programs ensure successful adoption of new technologies and processes:

• **Technology Training Programs** - Hands-on learning for new systems and tools
• **Process & Workflow Training** - Optimize team efficiency and productivity
• **Leadership Development** - Build strong management capabilities
• **Custom Workshop Design** - Tailored learning experiences for your team
• **Ongoing Support & Mentoring** - Continuous guidance and assistance
• **Certification Programs** - Industry-recognized credentials and qualifications

We believe that successful technology implementation requires proper training and support. Our training programs are designed to be engaging, practical, and immediately applicable to your business needs. What training needs does your organization currently have?`;
    }

    // Pricing
    if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('pricing') || lowerInput.includes('budget') || lowerInput.includes('quote')) {
      return `Our pricing is customized based on your specific needs, project scope, and requirements. We believe in providing transparent, value-based pricing that delivers measurable ROI for your investment.

We offer flexible engagement models:
• **Project-based pricing** - Fixed cost for defined deliverables
• **Retainer agreements** - Ongoing support and services
• **Hourly consulting** - Flexible support as needed

To provide you with an accurate quote, we'd need to understand your specific requirements and objectives. I'd recommend scheduling a complimentary consultation where we can discuss your needs in detail and provide a customized proposal.

Contact us at ${companyKnowledge.company.email} or ${companyKnowledge.company.phone} to arrange your consultation. Would you like me to provide more details about any specific service area?`;
    }

    // Contact information
    if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('phone') || lowerInput.includes('reach') || lowerInput.includes('call') || lowerInput.includes('address')) {
      return `Here's how you can reach ASK Trading & Projects:

📧 **Email:** ${companyKnowledge.company.email}
📞 **Phone:** ${companyKnowledge.company.phone}
📍 **Address:** ${companyKnowledge.company.location}

🕒 **Business Hours:**
${companyKnowledge.company.hours}

We respond to all inquiries within 24 hours and offer complimentary initial consultations to discuss your specific needs. Whether you prefer email, phone, or an in-person meeting, we're here to help you explore how our services can benefit your business.

Would you like to schedule a consultation or do you have any other questions about our services?`;
    }

    // Methodology
    if (lowerInput.includes('methodology') || lowerInput.includes('process') || lowerInput.includes('approach') || lowerInput.includes('how do you work')) {
      return `Our proven 4-step methodology ensures successful project delivery and measurable results:

**1. Discovery & Analysis**
We begin by thoroughly understanding your unique challenges, goals, and requirements through comprehensive analysis and stakeholder engagement.

**2. Strategic Planning**
We develop customized strategies and detailed roadmaps that align with your business objectives and deliver measurable results.

**3. Implementation**
We execute solutions with precision, maintaining clear communication and delivering key milestones according to schedule.

**4. Optimization**
We continuously monitor, measure, and optimize solutions to ensure sustained success and maximum return on investment.

This methodology is applied across all our service areas and ensures that every project delivers real business value. Would you like to know more about how this approach would apply to your specific situation?`;
    }

    // Default enhanced response
    return `I'm here to help you discover how ASK Trading & Projects can transform your business! I can provide detailed information about:

🔹 **Our Services** - Business consulting, digital transformation, technology solutions, data analytics, project management, and training
🔹 **Company Information** - Our background, mission, and approach
🔹 **Methodology** - Our proven 4-step process for successful delivery
🔹 **Contact Details** - How to reach us for consultations
🔹 **Specific Solutions** - How we can address your particular business challenges

What specific aspect would you like to explore? You can ask about any of our services, our approach to solving business challenges, or how we might help with your particular situation.`;
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
    const currentInput = inputValue;
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await generateAIResponse(currentInput);
      
      // Simulate a more natural typing delay
      setTimeout(() => {
        const botResponse: Message = {
          id: messages.length + 2,
          text: response,
          isBot: true,
          timestamp: new Date()
        };

        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
      }, 1000 + Math.random() * 1500);
    } catch (error) {
      setTimeout(() => {
        const errorResponse: Message = {
          id: messages.length + 2,
          text: "I apologize, but I'm experiencing some technical difficulties. Please try again in a moment or contact us directly at info@asktrading.co.za for immediate assistance.",
          isBot: true,
          timestamp: new Date()
        };

        setMessages(prev => [...prev, errorResponse]);
        setIsTyping(false);
      }, 1000);
    }
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
                <h3 className="font-semibold text-sm sm:text-base truncate">ASK AI Assistant</h3>
                <p className="text-xs text-gray-300 hidden sm:block">Powered by AI • Ready to help</p>
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
                        <p className="text-xs sm:text-sm leading-relaxed break-words whitespace-pre-wrap">{message.text}</p>
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
                    disabled={isTyping}
                    placeholder="Ask me anything about our services..."
                    className="flex-1 px-2.5 py-2 sm:px-3 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff0000] focus:border-transparent text-xs sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    className="bg-[#ff0000] hover:bg-[#c55555] disabled:bg-gray-300 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-colors flex-shrink-0"
                  >
                    <Send className="h-3 w-3 sm:h-4 sm:w-4" />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Powered by AI • Responses may take a moment
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Chatbot;