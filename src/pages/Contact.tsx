
import React, { useState } from "react";
import { Shield, Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to a backend service
    console.log("Form submitted:", formData);
    
    // Show success message
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-forest-900">
      {/* Header/Navigation */}
      <header className="bg-white dark:bg-forest-900 border-b border-forest-100 dark:border-forest-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Link to="/">
                <div className="flex items-center space-x-2">
                  <Shield className="h-8 w-8 text-forest-500" />
                  <span className="font-bold text-xl text-forest-900 dark:text-white">LeadShield</span>
                </div>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline">Log In</Button>
              </Link>
              <Link to="/login?tab=signup">
                <Button className="bg-forest-500 hover:bg-forest-600 dark:bg-forest-500 dark:hover:bg-forest-600">
                  Sign Up Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-forest-900 dark:text-white mb-4">Contact Us</h1>
          <p className="text-lg text-forest-600 dark:text-forest-300 max-w-3xl mx-auto">
            Have questions or want to learn more about LeadShield? We're here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-1">
            <div className="bg-forest-50 dark:bg-forest-800 rounded-lg p-6 sticky top-32">
              <h2 className="text-xl font-semibold text-forest-900 dark:text-white mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-forest-500 mt-1 mr-3" />
                  <div>
                    <h3 className="text-sm font-medium text-forest-900 dark:text-white">Email</h3>
                    <p className="text-forest-600 dark:text-forest-300">support@leadshield.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-forest-500 mt-1 mr-3" />
                  <div>
                    <h3 className="text-sm font-medium text-forest-900 dark:text-white">Phone</h3>
                    <p className="text-forest-600 dark:text-forest-300">+1 (800) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-forest-500 mt-1 mr-3" />
                  <div>
                    <h3 className="text-sm font-medium text-forest-900 dark:text-white">Office</h3>
                    <p className="text-forest-600 dark:text-forest-300">
                      123 Market Street<br />
                      Suite 100<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-forest-100 dark:border-forest-700">
                <h3 className="text-sm font-medium text-forest-900 dark:text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-forest-500 hover:text-forest-700 dark:hover:text-forest-300">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-forest-500 hover:text-forest-700 dark:hover:text-forest-300">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-white dark:bg-forest-800 rounded-lg p-6 border border-forest-100 dark:border-forest-700">
              <h2 className="text-xl font-semibold text-forest-900 dark:text-white mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-forest-900 dark:text-white mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-forest-200 dark:border-forest-600 dark:bg-forest-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-forest-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-forest-900 dark:text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-forest-200 dark:border-forest-600 dark:bg-forest-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-forest-500"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-forest-900 dark:text-white mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-forest-200 dark:border-forest-600 dark:bg-forest-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-forest-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-forest-900 dark:text-white mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-forest-200 dark:border-forest-600 dark:bg-forest-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-forest-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-forest-900 dark:text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 rounded-lg border border-forest-200 dark:border-forest-600 dark:bg-forest-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-forest-500"
                  ></textarea>
                </div>
                
                <div className="flex justify-end">
                  <Button type="submit" className="bg-forest-500 hover:bg-forest-600">
                    <Send className="h-4 w-4 mr-2" /> Send Message
                  </Button>
                </div>
              </form>
            </div>
            
            {/* FAQ */}
            <div className="mt-8 bg-white dark:bg-forest-800 rounded-lg p-6 border border-forest-100 dark:border-forest-700">
              <h2 className="text-xl font-semibold text-forest-900 dark:text-white mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-forest-900 dark:text-white mb-2">How quickly can I expect a response?</h3>
                  <p className="text-forest-600 dark:text-forest-300">
                    We typically respond to all inquiries within 1 business day. For urgent matters, please call our support line.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-forest-900 dark:text-white mb-2">Do you offer technical support?</h3>
                  <p className="text-forest-600 dark:text-forest-300">
                    Yes, our technical support team is available Monday-Friday, 9am-5pm PST. Premium plans include 24/7 support.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-forest-900 dark:text-white mb-2">Can I schedule a demo?</h3>
                  <p className="text-forest-600 dark:text-forest-300">
                    Absolutely! You can schedule a demo through our contact form or by emailing sales@leadshield.com directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-forest-900 border-t border-forest-100 dark:border-forest-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-forest-600 dark:text-forest-300">
            &copy; {new Date().getFullYear()} LeadShield. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
