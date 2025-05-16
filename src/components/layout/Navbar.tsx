
import { useEffect, useState } from "react";
import { Bell, Menu } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import DarkModeToggle from "./DarkModeToggle";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-16 h-16 z-30 transition-all duration-200 
      ${
        scrolled
          ? "bg-white/80 dark:bg-forest-900/80 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="h-full flex items-center justify-between px-4">
        <div className="flex items-center">
          <SidebarTrigger className="w-10 h-10 mr-2 flex items-center justify-center">
            <Menu className="h-5 w-5" />
          </SidebarTrigger>
          <img 
            src="/leadshild logo" 
            alt="LeadShield Logo" 
            className="h-6 w-6 md:block hidden" 
          />
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-forest-500 rounded-full"></span>
          </Button>
          <DarkModeToggle />
          
          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <img
                    src={user.avatarUrl || `https://ui-avatars.com/api/?name=${user.name}&background=13271a&color=fff`}
                    alt={user.name}
                    className="h-10 w-10 rounded-full"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex items-center gap-2">
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="flex items-center gap-2">
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
