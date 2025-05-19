
import React from "react";
import PublicNavbar from "@/components/layout/PublicNavbar";
import { Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-forest-900">
      {/* Header/Navigation */}
      <PublicNavbar />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-forest-900 dark:text-white mb-4">About LeadShield</h1>
          <p className="text-lg text-forest-600 dark:text-forest-300 max-w-3xl mx-auto">
            We're on a mission to help businesses protect themselves from fraudulent leads and focus on genuine opportunities.
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-forest-900 dark:text-white mb-6">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-forest-700 dark:text-forest-200 mb-4">
                LeadShield was founded in 2023 after our founder experienced firsthand the frustration of dealing with fake leads that wasted time and resources.
              </p>
              <p className="text-forest-700 dark:text-forest-200 mb-4">
                What started as an internal tool quickly evolved into a comprehensive platform that helps businesses of all sizes identify and filter out fraudulent leads before they enter the sales funnel.
              </p>
              <p className="text-forest-700 dark:text-forest-200">
                Today, LeadShield protects thousands of businesses worldwide, saving them countless hours and resources that would otherwise be wasted on fake leads.
              </p>
            </div>
            <div className="bg-forest-50 dark:bg-forest-800 p-8 rounded-lg">
              <div className="aspect-video bg-forest-100 dark:bg-forest-700 rounded-md animate-pulse-soft mb-4"></div>
              <p className="text-sm text-forest-500 font-medium">Our headquarters in San Francisco, CA</p>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-forest-900 dark:text-white mb-6">Our Mission</h2>
          <div className="bg-forest-50 dark:bg-forest-800 p-8 rounded-lg">
            <p className="text-xl text-forest-700 dark:text-forest-200 italic mb-4">
              "To empower businesses with intelligent tools that protect them from fraud and enable them to focus on genuine growth opportunities."
            </p>
            <p className="text-forest-500 font-medium">— LeadShield Mission Statement</p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-forest-900 dark:text-white mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-forest-800 p-6 rounded-lg border border-forest-100 dark:border-forest-700">
              <div className="bg-forest-50 dark:bg-forest-700 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-forest-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-forest-900 dark:text-white">Protection</h3>
              <p className="text-forest-600 dark:text-forest-300">
                We believe in creating robust systems that shield businesses from potential threats and vulnerabilities.
              </p>
            </div>
            <div className="bg-white dark:bg-forest-800 p-6 rounded-lg border border-forest-100 dark:border-forest-700">
              <div className="bg-forest-50 dark:bg-forest-700 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-forest-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-forest-900 dark:text-white">Trust</h3>
              <p className="text-forest-600 dark:text-forest-300">
                We build relationships based on transparency, reliability, and consistent delivery of quality service.
              </p>
            </div>
            <div className="bg-white dark:bg-forest-800 p-6 rounded-lg border border-forest-100 dark:border-forest-700">
              <div className="bg-forest-50 dark:bg-forest-700 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-forest-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-forest-900 dark:text-white">Innovation</h3>
              <p className="text-forest-600 dark:text-forest-300">
                We continuously evolve our technology to stay ahead of emerging threats and provide cutting-edge solutions.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-forest-900 border-t border-forest-100 dark:border-forest-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-forest-600 dark:text-forest-300">
            &copy; {new Date().getFullYear()} LeadShield. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
