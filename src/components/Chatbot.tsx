import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User, Loader2, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: "Hi! I'm your ASK Trading & Projects assistant. I'm here to help you understand our professional business and technology solutions. How can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Smart response system with comprehensive ASK Trading & Projects knowledge
  const getAssistantResponse = async (userMessage: string): Promise<string> => {
    const message = userMessage.toLowerCase();
    
    // Try API first, then fallback to local responses
    try {
      const apiResponse = await getAPIResponse(userMessage);
      if (apiResponse) return apiResponse;
    } catch (error) {
      console.log('API unavailable, using local responses');
    }
    
    // Greeting responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('good morning') || message.includes('good afternoon')) {
      return "Hello! Welcome to ASK Trading & Projects. I'm here to help you discover how our professional business and technology solutions can transform your organization. Are you looking to optimize operations, implement digital transformation, or explore our other services?";
    }
    
    // Company information
    if (message.includes('company') || message.includes('about') || message.includes('who are you') || message.includes('tell me about')) {
      return "ASK Trading and Projects (Pty) Ltd is a dynamic private company established in May 2025 with the mission 'You ASK and We provide.' We're based in Johannesburg, South Africa (Registration: 2025/423136/07) and specialize in:\n\n• Business Consulting & Strategic Planning\n• Digital Transformation Solutions\n• Custom Technology Development\n• Data Analytics & Business Intelligence\n• Project Management Services\n• Training & Development Programs\n\nWe combine innovation with proven methodologies to deliver measurable business results.";
    }
    
    // Services overview
    if (message.includes('service') || message.includes('what do you do') || message.includes('offer') || message.includes('help with')) {
      return "We offer six comprehensive service areas:\n\n🔹 **Business Consulting** - Strategic guidance, process optimization, market research\n🔹 **Digital Transformation** - Modernizing operations, automation, cloud migration\n🔹 **Technology Solutions** - Custom software, web/mobile apps, system integration\n🔹 **Data Analytics & Intelligence** - BI dashboards, predictive analytics, reporting\n🔹 **Project Management** - End-to-end delivery, risk management, quality assurance\n🔹 **Training & Development** - Technology training, leadership development, certification\n\nWhich service area interests you most?";
    }
    
    // Business Consulting
    if (message.includes('business consulting') || message.includes('consulting') || message.includes('strategy') || message.includes('optimization')) {
      return "Our Business Consulting services help optimize your operations and accelerate growth:\n\n• **Business Process Optimization** - Streamline workflows, eliminate inefficiencies\n• **Strategic Planning & Analysis** - Data-driven roadmaps for growth\n• **Market Research & Intelligence** - Competitive insights and positioning\n• **Performance Management** - KPI frameworks and measurement tools\n• **Risk Assessment & Mitigation** - Identify and address business risks\n• **Compliance & Regulatory Support** - Ensure industry standard adherence\n\nWe work closely with your team to understand unique challenges and deliver customized solutions. What specific business challenges are you facing?";
    }
    
    // Digital Transformation
    if (message.includes('digital transformation') || message.includes('digital') || message.includes('automation') || message.includes('modernize')) {
      return "Our Digital Transformation services modernize your business for future success:\n\n• **Digital Strategy Development** - Comprehensive digital adoption roadmaps\n• **Technology Implementation** - Seamless integration of modern solutions\n• **Process Automation** - Reduce manual work, increase efficiency\n• **Cloud Migration Services** - Secure, scalable cloud infrastructure\n• **Digital Marketing Solutions** - Enhanced online presence and reach\n• **E-commerce Development** - Robust online sales platforms\n\nDigital transformation isn't just technology—it's reimagining how your business operates. What digital challenges is your organization facing?";
    }
    
    // Technology Solutions
    if (message.includes('technology') || message.includes('software') || message.includes('development') || message.includes('app') || message.includes('system')) {
      return "Our Technology Solutions deliver cutting-edge custom development:\n\n• **Custom Software Development** - Tailored applications for unique requirements\n• **Web & Mobile Applications** - Responsive, user-friendly experiences\n• **Database Design & Management** - Secure, scalable data architecture\n• **System Integration Services** - Connect disparate systems seamlessly\n• **API Development & Integration** - Enable smooth data flow between platforms\n• **Technical Support & Maintenance** - Ongoing support for optimal performance\n\nWe use modern technologies and best practices to deliver scalable solutions. What type of technology solution are you considering?";
    }
    
    // Data Analytics
    if (message.includes('data') || message.includes('analytics') || message.includes('intelligence') || message.includes('reporting') || message.includes('dashboard')) {
      return "Our Data Analytics & Intelligence services transform data into actionable insights:\n\n• **Business Intelligence Dashboards** - Real-time visibility into key metrics\n• **Predictive Analytics Solutions** - Forecast trends and opportunities\n• **Data Visualization & Reporting** - Clear, compelling data presentations\n• **Performance Metrics & KPIs** - Track what matters most\n• **Custom Reporting Solutions** - Automated, tailored reports\n• **Data Mining & Analysis** - Uncover hidden patterns and insights\n\nWe help you harness data power for informed decisions and competitive advantages. What data challenges is your organization facing?";
    }
    
    // Project Management
    if (message.includes('project management') || message.includes('project') || message.includes('delivery') || message.includes('implementation')) {
      return "Our Project Management services ensure successful delivery of complex initiatives:\n\n• **Project Planning & Execution** - Detailed roadmaps with clear milestones\n• **Resource Management** - Optimize team productivity and efficiency\n• **Risk Management & Mitigation** - Proactive identification and resolution\n• **Quality Assurance & Control** - Maintain high standards throughout\n• **Stakeholder Communication** - Keep everyone informed and aligned\n• **Change Management Support** - Smooth transitions and user adoption\n\nWe use proven methodologies to deliver on time, within budget, exceeding expectations. Do you have specific projects you'd like to discuss?";
    }
    
    // Training & Development
    if (message.includes('training') || message.includes('development') || message.includes('education') || message.includes('learning') || message.includes('skills')) {
      return "Our Training & Development programs ensure successful technology adoption:\n\n• **Technology Training Programs** - Hands-on learning for new systems\n• **Process & Workflow Training** - Optimize team efficiency\n• **Leadership Development** - Build strong management capabilities\n• **Custom Workshop Design** - Tailored learning experiences\n• **Ongoing Support & Mentoring** - Continuous guidance and assistance\n• **Certification Programs** - Industry-recognized credentials\n\nSuccessful implementation requires proper training. Our programs are engaging, practical, and immediately applicable. What training needs does your organization have?";
    }
    
    // Pricing and costs
    if (message.includes('cost') || message.includes('price') || message.includes('pricing') || message.includes('budget') || message.includes('quote')) {
      return "Our pricing is customized based on your specific needs and project scope. We offer:\n\n• **Project-based pricing** - Fixed cost for defined deliverables\n• **Retainer agreements** - Ongoing support and services\n• **Hourly consulting** - Flexible support as needed\n\nWe believe in transparent, value-based pricing that delivers measurable ROI. For an accurate quote, we'd need to understand your requirements.\n\n📞 Contact us: +27 83 303 5688\n📧 Email: info@asktrading.co.za\n\nWould you like to schedule a complimentary consultation?";
    }
    
    // Contact information
    if (message.includes('contact') || message.includes('email') || message.includes('phone') || message.includes('reach') || message.includes('address')) {
      return "Here's how to reach ASK Trading & Projects:\n\n📧 **Email:** info@asktrading.co.za\n📞 **Phone:** +27 83 303 5688\n📍 **Address:** 3 Halifax, Johannesburg, Gauteng, 2191, South Africa\n\n🕒 **Business Hours:**\nMonday-Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM\nSunday: By appointment\n(SAST UTC+2)\n\nWe respond to all inquiries within 24 hours and offer complimentary consultations. Would you like to schedule a meeting?";
    }
    
    // Methodology and process
    if (message.includes('methodology') || message.includes('process') || message.includes('approach') || message.includes('how do you work')) {
      return "Our proven 4-step methodology ensures successful delivery:\n\n**1. Discovery & Analysis**\nThoroughly understand your challenges, goals, and requirements through comprehensive analysis and stakeholder engagement.\n\n**2. Strategic Planning**\nDevelop customized strategies and detailed roadmaps aligned with your business objectives.\n\n**3. Implementation**\nExecute solutions with precision, maintaining clear communication and delivering milestones on schedule.\n\n**4. Optimization**\nContinuously monitor, measure, and optimize for sustained success and maximum ROI.\n\nThis approach applies across all service areas. How would this methodology benefit your specific situation?";
    }
    
    // Location and service area
    if (message.includes('location') || message.includes('where') || message.includes('johannesburg') || message.includes('south africa')) {
      return "ASK Trading & Projects is based in Johannesburg, Gauteng, South Africa:\n\n📍 **Registered Office:** 3 Halifax, Johannesburg, Gauteng, 2191\n🌍 **Service Area:** We serve clients throughout South Africa and internationally\n🏢 **Registration:** 2025/423136/07 (Private Company)\n📅 **Established:** May 2025\n\nWhile our headquarters are in Johannesburg, we work with clients across various locations through remote collaboration and on-site visits as needed. Where is your organization located?";
    }
    
    // Getting started
    if (message.includes('start') || message.includes('begin') || message.includes('first step') || message.includes('how to')) {
      return "Getting started with ASK Trading & Projects is simple:\n\n**Step 1: Initial Consultation**\nSchedule a complimentary consultation to discuss your needs and challenges.\n\n**Step 2: Needs Assessment**\nWe'll analyze your requirements and recommend the best solutions.\n\n**Step 3: Proposal & Planning**\nReceive a detailed proposal with timeline, deliverables, and pricing.\n\n**Step 4: Project Kickoff**\nBegin implementation with our proven methodology.\n\n📞 Call: +27 83 303 5688\n📧 Email: info@asktrading.co.za\n\nWhat specific challenge would you like to address first?";
    }
    
    // Technical questions
    if (message.includes('technology stack') || message.includes('tools') || message.includes('platforms') || message.includes('technical')) {
      return "We work with modern, industry-standard technologies:\n\n**Development:** React, Node.js, Python, .NET, Java\n**Databases:** SQL Server, PostgreSQL, MongoDB, MySQL\n**Cloud Platforms:** Azure, AWS, Google Cloud\n**Analytics:** Power BI, Tableau, Python analytics libraries\n**Project Management:** Agile, Scrum, Waterfall methodologies\n**Integration:** REST APIs, GraphQL, microservices\n\nWe select the best technology stack based on your specific requirements, existing infrastructure, and long-term goals. What technical challenges are you facing?";
    }
    
    // Industry experience
    if (message.includes('industry') || message.includes('sector') || message.includes('experience') || message.includes('clients')) {
      return "We serve clients across various industries with tailored solutions:\n\n• **Financial Services** - Banking, insurance, fintech solutions\n• **Healthcare** - Patient management, compliance systems\n• **Manufacturing** - Process optimization, supply chain management\n• **Retail & E-commerce** - Online platforms, inventory management\n• **Education** - Learning management systems, student portals\n• **Government** - Public sector digital transformation\n• **Professional Services** - Practice management, client portals\n\nOur approach adapts to each industry's unique requirements and regulations. What industry is your organization in?";
    }
    
    // Default helpful response
    const helpfulResponses = [
      "I'd be happy to help! Could you be more specific about what you'd like to know? I can explain our services, methodology, pricing, or how we can help with your specific business challenges.",
      "Great question! I can provide information about our business consulting, digital transformation, technology solutions, data analytics, project management, or training services. What interests you most?",
      "I'm here to assist! Whether you're looking to optimize operations, implement new technology, or transform your business processes, I can guide you through our solutions. What would be most helpful?",
      "Thanks for asking! I can help you understand how ASK Trading & Projects can address your business needs. We specialize in strategic consulting, technology implementation, and digital transformation. What challenges are you facing?",
      "I'd love to help you explore how our services can benefit your organization! From business strategy to technology solutions, we offer comprehensive support. What specific area would you like to discuss?"
    ];
    
    return helpfulResponses[Math.floor(Math.random() * helpfulResponses.length)];
  };

  // API response function
  const getAPIResponse = async (userMessage: string): Promise<string | null> => {
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

You should be helpful, professional, and knowledgeable about business and technology topics. For business-related questions, always try to relate responses back to how ASK Trading and Projects can help solve business challenges. For general questions not related to business, provide helpful and informative answers while maintaining a professional tone. Keep responses concise but informative. If asked about pricing, mention that it's customized based on needs and suggest contacting for a consultation.`;

      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer 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',
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
              content: userMessage
            }
          ],
          max_tokens: 500,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0]?.message?.content || null;
    } catch (error) {
      console.error('API Error:', error);
      return null;
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputMessage;
    setInputMessage('');
    setIsTyping(true);

    try {
      // Get response (API first, then fallback)
      const response = await getAssistantResponse(currentInput);
      
      // Simulate typing delay for natural feel
      setTimeout(() => {
        const assistantResponse: Message = {
          id: (Date.now() + 1).toString(),
          type: 'assistant',
          content: response,
          timestamp: new Date()
        };

        setMessages(prev => [...prev, assistantResponse]);
        setIsTyping(false);
      }, 1000 + Math.random() * 1000); // 1-2 second delay
    } catch (error) {
      setTimeout(() => {
        const errorResponse: Message = {
          id: (Date.now() + 1).toString(),
          type: 'assistant',
          content: "I apologize, but I'm experiencing some technical difficulties. Please try again or contact us directly at info@asktrading.co.za for immediate assistance.",
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

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-gradient-to-r from-[#ff0000] to-[#c55555] hover:from-[#c55555] hover:to-[#ff0000] text-white p-3 sm:p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 animate-pulse"
        aria-label="Open chat assistant"
        style={{ zIndex: 9999 }}
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
    );
  }

  return (
    <>
      {/* Mobile Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setIsOpen(false)} />
      
      {/* Chat Window */}
      <div className={`fixed z-50 transition-all duration-300 ${
        isMinimized 
          ? 'bottom-4 right-4 w-72 h-14 sm:bottom-6 sm:right-6 sm:w-80 sm:h-16'
          : 'inset-4 md:bottom-6 md:right-6 md:top-auto md:left-auto md:w-96 md:h-[500px] lg:w-[420px] lg:h-[550px]'
      } bg-white rounded-lg shadow-2xl border border-gray-200`}
      style={{ zIndex: 9999 }}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200 bg-gradient-to-r from-[#2f4463] to-[#1a2537] rounded-t-lg">
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
            <div className="bg-[#ff0000] rounded-full p-1.5 sm:p-2 flex-shrink-0">
              <Bot className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-white font-semibold text-sm sm:text-base truncate">ASK Assistant</h3>
              {!isMinimized && (
                <p className="text-white/80 text-xs hidden sm:block">Always here to help</p>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white hover:text-gray-200 transition-colors p-1 rounded hidden md:block"
              aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
            >
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors p-1 rounded"
              aria-label="Close chat"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4" style={{ 
              height: 'calc(100% - 140px)',
              maxHeight: 'calc(100vh - 200px)'
            }}>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[90%] sm:max-w-[85%] ${
                    message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}>
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === 'user' 
                        ? 'bg-[#ff0000]' 
                        : 'bg-gradient-to-r from-[#2f4463] to-[#1a2537]'
                    }`}>
                      {message.type === 'user' ? (
                        <User className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                      ) : (
                        <Bot className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                      )}
                    </div>
                    <div className={`rounded-lg p-2 sm:p-3 ${
                      message.type === 'user'
                        ? 'bg-[#ff0000] text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <div className="text-xs sm:text-sm whitespace-pre-line leading-relaxed break-words">
                        {message.content}
                      </div>
                      <div className={`text-xs mt-1 ${
                        message.type === 'user' ? 'text-red-100' : 'text-gray-500'
                      }`}>
                        {formatTime(message.timestamp)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2 max-w-[90%] sm:max-w-[85%]">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-[#2f4463] to-[#1a2537] flex items-center justify-center flex-shrink-0">
                      <Bot className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                    </div>
                    <div className="bg-gray-100 rounded-lg p-2 sm:p-3">
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#ff0000] rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#ff0000] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#ff0000] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 sm:p-4 border-t border-gray-200 bg-white rounded-b-lg">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about our services..."
                  className="flex-1 px-2 py-2 sm:px-3 sm:py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:border-[#ff0000] focus:ring-1 focus:ring-[#ff0000] focus:outline-none text-xs sm:text-sm"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className="bg-gradient-to-r from-[#ff0000] to-[#c55555] hover:from-[#c55555] hover:to-[#ff0000] disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed text-white p-2 rounded-md transition-all transform hover:scale-105 disabled:scale-100 shadow-lg flex-shrink-0 flex items-center justify-center"
                >
                  {isTyping ? (
                    <Loader2 className="h-3 w-3 sm:h-4 sm:w-4 animate-spin" />
                  ) : (
                    <Send className="h-3 w-3 sm:h-4 sm:w-4" />
                  )}
                </button>
              </div>
              
              {/* Quick suggestions */}
              <div className="mt-2 flex flex-wrap gap-1 hidden sm:flex">
                {[
                  "What services do you offer?",
                  "How much does it cost?",
                  "How do you work?",
                  "Contact information?"
                ].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setInputMessage(suggestion)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded transition-colors"
                    disabled={isTyping}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
              
              {/* Mobile quick suggestions */}
              <div className="mt-2 flex flex-wrap gap-1 sm:hidden">
                {[
                  "Services?",
                  "Pricing?",
                  "How it works?",
                  "Contact?"
                ].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setInputMessage(suggestion)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded transition-colors"
                    disabled={isTyping}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Chatbot;