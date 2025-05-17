
import React from "react";
import { Shield, Star, Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "Sarah Thompson",
    company: "GrowFast Marketing",
    role: "Chief Marketing Officer",
    image: "/placeholder.svg",
    quote: "LeadShield helped us reduce wasted ad spend by 38% by identifying and blocking fraudulent leads before they entered our funnel. Our conversion rates have improved dramatically.",
    industry: "Marketing",
    plan: "Growth Plan",
    results: "38% reduction in wasted ad spend"
  },
  {
    name: "Michael Rodriguez",
    company: "Tech Innovators Inc.",
    role: "Sales Director",
    image: "/placeholder.svg",
    quote: "Before LeadShield, we were wasting hours every day on fake leads. Now our sales team focuses only on legitimate prospects, increasing our close rate by 42%.",
    industry: "Technology",
    plan: "Full Shield",
    results: "42% increase in close rate"
  },
  {
    name: "Jennifer Wu",
    company: "FinSecure Solutions",
    role: "CEO",
    image: "/placeholder.svg",
    quote: "As a financial services company, security is paramount. LeadShield's advanced scoring rules have been essential in protecting our business from potentially fraudulent inquiries.",
    industry: "Financial Services",
    plan: "Full Shield",
    results: "60% reduction in fraud attempts"
  },
  {
    name: "David O'Connor",
    company: "Retail Connect",
    role: "E-commerce Manager",
    image: "/placeholder.svg",
    quote: "The API integration with our CRM was seamless. We can now automatically route high-quality leads to our best salespeople and flag suspicious ones for review.",
    industry: "Retail",
    plan: "Growth Plan",
    results: "27% increase in revenue"
  },
  {
    name: "Lisa Chen",
    company: "HealthPlus",
    role: "Marketing Director",
    image: "/placeholder.svg",
    quote: "The advanced analytics have given us invaluable insights into our lead quality patterns. We've optimized our marketing channels based on this data with impressive results.",
    industry: "Healthcare",
    plan: "Full Shield",
    results: "45% improvement in lead quality"
  },
  {
    name: "Robert Johnson",
    company: "PropertyPro Realty",
    role: "Lead Generation Specialist",
    image: "/placeholder.svg",
    quote: "In real estate, time is money. With LeadShield's instant lead scoring, we're focusing our efforts on serious buyers and have increased our closings significantly.",
    industry: "Real Estate",
    plan: "Start Plan",
    results: "52% more qualified leads"
  }
];

const caseStudies = [
  {
    company: "E-commerce Giant",
    industry: "Retail",
    challenge: "Facing excessive bot-generated form submissions that overwhelmed their sales team",
    solution: "Implemented LeadShield with custom scoring rules and honeypot technology",
    results: "Blocked 95% of fraudulent submissions while properly routing legitimate leads",
    metrics: ["95% reduction in spam leads", "32% increase in sales team efficiency", "22% growth in conversion rate"]
  },
  {
    company: "B2B Software Provider",
    industry: "SaaS",
    challenge: "High volume of fake leads from competitors attempting to waste resources",
    solution: "Deployed Full Shield plan with advanced API integration and webhook notifications",
    results: "Eliminated competitor spam while improving lead qualification process",
    metrics: ["99% accuracy in lead scoring", "41% reduction in sales cycle length", "35% increase in trial conversions"]
  },
  {
    company: "Insurance Agency Network",
    industry: "Insurance",
    challenge: "Struggling with fraudulent applications across multiple agency locations",
    solution: "Centralized lead verification with LeadShield's team collaboration features",
    results: "Protected all network agencies with consistent fraud prevention protocols",
    metrics: ["63% decrease in fraudulent claims", "$1.2M saved annually in fraud prevention", "28% reduction in policy processing time"]
  }
];

