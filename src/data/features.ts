
import { 
  CheckCircle, Shield, ShieldCheck, ShieldPlus, Database, 
  DatabaseZap, ChartBar, Webhook, Code, Clock, 
  Users, Settings, Eye, Lock 
} from "lucide-react";
import { Feature } from "@/types/features";

export const featuresList: Feature[] = [
  {
    name: "Lead Tracking",
    description: "Track and monitor leads that visit your website",
    icon: Database,
    includedIn: {
      free: "100 leads/mo",
      start: "500 leads/mo",
      growth: "2,000 leads/mo",
      full: "Unlimited",
    },
  },
  {
    name: "Basic Lead Scoring",
    description: "Simple algorithm to score leads based on behavior",
    icon: Shield,
    includedIn: {
      free: true,
      start: true,
      growth: true,
      full: true,
    },
  },
  {
    name: "Advanced Lead Scoring",
    description: "Enhanced algorithms with machine learning for accurate scoring",
    icon: ShieldCheck,
    includedIn: {
      free: false,
      start: true,
      growth: true,
      full: true,
    },
  },
  {
    name: "Customer Support",
    description: "Access to customer support team",
    icon: Clock,
    includedIn: {
      free: "Email",
      start: "Email & chat",
      growth: "Priority",
      full: "24/7 Priority",
    },
  },
  {
    name: "Custom Scoring Rules",
    description: "Create your own custom rules for lead scoring",
    icon: Settings,
    includedIn: {
      free: false,
      start: "2 rules",
      growth: "5 rules",
      full: "Unlimited",
    },
  },
  {
    name: "API Access",
    description: "Access to our API for custom integrations",
    icon: Code,
    includedIn: {
      free: false,
      start: true,
      growth: true,
      full: true,
    },
  },
  {
    name: "Team Members",
    description: "Add team members to your account",
    icon: Users,
    includedIn: {
      free: false,
      start: "2 users",
      growth: "5 users",
      full: "Unlimited",
    },
  },
  {
    name: "Advanced Analytics",
    description: "Detailed analytics and reporting",
    icon: ChartBar,
    includedIn: {
      free: false,
      start: false,
      growth: true,
      full: true,
    },
  },
  {
    name: "Webhook Integrations",
    description: "Connect to your own systems via webhooks",
    icon: Webhook,
    includedIn: {
      free: false,
      start: false,
      growth: true,
      full: true,
    },
  },
  {
    name: "Invisible Honeypot",
    description: "Hidden form fields to catch bots and spammers",
    icon: Eye,
    includedIn: {
      free: false,
      start: false,
      growth: false,
      full: true,
    },
    implementation: "Add this script to your form pages to automatically add invisible honeypot fields",
    scriptSnippet: `<script>
  // LeadShield Honeypot Implementation
  (function() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      const honeyField = document.createElement('div');
      honeyField.style.opacity = '0';
      honeyField.style.position = 'absolute';
      honeyField.style.height = '0';
      honeyField.style.overflow = 'hidden';
      
      const input = document.createElement('input');
      input.type = 'text';
      input.name = 'shield_check_' + Math.random().toString(36).substring(2);
      input.autocomplete = 'off';
      
      honeyField.appendChild(input);
      form.appendChild(honeyField);
      
      form.addEventListener('submit', function(e) {
        if (input.value) {
          e.preventDefault();
          console.log('Bot detected via honeypot');
        }
      });
    });
  })();
</script>`
  },
  {
    name: "Advanced Firewall",
    description: "Client-side protection against malicious traffic",
    icon: Lock,
    includedIn: {
      free: false,
      start: false,
      growth: false,
      full: true,
    },
    implementation: "Add this script to your website header to enable the LeadShield firewall",
    scriptSnippet: `<script>
  // LeadShield Firewall Implementation
  (function() {
    const apiKey = "YOUR_API_KEY";
    const config = {
      blockSuspiciousIPs: true,
      monitorFormSubmissions: true,
      detectAutomation: true,
      reportToShieldAPI: true
    };
    
    // Initialize firewall
    window.LeadShield = window.LeadShield || {};
    window.LeadShield.firewall = true;
    window.LeadShield.config = config;
    
    // Load the full firewall script
    const script = document.createElement('script');
    script.src = 'https://api.leadshield.com/firewall.js?key=' + apiKey;
    script.async = true;
    document.head.appendChild(script);
  })();
</script>`
  },
  {
    name: "Invisible reCAPTCHA v3",
    description: "Google's invisible reCAPTCHA to protect forms without user friction",
    icon: ShieldPlus,
    includedIn: {
      free: false,
      start: false,
      growth: false,
      full: true,
    },
    implementation: "Add this script to your website and configure with your reCAPTCHA site key",
    scriptSnippet: `<script src="https://www.google.com/recaptcha/api.js?render=YOUR_RECAPTCHA_SITE_KEY"></script>
<script>
  // LeadShield reCAPTCHA Implementation
  document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        grecaptcha.ready(function() {
          grecaptcha.execute('YOUR_RECAPTCHA_SITE_KEY', {action: 'submit'})
            .then(function(token) {
              // Add the token to your form
              const input = document.createElement('input');
              input.type = 'hidden';
              input.name = 'g-recaptcha-response';
              input.value = token;
              form.appendChild(input);
              
              // Submit the form
              form.submit();
            });
        });
      });
    });
  });
</script>`
  }
];
