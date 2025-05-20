
import React from "react";
import PublicNavbar from "@/components/layout/PublicNavbar";
import { useLanguage } from "@/context/LanguageContext";

const Blog = () => {
  const { t, language } = useLanguage();
  
  // Example blog posts - using t function for content that needs translation
  const blogPosts = [
    {
      id: 1,
      title: t("blog.post1.title"),
      excerpt: t("blog.post1.excerpt"),
      date: t("blog.post1.date"),
      author: "Sarah Johnson",
      category: t("blog.categories.lead_management")
    },
    {
      id: 2,
      title: t("blog.post2.title"),
      excerpt: t("blog.post2.excerpt"),
      date: t("blog.post2.date"),
      author: "Michael Chen",
      category: t("blog.categories.business")
    },
    {
      id: 3,
      title: t("blog.post3.title"),
      excerpt: t("blog.post3.excerpt"),
      date: t("blog.post3.date"),
      author: "Alexis Rodriguez",
      category: t("blog.categories.technology")
    },
    {
      id: 4,
      title: t("blog.post4.title"),
      excerpt: t("blog.post4.excerpt"),
      date: t("blog.post4.date"),
      author: t("blog.team"),
      category: t("blog.categories.news")
    },
    {
      id: 5,
      title: t("blog.post5.title"),
      excerpt: t("blog.post5.excerpt"),
      date: t("blog.post5.date"),
      author: "David Lee",
      category: t("blog.categories.lead_generation")
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-forest-900">
      {/* Header/Navigation */}
      <PublicNavbar />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-forest-900 dark:text-white mb-4">{t("blog.title")}</h1>
          <p className="text-lg text-forest-600 dark:text-forest-300 max-w-3xl mx-auto">
            {t("blog.subtitle")}
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
                  <span className="text-sm text-forest-500 dark:text-forest-400">{t("blog.by")} {post.author}</span>
                  <a href="#" className="text-forest-500 dark:text-forest-300 font-medium text-sm hover:underline">
                    {t("blog.read_more")}
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
            &copy; {new Date().getFullYear()} {t("app.name")}. {t("footer.copyright")}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
