import React from "react";
import PublicNavbar from "@/components/layout/PublicNavbar";

const Blog = () => {
  // Example blog posts
  const blogPosts = [
    {
      id: 1,
      title: "How to Identify Fraudulent Leads: 5 Warning Signs",
      excerpt: "Learn how to spot fake leads before they waste your time and resources.",
      date: "May 10, 2024",
      author: "Sarah Johnson",
      category: "Lead Management"
    },
    {
      id: 2,
      title: "The True Cost of Fake Leads for Small Businesses",
      excerpt: "Discover how fraudulent leads impact your bottom line and what you can do about it.",
      date: "April 25, 2024",
      author: "Michael Chen",
      category: "Business"
    },
    {
      id: 3,
      title: "AI-Powered Lead Verification: The Future of Sales",
      excerpt: "See how artificial intelligence is revolutionizing the way businesses validate leads.",
      date: "April 12, 2024",
      author: "Alexis Rodriguez",
      category: "Technology"
    },
    {
      id: 4,
      title: "LeadShield Announces Series A Funding",
      excerpt: "We're excited to announce our latest round of funding, which will help us expand our reach and continue to innovate.",
      date: "March 20, 2024",
      author: "LeadShield Team",
      category: "Company News"
    },
    {
      id: 5,
      title: "Top 10 Lead Generation Strategies for 2024",
      excerpt: "Stay ahead of the curve with these proven lead generation techniques.",
      date: "February 5, 2024",
      author: "David Lee",
      category: "Lead Generation"
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-forest-900">
      {/* Header/Navigation */}
      <PublicNavbar />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-forest-900 dark:text-white mb-4">LeadShield Blog</h1>
          <p className="text-lg text-forest-600 dark:text-forest-300 max-w-3xl mx-auto">
            Insights and strategies to protect your business from fraudulent leads
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white dark:bg-forest-800 rounded-lg overflow-hidden border border-forest-100 dark:border-forest-700 hover:shadow-lg transition-shadow duration-200">
              <div className="h-48 bg-forest-100 dark:bg-forest-700 animate-pulse-soft"></div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-forest-50 dark:bg-forest-700 text-forest-500 dark:text-forest-300">
                    {post.category}
                  </span>
                  <span className="text-sm text-forest-500 dark:text-forest-400">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-forest-900 dark:text-white mb-2">{post.title}</h3>
                <p className="text-forest-600 dark:text-forest-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-forest-500 dark:text-forest-400">By {post.author}</span>
                  <a href="#" className="text-forest-500 dark:text-forest-300 font-medium text-sm hover:underline">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
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