const SuccessStories = () => {
  return (
    <div className="min-h-screen pb-16 pt-24 bg-white dark:bg-forest-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-forest-500 border-forest-500">Success Stories</Badge>
          <h1 className="text-4xl font-bold text-forest-900 dark:text-white mb-4">Real Results from Real Customers</h1>
          <p className="text-xl text-forest-600 dark:text-forest-300 max-w-3xl mx-auto">
            Discover how businesses across industries have transformed their lead management and protection with LeadShield.
          </p>
        </div>
        
        {/* Featured case study */}
        <div className="bg-forest-50 dark:bg-forest-800 rounded-xl p-8 mb-16 border border-forest-100 dark:border-forest-700">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <Badge className="mb-4 bg-forest-500">Featured Case Study</Badge>
              <h2 className="text-3xl font-bold text-forest-900 dark:text-white mb-4">
                How LeadShield Saved TechNova $250,000 in Wasted Ad Spend
              </h2>
              <p className="text-forest-600 dark:text-forest-300 mb-6">
                TechNova was facing an unprecedented wave of fraudulent leads that were draining their marketing budget and sales team resources. After implementing LeadShield, they were able to identify and block these suspicious leads before they entered their sales pipeline.
              </p>
              <div className="flex flex-col space-y-4">
                <div className="flex items-start">
                  <div className="bg-forest-100 dark:bg-forest-700 rounded-full p-2 mr-4 mt-1">
                    <Shield className="h-5 w-5 text-forest-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest-900 dark:text-white">Challenge</h3>
                    <p className="text-forest-600 dark:text-forest-300">
                      45% of their leads were fraudulent, wasting $250,000 in ad spend and countless sales hours.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-forest-100 dark:bg-forest-700 rounded-full p-2 mr-4 mt-1">
                    <Shield className="h-5 w-5 text-forest-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest-900 dark:text-white">Solution</h3>
                    <p className="text-forest-600 dark:text-forest-300">
                      Implemented LeadShield's Full Shield plan with custom scoring rules and API integration.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-forest-100 dark:bg-forest-700 rounded-full p-2 mr-4 mt-1">
                    <Shield className="h-5 w-5 text-forest-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest-900 dark:text-white">Results</h3>
                    <p className="text-forest-600 dark:text-forest-300">
                      98% reduction in fraudulent leads, $230,000 saved in 6 months, and 3x increase in sales efficiency.
                    </p>
                  </div>
                </div>
              </div>
              <Button className="mt-6 bg-forest-500 hover:bg-forest-600">
                Read Full Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="md:w-1/2 bg-white dark:bg-forest-700 p-6 rounded-lg shadow-lg">
              <div className="aspect-video bg-forest-100 dark:bg-forest-600 rounded-md flex items-center justify-center">
                <Shield className="h-16 w-16 text-forest-500" />
              </div>
              <div className="mt-4 space-y-2">
                <div className="h-4 bg-forest-100 dark:bg-forest-600 rounded-md w-3/4"></div>
                <div className="h-4 bg-forest-100 dark:bg-forest-600 rounded-md"></div>
                <div className="h-4 bg-forest-100 dark:bg-forest-600 rounded-md w-5/6"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-forest-900 dark:text-white mb-8 text-center">
            Industry Case Studies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border border-forest-100 dark:border-forest-700">
                <CardHeader>
                  <CardTitle className="text-forest-900 dark:text-white">{study.company}</CardTitle>
                  <CardDescription>
                    <Badge variant="outline" className="text-forest-500 border-forest-500">
                      {study.industry}
                    </Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-forest-900 dark:text-white">Challenge</h4>
                    <p className="text-forest-600 dark:text-forest-300 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-forest-900 dark:text-white">Solution</h4>
                    <p className="text-forest-600 dark:text-forest-300 text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-forest-900 dark:text-white">Results</h4>
                    <p className="text-forest-600 dark:text-forest-300 text-sm">{study.results}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start space-y-2">
                  <h4 className="font-medium text-forest-900 dark:text-white text-sm">Key Metrics</h4>
                  <ul className="space-y-1">
                    {study.metrics.map((metric, i) => (
                      <li key={i} className="text-forest-600 dark:text-forest-300 text-sm flex items-center">
                        <Star className="h-3 w-3 text-forest-500 mr-2" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-forest-900 dark:text-white mb-8 text-center">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-forest-100 dark:border-forest-700">
                <CardHeader className="pb-0">
                  <div className="flex items-center space-x-2">
                    <Quote className="h-5 w-5 text-forest-500" />
                    <CardTitle className="text-lg text-forest-900 dark:text-white">Client Testimonial</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 pb-6">
                  <p className="text-forest-600 dark:text-forest-300 mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-forest-900 dark:text-white">{testimonial.name}</p>
                      <p className="text-sm text-forest-600 dark:text-forest-300">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-forest-50 dark:bg-forest-800 border-t border-forest-100 dark:border-forest-700 flex justify-between pt-3 pb-3">
                  <Badge variant="outline" className="text-forest-500 border-forest-500">
                    {testimonial.industry}
                  </Badge>
                  <div className="flex items-center">
                    <span className="text-xs text-forest-600 dark:text-forest-300 mr-2">{testimonial.results}</span>
                    <Shield className="h-4 w-4 text-forest-500" />
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-forest-900 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to become our next success story?</h2>
          <p className="text-forest-300 mb-6 max-w-2xl mx-auto">
            Join the businesses that have transformed their lead management and protection with LeadShield.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-forest-500 hover:bg-forest-600">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-forest-800">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
