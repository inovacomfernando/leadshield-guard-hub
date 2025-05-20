
import React from "react";
import { Button } from "@/components/ui/button";
import PublicNavbar from "@/components/layout/PublicNavbar";
import { useLanguage } from "@/context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white dark:bg-forest-900">
      {/* Header/Navigation */}
      <PublicNavbar />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-forest-900 dark:text-white mb-4">{t("contact.title")}</h1>
          <p className="text-lg text-forest-600 dark:text-forest-300 max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white dark:bg-forest-800 p-8 rounded-lg border border-forest-100 dark:border-forest-700 shadow-sm">
            <h2 className="text-2xl font-bold text-forest-900 dark:text-white mb-6">{t("contact.form.title")}</h2>
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-forest-700 dark:text-forest-300 mb-1">
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-forest-200 dark:border-forest-700 rounded-md bg-white dark:bg-forest-800 text-forest-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-forest-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-forest-700 dark:text-forest-300 mb-1">
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-forest-200 dark:border-forest-700 rounded-md bg-white dark:bg-forest-800 text-forest-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-forest-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-forest-700 dark:text-forest-300 mb-1">
                  {t("contact.form.company")}
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-2 border border-forest-200 dark:border-forest-700 rounded-md bg-white dark:bg-forest-800 text-forest-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-forest-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-forest-700 dark:text-forest-300 mb-1">
                  {t("contact.form.subject")}
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-forest-200 dark:border-forest-700 rounded-md bg-white dark:bg-forest-800 text-forest-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-forest-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-forest-700 dark:text-forest-300 mb-1">
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-forest-200 dark:border-forest-700 rounded-md bg-white dark:bg-forest-800 text-forest-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-forest-500"
                ></textarea>
              </div>
              <Button className="bg-forest-500 hover:bg-forest-600 w-full">
                {t("contact.form.send")}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-forest-900 dark:text-white mb-4">{t("contact.get_in_touch")}</h2>
              <p className="text-forest-600 dark:text-forest-300 mb-6">
                {t("contact.availability")}
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-forest-50 dark:bg-forest-700 rounded-full p-2 mr-3">
                    <svg className="w-5 h-5 text-forest-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-forest-900 dark:text-white">{t("contact.email_us")}</h3>
                    <p className="text-forest-600 dark:text-forest-300">info@leadshield.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-forest-50 dark:bg-forest-700 rounded-full p-2 mr-3">
                    <svg className="w-5 h-5 text-forest-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-forest-900 dark:text-white">{t("contact.call_us")}</h3>
                    <p className="text-forest-600 dark:text-forest-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-forest-50 dark:bg-forest-700 rounded-full p-2 mr-3">
                    <svg className="w-5 h-5 text-forest-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-forest-900 dark:text-white">{t("contact.visit_office")}</h3>
                    <p className="text-forest-600 dark:text-forest-300">
                      123 Market St, Suite 456<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-forest-900 dark:text-white mb-4">{t("contact.faq.title")}</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-forest-900 dark:text-white mb-1">{t("contact.faq.response_time.question")}</h3>
                  <p className="text-forest-600 dark:text-forest-300">{t("contact.faq.response_time.answer")}</p>
                </div>
                <div>
                  <h3 className="font-medium text-forest-900 dark:text-white mb-1">{t("contact.faq.demos.question")}</h3>
                  <p className="text-forest-600 dark:text-forest-300">{t("contact.faq.demos.answer")}</p>
                </div>
                <div>
                  <h3 className="font-medium text-forest-900 dark:text-white mb-1">{t("contact.faq.pricing.question")}</h3>
                  <p className="text-forest-600 dark:text-forest-300">{t("contact.faq.pricing.answer")}</p>
                </div>
              </div>
            </div>
          </div>
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

export default Contact;
