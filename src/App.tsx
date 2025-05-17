
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Settings from "./pages/Settings";
import Billing from "./pages/Billing";
import Features from "./pages/Features";
import SuccessStories from "./pages/SuccessStories";
import Documentation from "./pages/Documentation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Layout component for authenticated routes
const AuthenticatedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 relative">
          <Navbar />
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
};

// Private route component
const PrivateRoute = ({ element }: { element: React.ReactNode }) => {
  // In a real app, we would check authentication here
  const isAuthenticated = localStorage.getItem("leadshield-user") !== null;
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <AuthenticatedLayout>{element}</AuthenticatedLayout>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ThemeProvider>
        <TooltipProvider>
          <AuthProvider>
            <Toaster />
            <Sonner />
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/success-stories" element={<SuccessStories />} />
              <Route path="/documentation" element={<Documentation />} />

              {/* Protected routes */}
              <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
              <Route path="/leads" element={<PrivateRoute element={<Leads />} />} />
              <Route path="/settings" element={<PrivateRoute element={<Settings />} />} />
              <Route path="/billing" element={<PrivateRoute element={<Billing />} />} />
              <Route path="/features" element={<PrivateRoute element={<Features />} />} />

              {/* 404 route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </TooltipProvider>
      </ThemeProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
