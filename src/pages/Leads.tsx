
import React from "react";
import LeadTable from "@/components/leads/LeadTable";

// Mock data for leads
const mockLeads = [
  {
    id: "LD-1001",
    name: "John Smith",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    source: "Contact Form",
    score: 85,
    status: "valid" as const,
    createdAt: "2025-05-15T10:30:00Z",
    ipAddress: "192.168.1.1",
    location: "New York, USA",
  },
  {
    id: "LD-1002",
    name: "Maria Garcia",
    email: "maria@example.com",
    phone: "+1 (555) 987-6543",
    source: "Landing Page",
    score: 92,
    status: "valid" as const,
    createdAt: "2025-05-15T09:45:00Z",
    ipAddress: "192.168.1.2",
    location: "Miami, USA",
  },
  {
    id: "LD-1003",
    name: "Li Wei",
    email: "wei@example.com",
    phone: null,
    source: "Contact Form",
    score: 35,
    status: "suspicious" as const,
    createdAt: "2025-05-15T08:20:00Z",
    ipAddress: "192.168.1.3",
    location: "Beijing, China",
  },
  {
    id: "LD-1004",
    name: "Ahmed Khan",
    email: "ahmed@example.com",
    phone: "+44 20 1234 5678",
    source: "Newsletter Signup",
    score: 78,
    status: "valid" as const,
    createdAt: "2025-05-14T23:10:00Z",
    ipAddress: "192.168.1.4",
    location: "London, UK",
  },
  {
    id: "LD-1005",
    name: "Emma Wilson",
    email: "emma@example.com",
    phone: "+61 2 1234 5678",
    source: "Contact Form",
    score: 88,
    status: "valid" as const,
    createdAt: "2025-05-14T22:05:00Z",
    ipAddress: "192.168.1.5",
    location: "Sydney, Australia",
  },
  {
    id: "LD-1006",
    name: "Igor Petrov",
    email: "igor@example.com",
    phone: null,
    source: "Landing Page",
    score: 15,
    status: "fraudulent" as const,
    createdAt: "2025-05-14T20:30:00Z",
    ipAddress: "192.168.1.6",
    location: "Moscow, Russia",
  },
  {
    id: "LD-1007",
    name: "Sophia Martinez",
    email: "sophia@example.com",
    phone: "+52 55 1234 5678",
    source: "Contact Form",
    score: 95,
    status: "valid" as const,
    createdAt: "2025-05-14T18:15:00Z",
    ipAddress: "192.168.1.7",
    location: "Mexico City, Mexico",
  },
  {
    id: "LD-1008",
    name: "James Johnson",
    email: "james@example.com",
    phone: "+1 (555) 222-3333",
    source: "Newsletter Signup",
    score: 45,
    status: "suspicious" as const,
    createdAt: "2025-05-14T16:40:00Z",
    ipAddress: "192.168.1.8",
    location: "Toronto, Canada",
  },
  {
    id: "LD-1009",
    name: "Fatima Al-Farsi",
    email: "fatima@example.com",
    phone: "+971 4 123 4567",
    source: "Landing Page",
    score: 82,
    status: "valid" as const,
    createdAt: "2025-05-14T14:20:00Z",
    ipAddress: "192.168.1.9",
    location: "Dubai, UAE",
  },
  {
    id: "LD-1010",
    name: "Carlos Silva",
    email: "carlos@example.com",
    phone: "+55 11 1234 5678",
    source: "Contact Form",
    score: 25,
    status: "fraudulent" as const,
    createdAt: "2025-05-14T12:05:00Z",
    ipAddress: "192.168.1.10",
    location: "São Paulo, Brazil",
  },
];

const Leads: React.FC = () => {
  return (
    <div className="flex-1 p-8 pt-24">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Leads</h1>
        <p className="text-muted-foreground">
          Manage and monitor your incoming leads
        </p>
      </div>

      <LeadTable leads={mockLeads} />
    </div>
  );
};

export default Leads;
