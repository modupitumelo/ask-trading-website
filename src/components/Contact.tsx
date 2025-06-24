import React, { useState } from 'react';
import { Mail, MapPin, FileText, Globe, ArrowRight, Send, User, MessageSquare, Building, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Business Inquiry from ${formData.name} - ${formData.service}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone}
Service Interest: ${formData.service}

Message:
${formData.message}
    `;
    
    const mailtoLink = `mailto:sepatoandrew@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 bg-[#2f4463] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner with Us Today
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Ready to transform your business? Let's discuss how ASK Trading and Projects 
            can help you achieve your goals and unlock your organization's full potential.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <MessageSquare className="h-6 w-6 text-[#ff0000] mr-3" />
              Get Started Today
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff0000] focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff0000] focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff0000] focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff0000] focus:border-transparent"
                    placeholder="+27 XX XXX XXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff0000] focus:border-transparent"
                >
                  <option value="" className="text-gray-800">Select a service...</option>
                  <option value="Business Consulting" className="text-gray-800">Business Consulting</option>
                  <option value="Digital Transformation" className="text-gray-800">Digital Transformation</option>
                  <option value="Technology Solutions" className="text-gray-800">Technology Solutions</option>
                  <option value="Data Analytics & Intelligence" className="text-gray-800">Data Analytics & Intelligence</option>
                  <option value="Project Management" className="text-gray-800">Project Management</option>
                  <option value="Training & Development" className="text-gray-800">Training & Development</option>
                  <option value="General Inquiry" className="text-gray-800">General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff0000] focus:border-transparent resize-none"
                  placeholder="Tell us about your project, challenges, or goals. The more details you provide, the better we can assist you."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#ff0000] hover:bg-[#c55555] text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-colors duration-200"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                We're here to help you succeed. Reach out to us through any of the channels below, 
                and we'll get back to you within 24 hours with a personalized response.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
              <div className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-colors duration-300">
                <Mail className="h-8 w-8 text-[#ff0000] mb-3" />
                <h4 className="text-lg font-bold mb-2">Email</h4>
                <a 
                  href="mailto:sepatoandrew@gmail.com" 
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  info@asktrading.co.za
                </a>
               
                <p className="text-sm text-gray-400 mt-2">
                  We respond within 24 hours
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-colors duration-300">
                <Phone className="h-8 w-8 text-[#ff0000] mb-3" />
                <h4 className="text-lg font-bold mb-2">Direct Line</h4>
                <a 
                  href="tel:+27833035688" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +27 83 303 5688
                </a>
                <p className="text-sm text-gray-400 mt-2">
                  Call during business hours
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-colors duration-300">
                <MapPin className="h-8 w-8 text-[#ff0000] mb-3" />
                <h4 className="text-lg font-bold mb-2">Registered Office</h4>
                <p className="text-gray-300">
                  3 Halifax, Johannesburg<br />
                  Gauteng, 2191<br />
                  South Africa
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-colors duration-300">
                <FileText className="h-8 w-8 text-[#ff0000] mb-3" />
                <h4 className="text-lg font-bold mb-2">Company Registration</h4>
                <p className="text-gray-300">
                  Registration Number:<br />
                  <span className="font-semibold">2025/423136/07</span>
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Established May 2025
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-colors duration-300">
                <Globe className="h-8 w-8 text-[#ff0000] mb-3" />
                <h4 className="text-lg font-bold mb-2">Business Hours</h4>
                <p className="text-gray-300">
                  Monday - Friday: 8:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 2:00 PM<br />
                  Sunday: By appointment
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  SAST (UTC+2)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white/5 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Schedule a complimentary consultation to discuss your project requirements 
            and discover how we can help transform your business.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-[#ff0000] hover:bg-[#c55555] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
          >
            Schedule Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
