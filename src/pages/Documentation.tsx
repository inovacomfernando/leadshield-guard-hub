
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Documentation: React.FC = () => {
  return (
    <div className="container mx-auto py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">LeadShield Documentation</h1>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="installation">Installation</TabsTrigger>
            <TabsTrigger value="usage">Usage Guide</TabsTrigger>
            <TabsTrigger value="api">API Reference</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>LeadShield Overview</CardTitle>
                <CardDescription>
                  Your complete solution for lead tracking and protection
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <section className="space-y-3">
                  <h3 className="text-lg font-semibold">What is LeadShield?</h3>
                  <p>
                    LeadShield is a comprehensive platform designed to help businesses track, analyze, and protect their leads.
                    Our system uses advanced algorithms to score leads based on visitor behavior, helping you identify and prioritize
                    the most promising prospects.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold">Key Features</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Lead tracking and monitoring</li>
                    <li>Advanced lead scoring algorithms</li>
                    <li>Bot and spam protection</li>
                    <li>Custom scoring rules</li>
                    <li>Detailed analytics and insights</li>
                    <li>Webhook integrations for seamless connection to your existing tools</li>
                    <li>Team collaboration tools</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold">Subscription Plans</h3>
                  <p>
                    LeadShield offers flexible subscription plans to meet your business needs:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Free Plan:</strong> Basic lead tracking for small businesses (up to 100 leads/month)</li>
                    <li><strong>Starter Plan:</strong> Enhanced tracking and basic scoring (up to 500 leads/month)</li>
                    <li><strong>Growth Plan:</strong> Advanced scoring and analytics (up to 2,000 leads/month)</li>
                    <li><strong>Full Shield Plan:</strong> Complete protection suite with unlimited leads</li>
                  </ul>
                </section>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="installation">
            <Card>
              <CardHeader>
                <CardTitle>Installation Guide</CardTitle>
                <CardDescription>
                  Follow these steps to set up LeadShield on your website
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <section className="space-y-3">
                  <h3 className="text-lg font-semibold">Step 1: Account Setup</h3>
                  <p>
                    Create your LeadShield account by signing up on our platform. Once your account is created,
                    you'll be able to access your dashboard and API keys.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold">Step 2: Install the Base Script</h3>
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md overflow-x-auto">
                    <pre className="text-sm">
                      <code>{`<script src="https://api.leadshield.com/tracker.js?key=YOUR_API_KEY"></script>`}</code>
                    </pre>
                  </div>
                  <p>
                    Add this script to the <code>{"<head>"}</code> section of your website. Replace <code>YOUR_API_KEY</code> with
                    the API key from your LeadShield dashboard.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold">Step 3: Configure Your Settings</h3>
                  <p>
                    Visit your LeadShield dashboard to customize your lead scoring rules, notification preferences,
                    and integration settings.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold">Step 4: Test Your Implementation</h3>
                  <p>
                    Use our built-in testing tools to verify that LeadShield is properly installed and tracking leads
                    on your website.
                  </p>
                </section>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="usage">
            <Card>
              <CardHeader>
                <CardTitle>Usage Guide</CardTitle>
                <CardDescription>
                  Learn how to make the most of LeadShield
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <section className="space-y-3">
                  <h3 className="text-lg font-semibold">Dashboard Navigation</h3>
                  <p>
                    The LeadShield dashboard provides a comprehensive view of your lead activity. Here you can view lead statistics,
                    manage settings, and access detailed reports.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold">Tracking Lead Activity</h3>
                  <p>
                    LeadShield automatically tracks visitor behavior on your site, including page views, time on site, form interactions,
                    and more. This data is used to create lead profiles and calculate lead scores.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold">Customizing Lead Scoring Rules</h3>
                  <p>
                    Create custom scoring rules based on your specific business needs. Assign point values to different actions
                    and behaviors to identify high-value leads.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold">Setting Up Integrations</h3>
                  <p>
                    Connect LeadShield to your CRM, email marketing platform, or other tools using our webhook integrations.
                    This allows for seamless data sharing across your tech stack.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold">Analyzing Reports</h3>
                  <p>
                    Use our built-in analytics to gain insights into lead behavior, conversion rates, and the effectiveness
                    of your marketing campaigns.
                  </p>
                </section>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api">
            <Card>
              <CardHeader>
                <CardTitle>API Reference</CardTitle>
                <CardDescription>
                  Technical documentation for developers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <section className="space-y-3">
                  <h3 className="text-lg font-semibold">Authentication</h3>
                  <p>
                    All API requests require an API key, which should be included in the request header:
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md overflow-x-auto">
                    <pre className="text-sm">
                      <code>{`Authorization: Bearer YOUR_API_KEY`}</code>
                    </pre>
                  </div>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold">Lead Endpoints</h3>
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md overflow-x-auto">
                    <pre className="text-sm">
                      <code>{`GET /api/leads - List all leads
GET /api/leads/{id} - Get a specific lead
POST /api/leads - Create a new lead
PUT /api/leads/{id} - Update a lead
DELETE /api/leads/{id} - Delete a lead`}</code>
                    </pre>
                  </div>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold">Webhook Integration</h3>
                  <p>
                    LeadShield can send lead data to your systems via webhooks. Configure your webhook URL in the dashboard.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md overflow-x-auto">
                    <pre className="text-sm">
                      <code>{`POST https://your-webhook-url.com
{
  "event": "new_lead",
  "lead_id": "123456",
  "email": "example@domain.com",
  "score": 85,
  "timestamp": "2023-05-17T14:30:00Z"
}`}</code>
                    </pre>
                  </div>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold">Rate Limits</h3>
                  <p>
                    API requests are limited to 100 requests per minute per API key. If you exceed this limit,
                    you'll receive a 429 Too Many Requests response.
                  </p>
                </section>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Documentation;
