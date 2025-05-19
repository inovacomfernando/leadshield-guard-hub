import React from "react";
import { Link } from "react-router-dom";
import { Shield, CheckCircle, ChevronRight, ArrowRight, Users, Settings, CreditCard, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import DarkModeToggle from "@/components/layout/DarkModeToggle";
import { useTheme } from "@/context/ThemeContext";

const Index = () => {
  const { theme } = useTheme();
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="bg-white dark:bg-forest-900 border-b border-forest-100 dark:border-forest-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-forest-500" />
              <span className="font-bold text-xl text-forest-900 dark:text-white">LeadShield</span>
            </div>
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex space-x-6">
                <a href="#features" className="text-forest-700 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-500">
                  Features
                </a>
                <a href="#pricing" className="text-forest-700 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-500">
                  Pricing
                </a>
                <Link to="/about" className="text-forest-700 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-500">
                  About
                </Link>
                <Link to="/blog" className="text-forest-700 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-500">
                  Blog
                </Link>
                <Link to="/contact" className="text-forest-700 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-500">
                  Contact
                </Link>
              </nav>
              <DarkModeToggle />
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

      {/* Hero */}
      <section className="bg-gradient-to-b from-forest-50 to-white dark:from-forest-900 dark:to-forest-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-forest-900 dark:text-white tracking-tight">
                Protect Your Business from <span className="text-forest-500">Fraudulent Leads</span>
              </h1>
              <p className="mt-4 text-lg text-forest-700 dark:text-forest-200">
                LeadShield uses AI-powered scoring to identify and block suspicious leads before they waste your time and resources.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/login?tab=signup">
                  <Button size="lg" className="bg-forest-500 hover:bg-forest-600">
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="#features">
                  <Button variant="outline" size="lg">
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
              <div className="mt-6 flex items-center">
                <CheckCircle className="h-5 w-5 text-forest-500" />
                <span className="ml-2 text-sm text-forest-700 dark:text-forest-300">No credit card required</span>
                <span className="mx-2 text-forest-400">•</span>
                <CheckCircle className="h-5 w-5 text-forest-500" />
                <span className="ml-2 text-sm text-forest-700 dark:text-forest-300">Cancel anytime</span>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white dark:bg-forest-800 shadow-xl rounded-2xl overflow-hidden border border-forest-100 dark:border-forest-700">
                <div className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <Shield className="h-12 w-12 text-forest-500" />
                  </div>
                  <div className="space-y-4">
                    <div className="h-8 bg-forest-100 dark:bg-forest-700 rounded-md animate-pulse-soft"></div>
                    <div className="h-24 bg-forest-100 dark:bg-forest-700 rounded-md animate-pulse-soft"></div>
                    <div className="flex justify-between gap-2">
                      <div className="h-14 bg-forest-100 dark:bg-forest-700 rounded-md w-1/3 animate-pulse-soft"></div>
                      <div className="h-14 bg-forest-100 dark:bg-forest-700 rounded-md w-1/3 animate-pulse-soft"></div>
                      <div className="h-14 bg-forest-100 dark:bg-forest-700 rounded-md w-1/3 animate-pulse-soft"></div>
                    </div>
                    <div className="h-40 bg-forest-100 dark:bg-forest-700 rounded-md animate-pulse-soft"></div>
                  </div>
                </div>
                <div className="px-6 py-4 bg-forest-50 dark:bg-forest-700/50 border-t border-forest-100 dark:border-forest-700 flex justify-between items-center">
                  <span className="text-sm text-forest-500 font-medium">Lead Shield Dashboard</span>
                  <span className="text-xs text-forest-400 dark:text-forest-500">Real-time protection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white dark:bg-forest-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-forest-900 dark:text-white">Powerful Features</h2>
            <p className="mt-4 text-lg text-forest-600 dark:text-forest-300">
              Everything you need to protect your business from fraudulent leads
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-forest-50 dark:bg-forest-800 rounded-lg p-6 border border-forest-100 dark:border-forest-700 hover-scale">
              <div className="bg-forest-100 dark:bg-forest-700 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-forest-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-forest-900 dark:text-white">Intelligent Scoring</h3>
              <p className="text-forest-600 dark:text-forest-300">
                Our AI-powered algorithm analyzes multiple data points to assign a risk score to each lead.
              </p>
            </div>

            <div className="bg-forest-50 dark:bg-forest-800 rounded-lg p-6 border border-forest-100 dark:border-forest-700 hover-scale">
              <div className="bg-forest-100 dark:bg-forest-700 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Settings className="h-6 w-6 text-forest-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-forest-900 dark:text-white">Custom Rules</h3>
              <p className="text-forest-600 dark:text-forest-300">
                Create and customize scoring rules based on your unique business needs and requirements.
              </p>
            </div>

            <div className="bg-forest-50 dark:bg-forest-800 rounded-lg p-6 border border-forest-100 dark:border-forest-700 hover-scale">
              <div className="bg-forest-100 dark:bg-forest-700 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-forest-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-forest-900 dark:text-white">Team Collaboration</h3>
              <p className="text-forest-600 dark:text-forest-300">
                Add team members with different roles and permissions to manage leads collectively.
              </p>
            </div>

            <div className="bg-forest-50 dark:bg-forest-800 rounded-lg p-6 border border-forest-100 dark:border-forest-700 hover-scale">
              <div className="bg-forest-100 dark:bg-forest-700 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-forest-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-forest-900 dark:text-white">Flexible Billing</h3>
              <p className="text-forest-600 dark:text-forest-300">
                Choose between monthly and annual billing with plans that scale as your business grows.
              </p>
            </div>

            <div className="bg-forest-50 dark:bg-forest-800 rounded-lg p-6 border border-forest-100 dark:border-forest-700 hover-scale">
              <div className="bg-forest-100 dark:bg-forest-700 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-forest-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-forest-900 dark:text-white">Real-time Protection</h3>
              <p className="text-forest-600 dark:text-forest-300">
                Identify and block suspicious leads in real-time before they enter your sales funnel.
              </p>
            </div>

            <div className="bg-forest-50 dark:bg-forest-800 rounded-lg p-6 border border-forest-100 dark:border-forest-700 hover-scale">
              <div className="bg-forest-100 dark:bg-forest-700 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <ArrowRight className="h-6 w-6 text-forest-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-forest-900 dark:text-white">API Integration</h3>
              <p className="text-forest-600 dark:text-forest-300">
                Seamlessly integrate with your existing CRM, marketing tools, and other software systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="about" className="py-20 bg-forest-50 dark:bg-forest-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-forest-900 dark:text-white">Meet Our Founder</h2>
            <p className="mt-4 text-lg text-forest-600 dark:text-forest-300">
              The story behind LeadShield
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-forest-900 dark:text-white mb-4">
                Fernando Ramalho
              </h3>
              <p className="text-forest-700 dark:text-forest-200 italic mb-6">
                "I founded LeadShield after experiencing the frustration of wasted time and resources on fraudulent leads in my previous business. I knew there had to be a better way to protect companies from this common problem."
              </p>
              
              <p className="text-forest-600 dark:text-forest-300 mb-4">
                With over 15 years of experience in digital marketing and lead generation, Alex identified a critical gap in the market: the lack of robust tools to identify and prevent fraudulent leads before they waste valuable time and resources.
              </p>
              
              <p className="text-forest-600 dark:text-forest-300 mb-6">
                Since launching LeadShield in 2023, Alex has led the company to protect thousands of businesses worldwide, helping them save time, money, and focus on genuine growth opportunities.
              </p>
              
              <div className="flex space-x-4">
                <a href="#" className="text-forest-500 hover:text-forest-700 dark:hover:text-forest-300">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-forest-500 hover:text-forest-700 dark:hover:text-forest-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-white dark:bg-forest-700 rounded-xl shadow-xl overflow-hidden border border-forest-100 dark:border-forest-600">
                <div className="aspect-square bg-forest-200 dark:bg-forest-600 animate-pulse-soft"></div>
                <div className="p-4 bg-white dark:bg-forest-700">
                  <p className="text-center text-forest-500 font-medium">
                    Alex Morgan, Founder & CEO
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/about">
              <Button variant="outline" className="border-forest-500 text-forest-500">
                Learn More About Us
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white dark:bg-forest-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-forest-900 dark:text-white">Pricing Plans</h2>
            <p className="mt-4 text-lg text-forest-600 dark:text-forest-300">
              Choose the perfect plan for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Free Plan */}
            <div className="bg-white dark:bg-forest-900 rounded-lg overflow-hidden shadow-lg border border-forest-100 dark:border-forest-700 hover-scale">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-forest-900 dark:text-white">Free</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-forest-900 dark:text-white">$0</span>
                  <span className="text-forest-600 dark:text-forest-300">/mo</span>
                </div>
                <p className="text-forest-600 dark:text-forest-300 mb-6">Get started with basic lead protection</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-forest-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-forest-700 dark:text-forest-200">Up to 100 leads/month</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-forest-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-forest-700 dark:text-forest-200">Basic lead scoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-forest-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-forest-700 dark:text-forest-200">Email support</span>
                  </li>
                </ul>
              </div>
              <div className="px-6 pb-6">
                <Link to="/login?tab=signup">
                  <Button className="w-full bg-forest-500 hover:bg-forest-600">Sign Up Free</Button>
                </Link>
              </div>
            </div>
            
            {/* Start Plan */}
            <div className="bg-white dark:bg-forest-900 rounded-lg overflow-hidden shadow-lg border border-forest-100 dark:border-forest-700 hover-scale">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-forest-900 dark:text-white">Start</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-forest-900 dark:text-white">$49</span>
                  <span className="text-forest-600 dark:text-forest-300">/mo</span>
                </div>
                <p className="text-forest-600 dark:text-forest-300 mb-6">Protection for growing businesses</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-forest-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-forest-700 dark:text-forest-200">Up to 500 leads/month</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-forest-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-forest-700 dark:text-forest-200">Custom scoring rules (2)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-forest-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-forest-700 dark:text-forest-200">Team members (2)</span>
                  </li>
                </ul>
              </div>
              <div className="px-6 pb-6">
                <Link to="/login?tab=signup">
                  <Button className="w-full bg-forest-500 hover:bg-forest-600">Get Started</Button>
                </Link>
              </div>
            </div>
            
            {/* Growth Plan */}
            <div className="bg-white dark:bg-forest-900 rounded-lg overflow-hidden shadow-xl border-2 border-forest-500 hover-scale relative">
              <div className="bg-forest-500 text-white text-center text-sm py-1">
                Most Popular
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-forest-900 dark:text-white">Growth</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-forest-900 dark:text-white">$99</span>
                  <span className="text-forest-600 dark:text-forest-300">/mo</span>
                </div>
                <p className="text-forest-600 dark:text-forest-300 mb-6">Advanced protection & analytics</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-forest-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-forest-700 dark:text-forest-200">Up to 2,000 leads/month</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-forest-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-forest-700 dark:text-forest-200">Custom scoring rules (5)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-forest-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-forest-700 dark:text-forest-200">Team members (5)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-forest-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-forest-700 dark:text-forest-200">Advanced analytics</span>
                  </li>
                </ul>
              </div>
              <div className="px-6 pb-6">
                <Link to="/login?tab=signup">
                  <Button className="w-full bg-forest-500 hover:bg-forest-600">Get Started</Button>
                </Link>
              </div>
            </div>
            
            {/* Full Plan */}
            <div className="bg-white dark:bg-forest-900 rounded-lg overflow-hidden shadow-lg border border-forest-100 dark:border-forest-700 hover-scale">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-forest-900 dark:text-white">Full Shield</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-forest-900 dark:text-white">$249</span>
                  <span className="text-forest-600 dark:text-forest-300">/mo</span>
                </div>
                <p className="text-forest-600 dark:text-forest-300 mb-6">Enterprise-grade protection</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-forest-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-forest-700 dark:text-forest-200">Unlimited leads</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-forest-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-forest-700 dark:text-forest-200">Unlimited custom rules</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-forest-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-forest-700 dark:text-forest-200">Unlimited team members</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-forest-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-forest-700 dark:text-forest-200">24/7 priority support</span>
                  </li>
                </ul>
              </div>
              <div className="px-6 pb-6">
                <Link to="/login?tab=signup">
                  <Button className="w-full bg-forest-500 hover:bg-forest-600">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-forest-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to protect your business?</h2>
          <p className="text-lg text-forest-300 mb-8">
            Start using LeadShield today and stop wasting time and resources on fraudulent leads.
          </p>
          <Link to="/login?tab=signup">
            <Button size="lg" className="bg-forest-500 hover:bg-forest-600">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-forest-900 border-t border-forest-100 dark:border-forest-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6 text-forest-500" />
                <span className="font-bold text-lg text-forest-900 dark:text-white">LeadShield</span>
              </div>
              <p className="text-forest-600 dark:text-forest-300 mb-4">
                Protecting businesses from fraudulent leads with intelligent scoring.
              </p>
              <div className="flex space-x-4">
                <a href="https://instagram.com/leadshield" target="_blank" rel="noopener noreferrer" className="text-forest-500 hover:text-forest-700 dark:hover:text-forest-300">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://youtube.com/leadshield" target="_blank" rel="noopener noreferrer" className="text-forest-500 hover:text-forest-700 dark:hover:text-forest-300">
                  <span className="sr-only">YouTube</span>
                  <Youtube className="h-6 w-6" />
                </a>
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
            <div>
              <h3 className="font-semibold text-forest-900 dark:text-white mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-forest-600 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-500">Features</a></li>
                <li><a href="#pricing" className="text-forest-600 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-500">Pricing</a></li>
                <li><a href="#" className="text-forest-600 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-500">Integrations</a></li>
                <li><a href="#" className="text-forest-600 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-500">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-forest-900 dark:text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-forest-600 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-500">About</Link></li>
                <li><Link to="/blog" className="text-forest-600 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-500">Blog</Link></li>
                <li><Link to="/careers" className="text-forest-600 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-500">Careers</Link></li>
                <li><Link to="/contact" className="text-forest-600 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-500">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-forest-900 dark:text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/documentation" className="text-forest-600 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-500">Documentation</Link></li>
                <li><a href="#" className="text-forest-600 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-500">Support</a></li>
                <li><a href="#" className="text-forest-600 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-500">Privacy</a></li>
                <li><a href="#" className="text-forest-600 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-500">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-forest-100 dark:border-forest-800">
            <p className="text-forest-600 dark:text-forest-300 text-center">
              &copy; {new Date().getFullYear()} LeadShield. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
