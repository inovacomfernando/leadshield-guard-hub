
import React, { useState } from "react";
import { Download, CreditCard, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import PlanCard, { PlanTier } from "@/components/billing/PlanCard";
import { useAuth } from "@/context/AuthContext";
import { toast } from "@/components/ui/use-toast";

const Billing: React.FC = () => {
  const { user } = useAuth();
  const [annualBilling, setAnnualBilling] = useState(user?.subscription?.isAnnual || false);
  
  const handleSelectPlan = (tier: PlanTier, isAnnual: boolean) => {
    toast({
      title: "Subscription Update",
      description: `You selected the ${tier.toUpperCase()} plan with ${isAnnual ? "annual" : "monthly"} billing.`,
      duration: 5000,
    });
  };

  const handleDownloadInvoice = (invoiceId: string) => {
    toast({
      title: "Invoice Downloaded",
      description: `Invoice #${invoiceId} has been downloaded.`,
      duration: 3000,
    });
  };

  const handleViewContract = () => {
    toast({
      title: "Contract Viewer",
      description: "Opening your service contract.",
      duration: 3000,
    });
  };

  // Mock invoices data
  const invoices = [
    {
      id: "INV-2025-005",
      amount: "$49.99",
      status: "Paid",
      date: "May 1, 2025",
    },
    {
      id: "INV-2025-004",
      amount: "$49.99",
      status: "Paid",
      date: "Apr 1, 2025",
    },
    {
      id: "INV-2025-003",
      amount: "$49.99",
      status: "Paid",
      date: "Mar 1, 2025",
    },
    {
      id: "INV-2025-002",
      amount: "$49.99",
      status: "Paid", 
      date: "Feb 1, 2025",
    },
    {
      id: "INV-2025-001",
      amount: "$49.99",
      status: "Paid",
      date: "Jan 1, 2025",
    },
  ];

  const planFeatures = {
    free: [
      { name: "Up to 100 leads/month", included: true },
      { name: "Basic lead scoring", included: true },
      { name: "Email support", included: true },
      { name: "Custom scoring rules", included: false },
      { name: "API Access", included: false },
      { name: "Team members", included: false },
      { name: "Advanced analytics", included: false },
      { name: "Webhook integrations", included: false },
    ],
    start: [
      { name: "Up to 500 leads/month", included: true },
      { name: "Advanced lead scoring", included: true },
      { name: "Email & chat support", included: true },
      { name: "Custom scoring rules", included: true, limit: "2 rules" },
      { name: "API Access", included: true },
      { name: "Team members", included: true, limit: "2 users" },
      { name: "Advanced analytics", included: false },
      { name: "Webhook integrations", included: false },
    ],
    growth: [
      { name: "Up to 2,000 leads/month", included: true },
      { name: "Advanced lead scoring", included: true },
      { name: "Priority support", included: true },
      { name: "Custom scoring rules", included: true, limit: "5 rules" },
      { name: "API Access", included: true },
      { name: "Team members", included: true, limit: "5 users" },
      { name: "Advanced analytics", included: true },
      { name: "Webhook integrations", included: true },
    ],
    full: [
      { name: "Unlimited leads", included: true },
      { name: "Advanced lead scoring", included: true },
      { name: "24/7 priority support", included: true },
      { name: "Custom scoring rules", included: true, limit: "unlimited" },
      { name: "API Access", included: true },
      { name: "Team members", included: true, limit: "unlimited" },
      { name: "Advanced analytics", included: true },
      { name: "Webhook integrations", included: true },
    ],
  };

  return (
    <div className="flex-1 p-8 pt-24">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Billing & Subscription</h1>
        <p className="text-muted-foreground">
          Manage your subscription, payment methods and billing history
        </p>
      </div>

      <div className="space-y-8">
        {/* Current Plan */}
        <Card>
          <CardHeader>
            <CardTitle>Current Plan</CardTitle>
            <CardDescription>
              You are currently on the {user?.subscription?.plan.toUpperCase()} plan with {user?.subscription?.isAnnual ? "annual" : "monthly"} billing.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">
                  {user?.subscription?.plan === "free" ? "Free Plan" :
                   user?.subscription?.plan === "start" ? "Starter Plan" :
                   user?.subscription?.plan === "growth" ? "Growth Plan" :
                   "Full Shield Plan"}
                </p>
                {user?.subscription?.expiresAt && (
                  <p className="text-sm text-muted-foreground">
                    Your subscription renews on {new Date(user.subscription.expiresAt).toLocaleDateString()}
                  </p>
                )}
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" onClick={handleViewContract}>
                  <FileText className="h-4 w-4 mr-2" />
                  View Contract
                </Button>
                <Button className="bg-forest-500 hover:bg-forest-600">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Manage Payment
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Plan Selection */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Available Plans</h2>
            <div className="flex items-center space-x-2">
              <Label htmlFor="billing-toggle" className="text-muted-foreground">Monthly</Label>
              <Switch
                id="billing-toggle"
                checked={annualBilling}
                onCheckedChange={setAnnualBilling}
              />
              <Label htmlFor="billing-toggle" className={annualBilling ? "font-medium" : "text-muted-foreground"}>
                Annual (Save 15%)
              </Label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PlanCard
              name="Free"
              tier="free"
              description="Get started with basic lead protection"
              monthlyPrice={0}
              features={planFeatures.free}
              isCurrentPlan={user?.subscription?.plan === "free"}
              onSelectPlan={handleSelectPlan}
              showAnnual={annualBilling}
            />
            <PlanCard
              name="Starter"
              tier="start"
              description="Protection for growing businesses"
              monthlyPrice={49}
              annualPrice={499}
              features={planFeatures.start}
              isCurrentPlan={user?.subscription?.plan === "start"}
              onSelectPlan={handleSelectPlan}
              showAnnual={annualBilling}
            />
            <PlanCard
              name="Growth"
              tier="growth"
              description="Advanced protection & analytics"
              monthlyPrice={99}
              annualPrice={999}
              features={planFeatures.growth}
              isPopular
              isCurrentPlan={user?.subscription?.plan === "growth"}
              onSelectPlan={handleSelectPlan}
              showAnnual={annualBilling}
            />
            <PlanCard
              name="Full Shield"
              tier="full"
              description="Enterprise-grade protection"
              monthlyPrice={249}
              annualPrice={2499}
              features={planFeatures.full}
              isCurrentPlan={user?.subscription?.plan === "full"}
              onSelectPlan={handleSelectPlan}
              showAnnual={annualBilling}
            />
          </div>
        </div>
        
        {/* Invoices */}
        <Card>
          <CardHeader>
            <CardTitle>Invoices & Billing History</CardTitle>
            <CardDescription>
              View and download your invoices from previous billing periods
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b">
                    <th className="pb-2 font-medium">Invoice</th>
                    <th className="pb-2 font-medium">Date</th>
                    <th className="pb-2 font-medium">Amount</th>
                    <th className="pb-2 font-medium">Status</th>
                    <th className="pb-2 font-medium text-right">Download</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((invoice) => (
                    <tr key={invoice.id} className="border-b">
                      <td className="py-4">{invoice.id}</td>
                      <td className="py-4">{invoice.date}</td>
                      <td className="py-4">{invoice.amount}</td>
                      <td className="py-4">
                        <span className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                          {invoice.status}
                        </span>
                      </td>
                      <td className="py-4 text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDownloadInvoice(invoice.id)}
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Billing;
