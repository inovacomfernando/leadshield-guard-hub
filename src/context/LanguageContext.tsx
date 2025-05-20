
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'pt' | 'es' | 'fr' | 'de';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: Record<string, Record<string, string>>;
  t: (key: string) => string;
};

const translations = {
  en: {
    // Common
    "app.name": "LeadShield",
    "app.tagline": "Protect Your Business from Fraudulent Leads",
    // Navigation
    "nav.dashboard": "Dashboard",
    "nav.leads": "Leads",
    "nav.features": "Features",
    "nav.billing": "Billing",
    "nav.settings": "Settings",
    "nav.about": "About",
    "nav.blog": "Blog",
    "nav.careers": "Careers",
    "nav.contact": "Contact",
    "nav.success_stories": "Success Stories",
    "nav.login": "Log In",
    "nav.signup": "Sign Up Free",
    "nav.logout": "Log out",
    // Settings
    "settings.title": "Settings",
    "settings.subtitle": "Manage your account settings and preferences",
    "settings.account": "Account",
    "settings.scoreConfig": "Score Configuration",
    "settings.notifications": "Notifications",
    "settings.api": "API Keys",
    "settings.score.threshold": "Threshold",
    "settings.score.rules": "Scoring Rules",
    "settings.score.addRule": "Add Rule",
    "settings.score.editRule": "Edit Rule",
    "settings.score.ruleName": "Rule Name",
    "settings.score.ruleDesc": "Description",
    "settings.score.saveConfig": "Save Configuration",
    "settings.score.weight": "Weight",
  },
  pt: {
    // Common
    "app.name": "LeadShield",
    "app.tagline": "Proteja seu Negócio de Leads Fraudulentos",
    // Navigation
    "nav.dashboard": "Painel",
    "nav.leads": "Leads",
    "nav.features": "Recursos",
    "nav.billing": "Cobrança",
    "nav.settings": "Configurações",
    "nav.about": "Sobre",
    "nav.blog": "Blog",
    "nav.careers": "Carreiras",
    "nav.contact": "Contato",
    "nav.success_stories": "Histórias de Sucesso",
    "nav.login": "Entrar",
    "nav.signup": "Cadastre-se Grátis",
    "nav.logout": "Sair",
    // Settings
    "settings.title": "Configurações",
    "settings.subtitle": "Gerencie suas configurações e preferências de conta",
    "settings.account": "Conta",
    "settings.scoreConfig": "Configuração de Pontuação",
    "settings.notifications": "Notificações",
    "settings.api": "Chaves API",
    "settings.score.threshold": "Limite",
    "settings.score.rules": "Regras de Pontuação",
    "settings.score.addRule": "Adicionar Regra",
    "settings.score.editRule": "Editar Regra",
    "settings.score.ruleName": "Nome da Regra",
    "settings.score.ruleDesc": "Descrição",
    "settings.score.saveConfig": "Salvar Configuração",
    "settings.score.weight": "Peso",
  },
  es: {
    // Common
    "app.name": "LeadShield",
    "app.tagline": "Proteja su Negocio de Leads Fraudulentos",
    // Navigation
    "nav.dashboard": "Panel",
    "nav.leads": "Leads",
    "nav.features": "Características",
    "nav.billing": "Facturación",
    "nav.settings": "Configuración",
    "nav.about": "Acerca de",
    "nav.blog": "Blog",
    "nav.careers": "Carreras",
    "nav.contact": "Contacto",
    "nav.success_stories": "Casos de Éxito",
    "nav.login": "Iniciar Sesión",
    "nav.signup": "Registrarse Gratis",
    "nav.logout": "Cerrar Sesión",
    // Settings
    "settings.title": "Configuración",
    "settings.subtitle": "Administre su configuración y preferencias de cuenta",
    "settings.account": "Cuenta",
    "settings.scoreConfig": "Configuración de Puntuación",
    "settings.notifications": "Notificaciones",
    "settings.api": "Claves API",
    "settings.score.threshold": "Umbral",
    "settings.score.rules": "Reglas de Puntuación",
    "settings.score.addRule": "Añadir Regla",
    "settings.score.editRule": "Editar Regla",
    "settings.score.ruleName": "Nombre de Regla",
    "settings.score.ruleDesc": "Descripción",
    "settings.score.saveConfig": "Guardar Configuración",
    "settings.score.weight": "Peso",
  },
  fr: {
    // Common
    "app.name": "LeadShield",
    "app.tagline": "Protégez Votre Entreprise Contre les Leads Frauduleux",
    // Navigation
    "nav.dashboard": "Tableau de Bord",
    "nav.leads": "Leads",
    "nav.features": "Fonctionnalités",
    "nav.billing": "Facturation",
    "nav.settings": "Paramètres",
    "nav.about": "À Propos",
    "nav.blog": "Blog",
    "nav.careers": "Carrières",
    "nav.contact": "Contact",
    "nav.success_stories": "Témoignages",
    "nav.login": "Connexion",
    "nav.signup": "Inscription Gratuite",
    "nav.logout": "Déconnexion",
    // Settings
    "settings.title": "Paramètres",
    "settings.subtitle": "Gérez vos paramètres et préférences de compte",
    "settings.account": "Compte",
    "settings.scoreConfig": "Configuration de Score",
    "settings.notifications": "Notifications",
    "settings.api": "Clés API",
    "settings.score.threshold": "Seuil",
    "settings.score.rules": "Règles de Scoring",
    "settings.score.addRule": "Ajouter une Règle",
    "settings.score.editRule": "Modifier la Règle",
    "settings.score.ruleName": "Nom de la Règle",
    "settings.score.ruleDesc": "Description",
    "settings.score.saveConfig": "Enregistrer la Configuration",
    "settings.score.weight": "Poids",
  },
  de: {
    // Common
    "app.name": "LeadShield",
    "app.tagline": "Schützen Sie Ihr Unternehmen vor betrügerischen Leads",
    // Navigation
    "nav.dashboard": "Dashboard",
    "nav.leads": "Leads",
    "nav.features": "Funktionen",
    "nav.billing": "Abrechnung",
    "nav.settings": "Einstellungen",
    "nav.about": "Über uns",
    "nav.blog": "Blog",
    "nav.careers": "Karriere",
    "nav.contact": "Kontakt",
    "nav.success_stories": "Erfolgsgeschichten",
    "nav.login": "Anmelden",
    "nav.signup": "Kostenlos Registrieren",
    "nav.logout": "Abmelden",
    // Settings
    "settings.title": "Einstellungen",
    "settings.subtitle": "Verwalten Sie Ihre Kontoeinstellungen und Präferenzen",
    "settings.account": "Konto",
    "settings.scoreConfig": "Score-Konfiguration",
    "settings.notifications": "Benachrichtigungen",
    "settings.api": "API-Schlüssel",
    "settings.score.threshold": "Schwellenwert",
    "settings.score.rules": "Scoring-Regeln",
    "settings.score.addRule": "Regel hinzufügen",
    "settings.score.editRule": "Regel bearbeiten",
    "settings.score.ruleName": "Regelname",
    "settings.score.ruleDesc": "Beschreibung",
    "settings.score.saveConfig": "Konfiguration speichern",
    "settings.score.weight": "Gewichtung",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  // Try to get language from localStorage, default to 'en'
  const [language, setLanguage] = useState<Language>(() => {
    const storedLanguage = localStorage.getItem('leadshield-language');
    return (storedLanguage as Language) || 
           (navigator.language.startsWith('pt') ? 'pt' : 
            navigator.language.startsWith('es') ? 'es' : 
            navigator.language.startsWith('fr') ? 'fr' : 
            navigator.language.startsWith('de') ? 'de' : 'en');
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('leadshield-language', language);
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
