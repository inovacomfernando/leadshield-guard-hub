
import React from "react";
import { Link } from "react-router-dom";
import { Shield, CheckCircle, ChevronRight, ArrowRight, Users, Settings, CreditCard, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import DarkModeToggle from "@/components/layout/DarkModeToggle";
import { useTheme } from "@/context/ThemeContext";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

const Index = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="bg-white dark:bg-forest-900 border-b border-forest-100 dark:border-forest-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-forest-500" />
              <span className="font-bold text-xl text-forest-900 dark:text-white">{t("app.name")}</span>
            </div>
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex space-x-6">
                <a href="#features" className="text-forest-700 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-500">
                  {t("nav.features")}
                </a>
                <a href="#pricing" className="text-forest-700 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-500">
                  {t("nav.billing")}
                </a>
                <Link to="/about" className="text-forest-700 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-500">
                  {t("nav.about")}
                </Link>
                <Link to="/blog" className="text-forest-700 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-500">
                  {t("nav.blog")}
                </Link>
                <Link to="/contact" className="text-forest-700 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-500">
                  {t("nav.contact")}
                </Link>
              </nav>
              <LanguageSwitcher />
              <DarkModeToggle />
              <Link to="/login">
                <Button variant="outline">{t("nav.login")}</Button>
              </Link>
              <Link to="/login?tab=signup">
                <Button className="bg-forest-500 hover:bg-forest-600 dark:bg-forest-500 dark:hover:bg-forest-600">
                  {t("nav.signup")}
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
                {t("app.tagline")}
              </h1>
              <p className="mt-4 text-lg text-forest-700 dark:text-forest-200">
                {t("home.hero.subtitle")}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/login?tab=signup">
                  <Button size="lg" className="bg-forest-500 hover:bg-forest-600">
                    {t("nav.signup")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="#features">
                  <Button variant="outline" size="lg">
                    {t("home.hero.cta.learn")}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
              <div className="mt-6 flex items-center">
                <CheckCircle className="h-5 w-5 text-forest-500" />
                <span className="ml-2 text-sm text-forest-700 dark:text-forest-300">{t("home.hero.benefits.nocredit")}</span>
                <span className="mx-2 text-forest-400">•</span>
                <CheckCircle className="h-5 w-5 text-forest-500" />
                <span className="ml-2 text-sm text-forest-700 dark:text-forest-300">{t("home.hero.benefits.cancel")}</span>
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
                  <span className="text-sm text-forest-500 font-medium">{t("home.hero.dashboard")}</span>
                  <span className="text-xs text-forest-400 dark:text-forest-500">{t("home.hero.realtime")}</span>
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
            <h2 className="text-3xl font-bold text-forest-900 dark:text-white">{t("nav.features")}</h2>
            <p className="mt-4 text-lg text-forest-600 dark:text-forest-300">
              {t("home.features.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-forest-50 dark:bg-forest-800 rounded-lg p-6 border border-forest-100 dark:border-forest-700 hover-scale">
              <div className="bg-forest-100 dark:bg-forest-700 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-forest-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-forest-900 dark:text-white">{t("home.features.scoring.title")}</h3>
              <p className="text-forest-600 dark:text-forest-300">
                {t("home.features.scoring.desc")}
              </p>
            </div>

            <div className="bg-forest-50 dark:bg-forest-800 rounded-lg p-6 border border-forest-100 dark:border-forest-700 hover-scale">
              <div className="bg-forest-100 dark:bg-forest-700 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Settings className="h-6 w-6 text-forest-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-forest-900 dark:text-white">{t("home.features.rules.title")}</h3>
              <p className="text-forest-600 dark:text-forest-300">
                {t("home.features.rules.desc")}
              </p>
            </div>

            <div className="bg-forest-50 dark:bg-forest-800 rounded-lg p-6 border border-forest-100 dark:border-forest-700 hover-scale">
              <div className="bg-forest-100 dark:bg-forest-700 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-forest-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-forest-900 dark:text-white">{t("home.features.team.title")}</h3>
              <p className="text-forest-600 dark:text-forest-300">
                {t("home.features.team.desc")}
              </p>
            </div>

            <div className="bg-forest-50 dark:bg-forest-800 rounded-lg p-6 border border-forest-100 dark:border-forest-700 hover-scale">
              <div className="bg-forest-100 dark:bg-forest-700 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-forest-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-forest-900 dark:text-white">{t("home.features.billing.title")}</h3>
              <p className="text-forest-600 dark:text-forest-300">
                {t("home.features.billing.desc")}
              </p>
            </div>

            <div className="bg-forest-50 dark:bg-forest-800 rounded-lg p-6 border border-forest-100 dark:border-forest-700 hover-scale">
              <div className="bg-forest-100 dark:bg-forest-700 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-forest-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-forest-900 dark:text-white">{t("home.features.protection.title")}</h3>
              <p className="text-forest-600 dark:text-forest-300">
                {t("home.features.protection.desc")}
              </p>
            </div>

            <div className="bg-forest-50 dark:bg-forest-800 rounded-lg p-6 border border-forest-100 dark:border-forest-700 hover-scale">
              <div className="bg-forest-100 dark:bg-forest-700 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <ArrowRight className="h-6 w-6 text-forest-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-forest-900 dark:text-white">{t("home.features.api.title")}</h3>
              <p className="text-forest-600 dark:text-forest-300">
                {t("home.features.api.desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="about" className="py-20 bg-forest-50 dark:bg-forest-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-forest-900 dark:text-white">{t("nav.about")}</h2>
            <p className="mt-4 text-lg text-forest-600 dark:text-forest-300">
              {t("home.about.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-forest-900 dark:text-white mb-4">
                {t("home.about.name")}
              </h3>
              <p className="text-forest-700 dark:text-forest-200 italic mb-6">
                {t("home.about.quote")}
              </p>
              
              <p className="text-forest-600 dark:text-forest-300 mb-4">
                {t("home.about.bio1")}
              </p>
              
              <p className="text-forest-600 dark:text-forest-300 mb-6">
                {t("home.about.bio2")}
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
                    {t("home.about.role")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/about">
              <Button variant="outline" className="border-forest-500 text-forest-500">
                {t("home.about.cta")}
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
            <h2 className="text-3xl font-bold text-forest-900 dark:text-white">{t("nav.billing")}</h2>
            <p className="mt-4 text-lg text-forest-600 dark:text-forest-300">
              {t("home.pricing.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Free Plan */}
            <div className="bg-white dark:bg-forest-900 rounded-lg overflow-hidden shadow-lg border border-forest-100 dark:border-forest-700 hover-scale">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-forest-900 dark:text-white">{t("home.pricing.free.name")}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-forest-900 dark:text-white">$0</span>
                  <span className="text-forest-600 dark:text-forest-300">/mo</span>
                </div>
                <p className="text-forest-600 dark:text-forest-300 mb-6">{t("home.pricing.free.desc")}</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-forest-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-forest-700 dark:text-forest-200">{t("home.pricing.free.feature1")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-forest-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-forest-700 dark:text-forest-200">{t("home.pricing.free.feature2")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-forest-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-forest-700 dark:text-forest-200">{t("home.pricing.free.feature3")}</span>
                  </li>
                </ul>
              </div>
              <div className="px-6 pb-6">
                <Link to="/login?tab=signup">
                  <Button className="w-full bg-forest-500 hover:bg-forest-600">{t("nav.signup")}</Button>
                </Link>
              </div>
            </div>
            
            {/* Start Plan */}
            <div className="bg-white dark:bg-forest-900 rounded-lg overflow-hidden shadow-lg border border-forest-100 dark:border-forest-700 hover-scale">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-forest-900 dark:text-white">{t("home.pricing.start.name")}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-forest-900 dark:text-white">$49</span>
                  <span className="text-forest-600 dark:text-forest-300">/mo</span>
                </div>
                <p className="text-forest-600 dark:text-forest-300 mb-6">{t("home.pricing.start.desc")}</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-forest-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-forest-700 dark:text-forest-200">{t("home.pricing.start.feature1")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-forest-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-forest-700 dark:text-forest-200">{t("home.pricing.start.feature2")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-forest-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-forest-700 dark:text-forest-200">{t("home.pricing.start.feature3")}</span>
                  </li>
                </ul>
              </div>
              <div className="px-6 pb-6">
                <Link to="/login?tab=signup">
                  <Button className="w-full bg-forest-500 hover:bg-forest-600">{t("home.pricing.cta")}</Button>
                </Link>
              </div>
            </div>
            
            {/* Growth Plan */}
            <div className="bg-white dark:bg-forest-900 rounded-lg overflow-hidden shadow-xl border-2 border-forest-500 hover-scale relative">
              <div className="bg-forest-500 text-white text-center text-sm py-1">
                {t("home.pricing.growth.tag")}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-forest-900 dark:text-white">{t("home.pricing.growth.name")}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-forest-900 dark:text-white">$99</span>
                  <span className="text-forest-600 dark:text-forest-300">/mo</span>
                </div>
                <p className="text-forest-600 dark:text-forest-300 mb-6">{t("home.pricing.growth.desc")}</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-forest-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-forest-700 dark:text-forest-200">{t("home.pricing.growth.feature1")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-forest-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-forest-700 dark:text-forest-200">{t("home.pricing.growth.feature2")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-forest-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-forest-700 dark:text-forest-200">{t("home.pricing.growth.feature3")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-forest-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-forest-700 dark:text-forest-200">{t("home.pricing.growth.feature4")}</span>
                  </li>
                </ul>
              </div>
              <div className="px-6 pb-6">
                <Link to="/login?tab=signup">
                  <Button className="w-full bg-forest-500 hover:bg-forest-600">{t("home.pricing.cta")}</Button>
                </Link>
              </div>
            </div>
            
            {/* Full Plan */}
            <div className="bg-white dark:bg-forest-900 rounded-lg overflow-hidden shadow-lg border border-forest-100 dark:border-forest-700 hover-scale">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-forest-900 dark:text-white">{t("home.pricing.full.name")}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-forest-900 dark:text-white">$249</span>
                  <span className="text-forest-600 dark:text-forest-300">/mo</span>
                </div>
                <p className="text-forest-600 dark:text-forest-300 mb-6">{t("home.pricing.full.desc")}</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-forest-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-forest-700 dark:text-forest-200">{t("home.pricing.full.feature1")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-forest-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-forest-700 dark:text-forest-200">{t("home.pricing.full.feature2")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-forest-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-forest-700 dark:text-forest-200">{t("home.pricing.full.feature3")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-forest-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-forest-700 dark:text-forest-200">{t("home.pricing.full.feature4")}</span>
                  </li>
                </ul>
              </div>
              <div className="px-6 pb-6">
                <Link to="/login?tab=signup">
                  <Button className="w-full bg-forest-500 hover:bg-forest-600">{t("home.pricing.cta")}</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-forest-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t("home.cta.title")}</h2>
          <p className="text-lg text-forest-300 mb-8">
            {t("home.cta.subtitle")}
          </p>
          <Link to="/login?tab=signup">
            <Button size="lg" className="bg-forest-500 hover:bg-forest-600">
              {t("nav.signup")}
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
                <span className="font-bold text-lg text-forest-900 dark:text-white">{t("app.name")}</span>
              </div>
              <p className="text-forest-600 dark:text-forest-300 mb-4">
                {t("app.tagline")}
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
              <h3 className="font-semibold text-forest-900 dark:text-white mb-4">{t("app.name")}</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-forest-600 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-500">{t("nav.features")}</a></li>
                <li><a href="#pricing" className="text-forest-600 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-500">{t("nav.billing")}</a></li>
                <li><a href="#" className="text-forest-600 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-500">Integrations</a></li>
                <li><a href="#" className="text-forest-600 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-500">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-forest-900 dark:text-white mb-4">{t("footer.company")}</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-forest-600 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-500">{t("nav.about")}</Link></li>
                <li><Link to="/blog" className="text-forest-600 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-500">{t("nav.blog")}</Link></li>
                <li><Link to="/careers" className="text-forest-600 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-500">{t("nav.careers")}</Link></li>
                <li><Link to="/contact" className="text-forest-600 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-500">{t("nav.contact")}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-forest-900 dark:text-white mb-4">{t("footer.resources")}</h3>
              <ul className="space-y-2">
                <li><Link to="/documentation" className="text-forest-600 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-500">{t("footer.docs")}</Link></li>
                <li><a href="#" className="text-forest-600 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-500">{t("footer.support")}</a></li>
                <li><a href="#" className="text-forest-600 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-500">{t("footer.privacy")}</a></li>
                <li><a href="#" className="text-forest-600 dark:text-forest-300 hover:text-forest-500 dark:hover:text-forest-500">{t("footer.terms")}</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-forest-100 dark:border-forest-800">
            <p className="text-forest-600 dark:text-forest-300 text-center">
              &copy; {new Date().getFullYear()} LeadShield. {t("footer.copyright")}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
