
import React from "react";
import { Shield, BookOpen, Code, ExternalLink, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Documentation = () => {
  return (
    <div className="min-h-screen pb-16 pt-24 bg-white dark:bg-forest-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-forest-900 dark:text-white mb-4">LeadShield Documentation</h1>
          <p className="text-xl text-forest-600 dark:text-forest-300 max-w-3xl mx-auto">
            Everything you need to know to get started with LeadShield and protect your business from fraudulent leads.
          </p>
        </div>
        
        {/* Documentation tabs */}
        <Tabs defaultValue="getting-started" className="mb-12">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="integration">Integration</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
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
                    Our core feature is the advanced lead scoring system that analyzes multiple data points to determine the legitimacy of each lead.
                  </p>
                  <h3 className="font-semibold text-forest-900 dark:text-white mb-2">Scoring Factors:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-forest-600 dark:text-forest-300">
                    <li>Email validation and reputation</li>
                    <li>IP address analysis</li>
                    <li>Form submission behavior</li>
                    <li>Data consistency checks</li>
                    <li>Machine learning pattern recognition</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border border-forest-100 dark:border-forest-700">
                <CardHeader>
                  <CardTitle className="text-lg text-forest-900 dark:text-white flex items-center">
                    <Code className="mr-2 h-5 w-5 text-forest-500" />
                    Custom Rules
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-forest-600 dark:text-forest-300 mb-4">
                    Create customized scoring rules tailored to your specific business needs and industry requirements.
                  </p>
                  <h3 className="font-semibold text-forest-900 dark:text-white mb-2">Rule Configuration Options:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-forest-600 dark:text-forest-300">
                    <li>Field-specific validation rules</li>
                    <li>Geographic restrictions</li>
                    <li>Time-based submission patterns</li>
                    <li>Custom scoring weights</li>
                    <li>Industry-specific validations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="integration">
            <div className="space-y-8">
              <Card className="border border-forest-100 dark:border-forest-700">
                <CardHeader>
                  <CardTitle className="text-xl text-forest-900 dark:text-white">Integration Options</CardTitle>
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
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-forest-900 dark:text-white mb-2">API Reference</h3>
                      <p className="text-forest-600 dark:text-forest-300 mb-2">
                        For developers looking to create custom integrations with our REST API.
                      </p>
                      <Button className="mt-2" variant="outline">
                        <FileText className="mr-2 h-4 w-4" />
                        API Documentation
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="support">
            <div className="space-y-6">
              <Card className="border border-forest-100 dark:border-forest-700">
                <CardHeader>
                  <CardTitle className="text-xl text-forest-900 dark:text-white">Support Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="border border-forest-100 dark:border-forest-700">
                      <CardHeader>
                        <CardTitle className="text-lg text-forest-900 dark:text-white">Email Support</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-forest-600 dark:text-forest-300 mb-4">
                          Send us an email and we'll get back to you within 24 hours.
                        </p>
                        <Button variant="outline" className="w-full flex items-center justify-center">
                          <Mail className="mr-2 h-4 w-4" />
                          Contact Support
                        </Button>
                      </CardContent>
                    </Card>
                    
                    <Card className="border border-forest-100 dark:border-forest-700">
                      <CardHeader>
                        <CardTitle className="text-lg text-forest-900 dark:text-white">Documentation</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-forest-600 dark:text-forest-300 mb-4">
                          Browse our comprehensive documentation for answers to common questions.
                        </p>
                        <Button variant="outline" className="w-full flex items-center justify-center">
                          <BookOpen className="mr-2 h-4 w-4" />
                          Browse Docs
                        </Button>
                      </CardContent>
                    </Card>
                    
                    <Card className="border border-forest-100 dark:border-forest-700">
                      <CardHeader>
                        <CardTitle className="text-lg text-forest-900 dark:text-white">Developer Resources</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-forest-600 dark:text-forest-300 mb-4">
                          Access developer resources, API documentation, and code samples.
                        </p>
                        <Button variant="outline" className="w-full flex items-center justify-center">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Developer Hub
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Documentation;
