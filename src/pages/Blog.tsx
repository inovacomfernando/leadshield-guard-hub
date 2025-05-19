
import React from "react";
import { Shield, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Blog = () => {
  // Mock blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "5 Ways to Identify Fraudulent Leads Before They Enter Your Pipeline",
      excerpt: "Learn the warning signs that can help you spot fake leads before they waste your time and resources.",
      date: "May 15, 2025",
      category: "Lead Qualification",
      imageClass: "bg-forest-100 dark:bg-forest-700"
    },
    {
      id: 2,
      title: "The Real Cost of Fraudulent Leads to Your Business",
      excerpt: "Beyond wasted time, fake leads can damage your metrics, team morale, and bottom line. Here's the true impact.",
      date: "May 10, 2025",
      category: "Research",
      imageClass: "bg-forest-200 dark:bg-forest-600"
    },
    {
      id: 3,
      title: "How AI is Transforming Lead Qualification Processes",
      excerpt: "Artificial intelligence is making lead scoring more accurate and efficient than ever before.",
      date: "May 5, 2025",
      category: "Technology",
      imageClass: "bg-forest-300 dark:bg-forest-500"
    },
    {
      id: 4,
      title: "Customer Success Story: How Company X Saved 30 Hours Per Week",
      excerpt: "See how one company used LeadShield to reclaim valuable time and focus on qualified prospects.",
      date: "Apr 28, 2025",
      category: "Case Study",
      imageClass: "bg-forest-400 dark:bg-forest-400"
    }
  ];

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
          <h1 className="text-4xl font-bold text-forest-900 dark:text-white mb-4">The LeadShield Blog</h1>
          <p className="text-lg text-forest-600 dark:text-forest-300 max-w-3xl mx-auto">
            Insights, tips, and strategies to help you identify and prevent lead fraud in your business.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="rounded-xl overflow-hidden border border-forest-100 dark:border-forest-700">
            <div className="aspect-[2/1] bg-forest-500 dark:bg-forest-500 animate-pulse-soft"></div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <span className="px-3 py-1 text-xs bg-forest-100 dark:bg-forest-700 text-forest-700 dark:text-forest-300 rounded-full">Featured</span>
                <span className="mx-2 text-forest-400">•</span>
                <span className="text-sm text-forest-500 flex items-center">
                  <Calendar className="mr-1 h-4 w-4" /> May 19, 2025
                </span>
              </div>
              <h2 className="text-2xl font-bold text-forest-900 dark:text-white mb-3">
                The Future of Lead Management: Predictions for 2026 and Beyond
              </h2>
              <p className="text-forest-600 dark:text-forest-300 mb-6">
                As technology evolves and consumer behaviors shift, the landscape of lead generation and management continues to transform. We explore what's on the horizon for businesses looking to stay ahead.
              </p>
              <Button variant="outline" className="text-forest-500 border-forest-500 hover:bg-forest-50 dark:hover:bg-forest-800">
                Read More
              </Button>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <div key={post.id} className="rounded-lg overflow-hidden border border-forest-100 dark:border-forest-700 hover-scale">
              <div className={`aspect-[3/2] ${post.imageClass} animate-pulse-soft`}></div>
              <div className="p-6">
                <div className="flex items-center text-sm mb-4">
                  <span className="text-forest-500">{post.category}</span>
                  <span className="mx-2 text-forest-400">•</span>
                  <span className="text-forest-500 flex items-center">
                    <Calendar className="mr-1 h-4 w-4" /> {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-forest-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-forest-600 dark:text-forest-300 mb-4">
                  {post.excerpt}
                </p>
                <Button variant="link" className="text-forest-500 p-0 h-auto">
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-forest-50 dark:bg-forest-800 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-forest-900 dark:text-white mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-forest-600 dark:text-forest-300 mb-6 max-w-2xl mx-auto">
            Get the latest insights on lead management and fraud prevention delivered straight to your inbox.
          </p>
          <div className="flex max-w-md mx-auto flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-2 rounded-lg border border-forest-200 dark:border-forest-600 dark:bg-forest-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-forest-500"
            />
            <Button className="bg-forest-500 hover:bg-forest-600">Subscribe</Button>
          </div>
        </div>
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

export default Blog;
