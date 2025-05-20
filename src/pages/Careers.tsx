
import React from "react";
import { Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import PublicNavbar from "@/components/layout/PublicNavbar";
import { useLanguage } from "@/context/LanguageContext";

const Careers = () => {
  const { t } = useLanguage();
  
  // Mock open positions
  const openPositions = [
    {
      id: 1,
      title: t("careers.positions.frontend.title"),
      department: t("careers.departments.engineering"),
      location: t("careers.locations.sf_remote"),
      type: t("careers.job_types.fulltime")
    },
    {
      id: 2,
      title: t("careers.positions.ml.title"),
      department: t("careers.departments.data_science"),
      location: t("careers.locations.sf_remote"),
      type: t("careers.job_types.fulltime")
    },
    {
      id: 3,
      title: t("careers.positions.csm.title"),
      department: t("careers.departments.support"),
      location: t("careers.locations.remote"),
      type: t("careers.job_types.fulltime")
    },
    {
      id: 4,
      title: t("careers.positions.marketing.title"),
      department: t("careers.departments.marketing"),
      location: t("careers.locations.remote"),
      type: t("careers.job_types.fulltime")
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-forest-900">
      {/* Header/Navigation */}
      <PublicNavbar />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-forest-900 dark:text-white mb-4">{t("careers.title")}</h1>
          <p className="text-lg text-forest-600 dark:text-forest-300 max-w-3xl mx-auto">
            {t("careers.subtitle")}
          </p>
        </div>

        {/* Why Join Us */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-forest-50 dark:bg-forest-800 rounded-lg aspect-square"></div>
            <div>
              <h2 className="text-2xl font-bold text-forest-900 dark:text-white mb-6">{t("careers.why_join.title")}</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-forest-100 dark:bg-forest-700 rounded-full p-2 mr-4">
                    <svg className="h-5 w-5 text-forest-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-forest-900 dark:text-white">{t("careers.why_join.meaningful.title")}</h3>
                    <p className="text-forest-600 dark:text-forest-300">{t("careers.why_join.meaningful.desc")}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-forest-100 dark:bg-forest-700 rounded-full p-2 mr-4">
                    <svg className="h-5 w-5 text-forest-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-forest-900 dark:text-white">{t("careers.why_join.growth.title")}</h3>
                    <p className="text-forest-600 dark:text-forest-300">{t("careers.why_join.growth.desc")}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-forest-100 dark:bg-forest-700 rounded-full p-2 mr-4">
                    <svg className="h-5 w-5 text-forest-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 01-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-forest-900 dark:text-white">{t("careers.why_join.collaboration.title")}</h3>
                    <p className="text-forest-600 dark:text-forest-300">{t("careers.why_join.collaboration.desc")}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-forest-100 dark:bg-forest-700 rounded-full p-2 mr-4">
                    <svg className="h-5 w-5 text-forest-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-forest-900 dark:text-white">{t("careers.why_join.benefits.title")}</h3>
                    <p className="text-forest-600 dark:text-forest-300">{t("careers.why_join.benefits.desc")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-forest-900 dark:text-white mb-6">{t("careers.open_positions")}</h2>
          
          <div className="space-y-4">
            {openPositions.map((position) => (
              <div key={position.id} className="bg-white dark:bg-forest-800 rounded-lg p-6 border border-forest-100 dark:border-forest-700 hover-scale">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-forest-900 dark:text-white mb-1">{position.title}</h3>
                    <p className="text-forest-600 dark:text-forest-300 mb-2">{position.department} • {position.location}</p>
                    <span className="inline-block bg-forest-100 dark:bg-forest-700 text-forest-600 dark:text-forest-300 rounded-full px-3 py-1 text-sm">
                      {position.type}
                    </span>
                  </div>
                  <Button className="bg-forest-500 hover:bg-forest-600">
                    <Briefcase className="mr-2 h-4 w-4" /> {t("careers.apply_button")}
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-forest-600 dark:text-forest-300 mb-4">{t("careers.no_position")}</p>
            <Button variant="outline" className="border-forest-500 text-forest-500">
              {t("careers.open_application")}
            </Button>
          </div>
        </section>

        {/* Company Culture */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-forest-900 dark:text-white mb-6">{t("careers.culture.title")}</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-forest-100 dark:bg-forest-700 h-64 rounded-lg animate-pulse-soft"></div>
            <div className="bg-forest-200 dark:bg-forest-600 h-64 rounded-lg animate-pulse-soft"></div>
            <div className="bg-forest-300 dark:bg-forest-500 h-64 rounded-lg animate-pulse-soft"></div>
          </div>
          
          <div className="mt-8">
            <p className="text-forest-700 dark:text-forest-200">
              {t("careers.culture.description")}
            </p>
          </div>
        </section>
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

export default Careers;
