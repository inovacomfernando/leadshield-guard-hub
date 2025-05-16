
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useAuth } from "@/context/AuthContext";
import { Shield, Home, Users, Settings, CreditCard, LogOut, ChartBar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AppSidebar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sidebar 
      side="left"
      variant="sidebar"
    >
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-2">
          <img 
            src="/logoshildv.1.svg"
            alt="LeadShield logo" 
            className="h-8 w-8 text-forest-500" 
          />
          {!collapsed && <h2 className="text-xl font-bold text-forest-900 dark:text-white"></h2>}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className={location.pathname === "/dashboard" ? "bg-forest-100 dark:bg-forest-800 text-forest-900 dark:text-white" : ""}>
              <Link to="/dashboard" className="flex items-center space-x-2">
                <Home className="h-5 w-5" />
                {!collapsed && <span>Dashboard</span>}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className={location.pathname === "/leads" ? "bg-forest-100 dark:bg-forest-800 text-forest-900 dark:text-white" : ""}>
              <Link to="/leads" className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                {!collapsed && <span>Leads</span>}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className={location.pathname === "/features" ? "bg-forest-100 dark:bg-forest-800 text-forest-900 dark:text-white" : ""}>
              <Link to="/features" className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                {!collapsed && <span>Features</span>}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className={location.pathname === "/billing" ? "bg-forest-100 dark:bg-forest-800 text-forest-900 dark:text-white" : ""}>
              <Link to="/billing" className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5" />
                {!collapsed && <span>Billing</span>}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className={location.pathname === "/settings" ? "bg-forest-100 dark:bg-forest-800 text-forest-900 dark:text-white" : ""}>
              <Link to="/settings" className="flex items-center space-x-2">
                <Settings className="h-5 w-5" />
                {!collapsed && <span>Settings</span>}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="flex flex-col space-y-4">
          {user && !collapsed && (
            <div className="flex items-center space-x-2 px-3 py-2">
              {user.avatarUrl && (
                <img 
                  src={user.avatarUrl} 
                  alt={user.name} 
                  className="h-8 w-8 rounded-full" 
                />
              )}
              <div className="flex flex-col">
                <span className="font-medium">{user.name}</span>
                <span className="text-xs text-muted-foreground">{user.role}</span>
              </div>
            </div>
          )}
          <Button 
            variant="ghost" 
            onClick={logout} 
            className="flex items-center justify-start space-x-2"
          >
            <LogOut className="h-5 w-5" />
            {!collapsed && <span>Logout</span>}
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
