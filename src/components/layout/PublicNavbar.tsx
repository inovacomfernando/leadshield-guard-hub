
import React from "react";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const PublicNavbar = () => {
  return (
    <header className="bg-white dark:bg-forest-900 border-b border-forest-100 dark:border-forest-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-10">
            <Link to="/">
              <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-forest-500" />
                <span className="font-bold text-xl text-forest-900 dark:text-white">LeadShield</span>
              </div>
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/success-stories">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Success Stories
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/blog">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/careers">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Careers
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/contact">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link to="/login?tab=signup">
              <Button className="bg-forest-500 hover:bg-forest-600 dark:bg-forest-500 dark:hover:bg-forest-600">
                Sign Up Free
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PublicNavbar;
