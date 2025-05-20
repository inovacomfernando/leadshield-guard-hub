import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextProps {
  language: string;
  t: (key: string) => string;
  setLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextProps>({
  language: 'en',
  t: (key: string) => key,
  setLanguage: () => {}
});

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const translations = {
    en: {
      app: {
        name: "LeadShield",
      },
      home: {
        title: "Protect your business from fake leads",
        subtitle: "Advanced lead scoring and fraud prevention for your forms",
        featuresTitle: "Key Features",
        pricingTitle: "Simple Pricing",
        pricingSubtitle: "No hidden fees. Start free and scale as you grow.",
        testimonialsTitle: "Trusted by Thousands",
        contactUs: "Contact Us",
        getStarted: "Get Started Free",
        heroImageAlt: "Dashboard interface showcasing lead scoring",
      },
      features: {
        realtimeAnalysis: "Real-time Lead Analysis",
        realtimeDescription: "Analyze leads as they come in to detect suspicious activity instantly.",
        advancedScoring: "Advanced Lead Scoring",
        advancedDescription: "Assign scores based on multiple risk factors to prioritize high-quality leads.",
        fraudPrevention: "Fraud Prevention",
        fraudDescription: "Block bots and fake submissions with device fingerprinting and behavior analysis.",
        customizableRules: "Customizable Rules",
        customizableDescription: "Tailor lead scoring rules to match your specific business needs.",
        easyIntegration: "Easy Integration",
        easyDescription: "Integrate seamlessly with your existing forms and CRM systems.",
        detailedReports: "Detailed Reports",
        detailedDescription: "Gain insights into lead quality with comprehensive reports and analytics.",
      },
      pricing: {
        free: "Free",
        basic: "Basic",
        pro: "Pro",
        enterprise: "Enterprise",
        freeDescription: "For startups and small projects",
        basicDescription: "For growing businesses",
        proDescription: "For established companies",
        enterpriseDescription: "Custom solutions for large organizations",
        leadsPerMonth: "Leads per month",
        price: "$",
        perMonth: "/month",
        unlimited: "Unlimited",
        realtimeAnalysis: "Real-time Analysis",
        leadScoring: "Advanced Lead Scoring",
        fraudDetection: "Fraud Detection",
        customRules: "Custom Rules",
        support: "Priority Support",
        reporting: "Detailed Reporting",
        getStarted: "Get Started",
        contactUs: "Contact Us",
      },
      testimonials: {
        testimonial1: "LeadShield has transformed our lead generation process. We've seen a significant increase in lead quality and a decrease in fraudulent submissions.",
        author1: "Sarah Johnson, Marketing Manager",
        testimonial2: "The advanced lead scoring features have helped us prioritize our sales efforts and close more deals.",
        author2: "David Lee, Sales Director",
        testimonial3: "We were struggling with bots filling out our forms until we implemented LeadShield. It's been a game-changer for our business.",
        author3: "Emily Chen, CEO",
      },
      contact: {
        title: "Contact Us",
        subtitle: "We'd love to hear from you! Get in touch with our team for any inquiries or support.",
        form: {
          title: "Send us a message",
          name: "Your Name",
          email: "Your Email",
          company: "Your Company",
          subject: "Subject",
          message: "Message",
          send: "Send Message",
        },
        get_in_touch: "Get in touch",
        availability: "Our team is available to answer your questions and provide support.",
        email_us: "Email us",
        call_us: "Call us",
        visit_office: "Visit our office",
        faq: {
          title: "Frequently Asked Questions",
          response_time: {
            question: "What is your response time?",
            answer: "We typically respond within 24 hours during business days.",
          },
          demos: {
            question: "Do you offer product demos?",
            answer: "Yes, we offer personalized product demos. Please contact us to schedule a demo.",
          },
          pricing: {
            question: "How does your pricing work?",
            answer: "Our pricing is based on the number of leads processed per month. Check our pricing page for more details.",
          },
        },
      },
      footer: {
        copyright: "All rights reserved.",
      },
      settings: {
        title: "Settings",
        subtitle: "Manage your account settings and preferences",
        account: "Account",
        scoreConfig: "Score Configuration",
        notifications: "Notifications",
        api: "API",
        score: {
          threshold: "Score Threshold",
          rules: "Scoring Rules",
          ruleName: "Rule Name",
          ruleDesc: "Rule Description",
          weight: "Weight",
          addRule: "Add Rule",
          saveConfig: "Save Configuration",
        },
      },
      sidebar: {
        dashboard: "Dashboard",
        settings: "Settings",
        contact: "Contact",
        botManager: "Bot Manager",
      },
      botManager: {
        title: "Bot Manager",
        subtitle: "Configure and manage automated form submission bots",
        tabs: {
          configurations: "Configurations",
          logs: "Execution Logs"
        },
        createNew: "Create New Bot",
        createBot: "Create New Bot Configuration",
        configDescription: "Define the target site, form fields, and execution rules",
        name: "Bot Name",
        targetUrl: "Target URL",
        formSelectors: "Form Field Selectors (JSON)",
        selectorsHint: "Define CSS selectors and values for form fields",
        frequency: "Execution Frequency",
        time: "Execution Time",
        quantity: "Submission Quantity",
        ipRange: "IP Range (comma separated)",
        schedule: "Schedule",
        execute: "Execute",
        cancel: "Cancel",
        save: "Save Configuration",
        noConfigs: "No bot configurations found. Create one to get started.",
        logsFor: "Execution Logs for",
        executionLogs: "Execution Logs",
        selectBot: "Select a bot",
        noLogsSelected: "No execution logs found for this bot",
        selectBotFirst: "Select a bot to view its execution logs"
      },
    },
    pt: {
      app: {
        name: "LeadShield",
      },
      home: {
        title: "Proteja sua empresa de leads falsos",
        subtitle: "Pontuação de leads avançada e prevenção de fraudes para seus formulários",
        featuresTitle: "Principais Características",
        pricingTitle: "Preços Simples",
        pricingSubtitle: "Sem taxas ocultas. Comece grátis e dimensione conforme você cresce.",
        testimonialsTitle: "Confiado por milhares",
        contactUs: "Contate-nos",
        getStarted: "Comece Grátis",
        heroImageAlt: "Interface do painel mostrando a pontuação de leads",
      },
      features: {
        realtimeAnalysis: "Análise de Leads em Tempo Real",
        realtimeDescription: "Analise os leads assim que chegarem para detectar atividades suspeitas instantaneamente.",
        advancedScoring: "Pontuação de Leads Avançada",
        advancedDescription: "Atribua pontuações com base em vários fatores de risco para priorizar leads de alta qualidade.",
        fraudPrevention: "Prevenção de Fraudes",
        fraudDescription: "Bloqueie bots e envios falsos com impressão digital do dispositivo e análise de comportamento.",
        customizableRules: "Regras Personalizáveis",
        customizableDescription: "Adapte as regras de pontuação de leads para corresponder às necessidades específicas de sua empresa.",
        easyIntegration: "Fácil Integração",
        easyDescription: "Integre-se perfeitamente com seus formulários e sistemas CRM existentes.",
        detailedReports: "Relatórios Detalhados",
        detailedDescription: "Obtenha insights sobre a qualidade dos leads com relatórios e análises abrangentes.",
      },
      pricing: {
        free: "Grátis",
        basic: "Básico",
        pro: "Pro",
        enterprise: "Empresarial",
        freeDescription: "Para startups e pequenos projetos",
        basicDescription: "Para empresas em crescimento",
        proDescription: "Para empresas estabelecidas",
        enterpriseDescription: "Soluções personalizadas para grandes organizações",
        leadsPerMonth: "Leads por mês",
        price: "R$",
        perMonth: "/mês",
        unlimited: "Ilimitado",
        realtimeAnalysis: "Análise em Tempo Real",
        leadScoring: "Pontuação de Leads Avançada",
        fraudDetection: "Detecção de Fraudes",
        customRules: "Regras Personalizadas",
        support: "Suporte Prioritário",
        reporting: "Relatórios Detalhados",
        getStarted: "Começar",
        contactUs: "Contate-nos",
      },
      testimonials: {
        testimonial1: "LeadShield transformou nosso processo de geração de leads. Vimos um aumento significativo na qualidade dos leads e uma diminuição nos envios fraudulentos.",
        author1: "Sarah Johnson, Gerente de Marketing",
        testimonial2: "Os recursos avançados de pontuação de leads nos ajudaram a priorizar nossos esforços de vendas e fechar mais negócios.",
        author2: "David Lee, Diretor de Vendas",
        testimonial3: "Estávamos lutando contra bots preenchendo nossos formulários até implementarmos o LeadShield. Tem sido uma virada de jogo para o nosso negócio.",
        author3: "Emily Chen, CEO",
      },
      contact: {
        title: "Contate-nos",
        subtitle: "Adoraríamos ouvir de você! Entre em contato com nossa equipe para qualquer dúvida ou suporte.",
        form: {
          title: "Envie-nos uma mensagem",
          name: "Seu Nome",
          email: "Seu Email",
          company: "Sua Empresa",
          subject: "Assunto",
          message: "Mensagem",
          send: "Enviar Mensagem",
        },
        get_in_touch: "Entre em contato",
        availability: "Nossa equipe está disponível para responder às suas perguntas e fornecer suporte.",
        email_us: "Envie-nos um e-mail",
        call_us: "Ligue para nós",
        visit_office: "Visite nosso escritório",
        faq: {
          title: "Perguntas Frequentes",
          response_time: {
            question: "Qual é o tempo de resposta de vocês?",
            answer: "Normalmente, respondemos dentro de 24 horas durante os dias úteis.",
          },
          demos: {
            question: "Vocês oferecem demonstrações de produtos?",
            answer: "Sim, oferecemos demonstrações de produtos personalizadas. Entre em contato conosco para agendar uma demonstração.",
          },
          pricing: {
            question: "Como funciona o preço de vocês?",
            answer: "Nosso preço é baseado no número de leads processados por mês. Consulte nossa página de preços para obter mais detalhes.",
          },
        },
      },
      footer: {
        copyright: "Todos os direitos reservados.",
      },
      settings: {
        title: "Configurações",
        subtitle: "Gerencie as configurações e preferências da sua conta",
        account: "Conta",
        scoreConfig: "Configuração de Pontuação",
        notifications: "Notificações",
        api: "API",
        score: {
          threshold: "Limite de Pontuação",
          rules: "Regras de Pontuação",
          ruleName: "Nome da Regra",
          ruleDesc: "Descrição da Regra",
          weight: "Peso",
          addRule: "Adicionar Regra",
          saveConfig: "Salvar Configuração",
        },
      },
      sidebar: {
        dashboard: "Painel",
        settings: "Configurações",
        contact: "Contato",
        botManager: "Gerenciador de Bots",
      },
      botManager: {
        title: "Gerenciador de Bots",
        subtitle: "Configure e gerencie bots de preenchimento automático de formulários",
        tabs: {
          configurations: "Configurações",
          logs: "Logs de Execução"
        },
        createNew: "Criar Novo Bot",
        createBot: "Criar Nova Configuração de Bot",
        configDescription: "Defina o site alvo, campos do formulário e regras de execução",
        name: "Nome do Bot",
        targetUrl: "URL Alvo",
        formSelectors: "Seletores de Campos do Formulário (JSON)",
        selectorsHint: "Defina seletores CSS e valores para os campos do formulário",
        frequency: "Frequência de Execução",
        time: "Horário de Execução",
        quantity: "Quantidade de Envios",
        ipRange: "Faixa de IPs (separados por vírgula)",
        schedule: "Agendamento",
        execute: "Executar",
        cancel: "Cancelar",
        save: "Salvar Configuração",
        noConfigs: "Nenhuma configuração de bot encontrada. Crie uma para começar.",
        logsFor: "Logs de Execução para",
        executionLogs: "Logs de Execução",
        selectBot: "Selecione um bot",
        noLogsSelected: "Nenhum log de execução encontrado para este bot",
        selectBotFirst: "Selecione um bot para visualizar seus logs de execução"
      },
    },
  };

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[language as keyof typeof translations];
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k as keyof typeof value];
      } else {
        return key;
      }
    }
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
