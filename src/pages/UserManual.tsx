
import React, { useState } from "react";
import { Shield, Search, ChevronDown, ChevronUp, BookOpen, Settings, Users, Bell, Lock, Database, Code, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const UserManual = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const faqs = [
    {
      question: "How does LeadShield score leads?",
      answer: "LeadShield uses a combination of AI algorithms and custom rules to analyze various data points associated with each lead. These include email validity, IP address reputation, form submission behavior, and more. Each lead receives a risk score from 0-100, with higher scores indicating higher risk."
    },
    {
      question: "Can I customize the scoring rules?",
      answer: "Yes, all plans except the Free plan allow for custom scoring rules. The Start plan includes 2 custom rules, the Growth plan includes 5, and the Full Shield plan offers unlimited custom rules. You can create these rules in the Settings section of your dashboard."
    },
    {
      question: "How do I integrate LeadShield with my existing forms?",
      answer: "LeadShield offers multiple integration options: 1) Direct API integration using our REST API, 2) JavaScript snippet that can be added to your website, 3) Native integrations with popular CRM and form providers, or 4) Webhook integration for real-time notifications."
    },
    {
      question: "What happens when a lead is flagged as suspicious?",
      answer: "You can configure different actions based on the risk score. Options include silently flagging the lead in your dashboard, showing a CAPTCHA challenge, blocking the submission entirely, or routing to a different endpoint for further verification."
    },
    {
      question: "Can I see why a specific lead was flagged?",
      answer: "Yes, LeadShield provides detailed scoring breakdowns for each lead. You can see which factors contributed to the risk score and by how much. This helps you understand the decision-making process and adjust your rules if needed."
    },
    {
      question: "How do I add team members to my account?",
      answer: "In the Settings section, navigate to the Team tab. You can invite team members via email and assign them different roles such as Admin, Manager, or Viewer. Each role has different permissions within the platform."
    }
  ];
  
  return (
    <div className="min-h-screen pb-16 pt-24 bg-white dark:bg-forest-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero section */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-forest-500 border-forest-500">Documentation</Badge>
          <h1 className="text-4xl font-bold text-forest-900 dark:text-white mb-4">LeadShield User Manual</h1>
          <p className="text-xl text-forest-600 dark:text-forest-300 max-w-3xl mx-auto">
            Everything you need to know to get the most out of LeadShield and protect your business from fraudulent leads.
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto mt-6 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-forest-500" />
            <Input 
              type="search" 
              placeholder="Search the documentation..." 
              className="pl-10 border-forest-300 dark:border-forest-600"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        {/* Documentation tabs */}
        <Tabs defaultValue="getting-started" className="mb-12">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
            <TabsTrigger value="features">Features & Functionality</TabsTrigger>
            <TabsTrigger value="integration">Integration Guide</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>
          
          <TabsContent value="getting-started">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="md:col-span-3 border border-forest-100 dark:border-forest-700">
                <CardHeader>
                  <CardTitle className="text-xl text-forest-900 dark:text-white flex items-center">
                    <BookOpen className="mr-2 h-5 w-5 text-forest-500" />
                    Welcome to LeadShield
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-forest-600 dark:text-forest-300 mb-4">
                    LeadShield is your comprehensive solution for protecting your business from fraudulent leads. This guide will help you set up and configure your LeadShield account to maximize your protection.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-forest-100 dark:border-forest-700">
                <CardHeader>
                  <CardTitle className="text-lg text-forest-900 dark:text-white">1. Create Your Account</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-forest-600 dark:text-forest-300">
                    • Sign up at leadshield.com<br />
                    • Verify your email address<br />
                    • Choose your subscription plan<br />
                    • Complete your profile information
                  </p>
                  <Button className="w-full mt-4 bg-forest-500 hover:bg-forest-600">
                    Create Account
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border border-forest-100 dark:border-forest-700">
                <CardHeader>
                  <CardTitle className="text-lg text-forest-900 dark:text-white">2. Configure Your Dashboard</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-forest-600 dark:text-forest-300">
                    • Navigate to Settings<br />
                    • Set up default scoring parameters<br />
                    • Create custom rules (if applicable)<br />
                    • Configure notification preferences
                  </p>
                  <Button variant="outline" className="w-full mt-4">
                    Dashboard Tutorial
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border border-forest-100 dark:border-forest-700">
                <CardHeader>
                  <CardTitle className="text-lg text-forest-900 dark:text-white">3. Integrate With Your Systems</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-forest-600 dark:text-forest-300">
                    • Choose your integration method<br />
                    • Follow the integration guide<br />
                    • Test the integration<br />
                    • Monitor initial results
                  </p>
                  <Button variant="outline" className="w-full mt-4">
                    Integration Options
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="features">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border border-forest-100 dark:border-forest-700">
                <CardHeader>
                  <CardTitle className="text-lg text-forest-900 dark:text-white flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-forest-500" />
                    Lead Scoring
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-forest-600 dark:text-forest-300 mb-4">
                    LeadShield's core feature is its advanced lead scoring system that analyzes multiple data points to determine the legitimacy of each lead.
                  </p>
                  <h3 className="font-semibold text-forest-900 dark:text-white mb-2">Scoring Factors:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-forest-600 dark:text-forest-300 mb-4">
                    <li>Email validation and reputation</li>
                    <li>IP address analysis</li>
                    <li>Form submission behavior</li>
                    <li>Data consistency checks</li>
                    <li>Machine learning pattern recognition</li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    Learn More About Scoring
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border border-forest-100 dark:border-forest-700">
                <CardHeader>
                  <CardTitle className="text-lg text-forest-900 dark:text-white flex items-center">
                    <Settings className="mr-2 h-5 w-5 text-forest-500" />
                    Custom Rules
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-forest-600 dark:text-forest-300 mb-4">
                    Create customized scoring rules tailored to your specific business needs and industry requirements.
                  </p>
                  <h3 className="font-semibold text-forest-900 dark:text-white mb-2">Rule Configuration Options:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-forest-600 dark:text-forest-300 mb-4">
                    <li>Field-specific validation rules</li>
                    <li>Geographic restrictions</li>
                    <li>Time-based submission patterns</li>
                    <li>Custom scoring weights</li>
                    <li>Industry-specific validations</li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    Rule Configuration Guide
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border border-forest-100 dark:border-forest-700">
                <CardHeader>
                  <CardTitle className="text-lg text-forest-900 dark:text-white flex items-center">
                    <Users className="mr-2 h-5 w-5 text-forest-500" />
                    Team Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-forest-600 dark:text-forest-300 mb-4">
                    Collaborate effectively with your team using role-based permissions and shared dashboards.
                  </p>
                  <h3 className="font-semibold text-forest-900 dark:text-white mb-2">Team Features:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-forest-600 dark:text-forest-300 mb-4">
                    <li>Role-based access control</li>
                    <li>Activity logging</li>
                    <li>Shared dashboards and reports</li>
                    <li>Collaborative rule management</li>
                    <li>Team notification settings</li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    Team Management Guide
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border border-forest-100 dark:border-forest-700">
                <CardHeader>
                  <CardTitle className="text-lg text-forest-900 dark:text-white flex items-center">
                    <Bell className="mr-2 h-5 w-5 text-forest-500" />
                    Alerts & Notifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-forest-600 dark:text-forest-300 mb-4">
                    Stay informed about important events with customizable alerts and notification preferences.
                  </p>
                  <h3 className="font-semibold text-forest-900 dark:text-white mb-2">Notification Options:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-forest-600 dark:text-forest-300 mb-4">
                    <li>High-risk lead alerts</li>
                    <li>Threshold notifications</li>
                    <li>Unusual activity warnings</li>
                    <li>System status updates</li>
                    <li>Daily/weekly summary reports</li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    Configure Notifications
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border border-forest-100 dark:border-forest-700">
                <CardHeader>
                  <CardTitle className="text-lg text-forest-900 dark:text-white flex items-center">
                    <Database className="mr-2 h-5 w-5 text-forest-500" />
                    Analytics & Reporting
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-forest-600 dark:text-forest-300 mb-4">
                    Gain valuable insights with comprehensive analytics and customizable reports.
                  </p>
                  <h3 className="font-semibold text-forest-900 dark:text-white mb-2">Available Reports:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-forest-600 dark:text-forest-300 mb-4">
                    <li>Lead quality distribution</li>
                    <li>Fraud attempt patterns</li>
                    <li>Source quality analysis</li>
                    <li>Rule effectiveness metrics</li>
                    <li>Historical trend analysis</li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    Analytics Guide
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border border-forest-100 dark:border-forest-700">
                <CardHeader>
                  <CardTitle className="text-lg text-forest-900 dark:text-white flex items-center">
                    <Lock className="mr-2 h-5 w-5 text-forest-500" />
                    Security Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-forest-600 dark:text-forest-300 mb-4">
                    Protect your business with advanced security features designed to prevent fraud and secure your data.
                  </p>
                  <h3 className="font-semibold text-forest-900 dark:text-white mb-2">Security Components:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-forest-600 dark:text-forest-300 mb-4">
                    <li>Honeypot technology</li>
                    <li>Web application firewall</li>
                    <li>reCAPTCHA v3 integration</li>
                    <li>Rate limiting protection</li>
                    <li>Data encryption & security compliance</li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    Security Configuration
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="integration">
            <div className="space-y-8">
              <Card className="border border-forest-100 dark:border-forest-700">
                <CardHeader>
                  <CardTitle className="text-xl text-forest-900 dark:text-white flex items-center">
                    <Code className="mr-2 h-5 w-5 text-forest-500" />
                    Integration Options
                  </CardTitle>
                  <CardDescription>
                    LeadShield offers multiple integration options to fit your technical requirements and existing systems.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-forest-900 dark:text-white mb-2">JavaScript Snippet Integration</h3>
                      <p className="text-forest-600 dark:text-forest-300 mb-2">
                        The easiest way to integrate LeadShield is by adding our JavaScript snippet to your website's forms.
                      </p>
                      <div className="bg-forest-50 dark:bg-forest-800 p-4 rounded-md mb-4">
                        <pre className="text-sm text-forest-700 dark:text-forest-300 overflow-x-auto">
                          {`<script src="https://api.leadshield.com/js/shield.js" 
  data-key="YOUR_API_KEY">
</script>`}
                        </pre>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        JavaScript Integration Guide
                      </Button>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-forest-900 dark:text-white mb-2">Honeypot Implementation</h3>
                      <p className="text-forest-600 dark:text-forest-300 mb-2">
                        Add invisible honeypot fields to your forms to catch automated submissions.
                      </p>
                      <div className="bg-forest-50 dark:bg-forest-800 p-4 rounded-md mb-4">
                        <pre className="text-sm text-forest-700 dark:text-forest-300 overflow-x-auto">
                          {`<input type="text" name="ls_hp_email" 
  style="opacity: 0; position: absolute; top: -999px;" 
  tabindex="-1" autocomplete="off">`}
                        </pre>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        Honeypot Configuration
                      </Button>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-forest-900 dark:text-white mb-2">reCAPTCHA v3 Integration</h3>
                      <p className="text-forest-600 dark:text-forest-300 mb-2">
                        Add invisible reCAPTCHA protection to your forms without disrupting user experience.
                      </p>
                      <div className="bg-forest-50 dark:bg-forest-800 p-4 rounded-md mb-4">
                        <pre className="text-sm text-forest-700 dark:text-forest-300 overflow-x-auto">
                          {`<script src="https://www.google.com/recaptcha/api.js?render=KEY"></script>
<script>
grecaptcha.ready(function() {
  grecaptcha.execute('KEY', {action: 'submit'})
    .then(function(token) {
      document.getElementById('g-recaptcha-response').value = token;
    });
});
</script>`}
                        </pre>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        reCAPTCHA Setup Guide
                      </Button>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-forest-900 dark:text-white mb-2">Web Application Firewall</h3>
                      <p className="text-forest-600 dark:text-forest-300 mb-2">
                        Implement our WAF script to block malicious traffic before it reaches your forms.
                      </p>
                      <div className="bg-forest-50 dark:bg-forest-800 p-4 rounded-md mb-4">
                        <pre className="text-sm text-forest-700 dark:text-forest-300 overflow-x-auto">
                          {`<script src="https://shield.leadshield.com/waf.js" 
  data-key="YOUR_WAF_KEY" 
  data-mode="active">
</script>`}
                        </pre>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        WAF Implementation Guide
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-forest-100 dark:border-forest-700">
                <CardHeader>
                  <CardTitle className="text-xl text-forest-900 dark:text-white flex items-center">
                    <Code className="mr-2 h-5 w-5 text-forest-500" />
                    API Reference
                  </CardTitle>
                  <CardDescription>
                    For developers looking to create custom integrations with our REST API.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-forest-900 dark:text-white mb-2">Authentication</h3>
                      <p className="text-forest-600 dark:text-forest-300 mb-2">
                        All API requests require authentication using your API key.
                      </p>
                      <div className="bg-forest-50 dark:bg-forest-800 p-4 rounded-md">
                        <pre className="text-sm text-forest-700 dark:text-forest-300 overflow-x-auto">
                          {`curl -X POST https://api.leadshield.com/v1/leads/verify \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"email": "test@example.com", "name": "John Doe"}'`}
                        </pre>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-forest-900 dark:text-white mb-2">Webhook Integration</h3>
                      <p className="text-forest-600 dark:text-forest-300 mb-2">
                        Configure webhooks to receive real-time notifications about lead scoring events.
                      </p>
                      <ol className="list-decimal pl-5 space-y-2 text-forest-600 dark:text-forest-300">
                        <li>Navigate to Settings > Integrations > Webhooks</li>
                        <li>Click "Add New Webhook"</li>
                        <li>Enter your endpoint URL</li>
                        <li>Select events to trigger notifications</li>
                        <li>Configure optional security settings</li>
                        <li>Test the webhook connection</li>
                      </ol>
                    </div>
                    
                    <div className="flex gap-4">
                      <Button className="bg-forest-500 hover:bg-forest-600">
                        <FileText className="mr-2 h-4 w-4" />
                        Full API Documentation
                      </Button>
                      <Button variant="outline">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        API Playground
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="faq">
            <Card className="border border-forest-100 dark:border-forest-700">
              <CardHeader>
                <CardTitle className="text-xl text-forest-900 dark:text-white">Frequently Asked Questions</CardTitle>
                <CardDescription>
                  Quick answers to common questions about LeadShield and its features.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-forest-900 dark:text-white">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-forest-600 dark:text-forest-300">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                
                <div className="mt-8 p-4 bg-forest-50 dark:bg-forest-800 rounded-lg border border-forest-100 dark:border-forest-700">
                  <h3 className="font-semibold text-forest-900 dark:text-white mb-2 flex items-center">
                    <Bell className="mr-2 h-5 w-5 text-forest-500" />
                    Still have questions?
                  </h3>
                  <p className="text-forest-600 dark:text-forest-300 mb-4">
                    Our support team is ready to help you with any questions or issues you may have.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" size="sm">
                      Contact Support
                    </Button>
                    <Button variant="outline" size="sm">
                      Join Community Forum
                    </Button>
                    <Button variant="outline" size="sm">
                      Schedule a Call
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserManual;
