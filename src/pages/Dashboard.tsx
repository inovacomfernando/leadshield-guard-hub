
import { useAuth } from "@/context/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, AlertTriangle, CheckCircle } from "lucide-react";
import { PieChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import LeadMetricsCard from "@/components/dashboard/LeadMetricsCard";
import ScoreDistributionChart from "@/components/dashboard/ScoreDistributionChart";

// Mock data for charts
const timeSpentData = [
  { name: "Mon", value: 120 },
  { name: "Tue", value: 150 },
  { name: "Wed", value: 180 },
  { name: "Thu", value: 140 },
  { name: "Fri", value: 200 },
  { name: "Sat", value: 90 },
  { name: "Sun", value: 60 },
];

const scoreDistributionData = [
  { name: "High Risk", value: 42, color: "#ef4444" },
  { name: "Medium Risk", value: 78, color: "#f59e0b" },
  { name: "Low Risk", value: 160, color: "#5ab473" },
];

const recentLeads = [
  {
    id: "LD-1234",
    name: "John Smith",
    email: "john@example.com",
    score: 85,
    status: "valid",
    timestamp: "2025-05-15T14:32:00Z",
  },
  {
    id: "LD-1235",
    name: "Alice Johnson",
    email: "alice@example.com",
    score: 35,
    status: "suspicious",
    timestamp: "2025-05-15T14:30:00Z",
  },
  {
    id: "LD-1236",
    name: "Robert Brown",
    email: "robert@example.com",
    score: 90,
    status: "valid",
    timestamp: "2025-05-15T14:28:00Z",
  },
  {
    id: "LD-1237",
    name: "Emily Davis",
    email: "emily@example.com",
    score: 15,
    status: "fraudulent",
    timestamp: "2025-05-15T14:25:00Z",
  },
  {
    id: "LD-1238",
    name: "Michael Wilson",
    email: "michael@example.com",
    score: 75,
    status: "valid",
    timestamp: "2025-05-15T14:20:00Z",
  },
];

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="flex-1 p-8 pt-24">
      <div className="flex flex-col space-y-8 max-w-7xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, {user?.name}!</h1>
          <p className="text-muted-foreground">
            Here's what's happening with your leads today.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <LeadMetricsCard
            title="Total Leads"
            value="2,851"
            changePercentage={12}
            icon={<Users className="h-4 w-4 text-forest-500" />}
            description="Total leads captured this month"
          />
          <LeadMetricsCard
            title="Blocked Leads"
            value="432"
            changePercentage={-8}
            icon={<Shield className="h-4 w-4 text-forest-500" />}
            description="Fraudulent leads prevented"
          />
          <LeadMetricsCard
            title="Suspicious"
            value="128"
            changePercentage={5}
            icon={<AlertTriangle className="h-4 w-4 text-forest-500" />}
            description="Leads flagged for review"
          />
          <LeadMetricsCard
            title="Conversion Rate"
            value="24.3%"
            changePercentage={2.5}
            icon={<CheckCircle className="h-4 w-4 text-forest-500" />}
            description="From valid leads to customers"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="glass-card hover-scale">
            <CardHeader>
              <CardTitle>Lead Time on Page</CardTitle>
              <CardDescription>
                Average time visitors spent on your landing page
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={timeSpentData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                    <XAxis dataKey="name" stroke="var(--muted-foreground)" />
                    <YAxis 
                      stroke="var(--muted-foreground)" 
                      label={{ 
                        value: 'seconds', 
                        angle: -90, 
                        position: 'left',
                        style: { textAnchor: 'middle', fill: 'var(--muted-foreground)' } 
                      }}
                    />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#5ab473"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <ScoreDistributionChart data={scoreDistributionData} />
        </div>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Recent Leads</CardTitle>
            <CardDescription>
              Latest leads with their scores and status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b">
                    <th className="pb-2 pl-4">ID</th>
                    <th className="pb-2">Name</th>
                    <th className="pb-2">Email</th>
                    <th className="pb-2">Score</th>
                    <th className="pb-2">Status</th>
                    <th className="pb-2">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {recentLeads.map((lead) => (
                    <tr 
                      key={lead.id}
                      className="border-b border-border hover:bg-forest-50/50 dark:hover:bg-forest-800/50"
                    >
                      <td className="py-3 px-4 font-mono text-xs">{lead.id}</td>
                      <td className="py-3">{lead.name}</td>
                      <td className="py-3">{lead.email}</td>
                      <td className="py-3">
                        <div className="flex items-center">
                          <div className="w-10 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mr-2">
                            <div
                              className={`h-2.5 rounded-full ${
                                lead.score > 70
                                  ? "bg-green-500"
                                  : lead.score > 40
                                  ? "bg-yellow-500"
                                  : "bg-red-500"
                              }`}
                              style={{ width: `${lead.score}%` }}
                            ></div>
                          </div>
                          <span>{lead.score}</span>
                        </div>
                      </td>
                      <td className="py-3">
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            lead.status === "valid"
                              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                              : lead.status === "suspicious"
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                              : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                          }`}
                        >
                          {lead.status}
                        </span>
                      </td>
                      <td className="py-3 text-muted-foreground">
                        {new Date(lead.timestamp).toLocaleTimeString()}
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

export default Dashboard;
