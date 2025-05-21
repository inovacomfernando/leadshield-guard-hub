
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/context/ThemeContext";

const Sidebar: React.FC = () => {
  const { user, logout } = useAuth();
  const { t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  // Helper to check if a path is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col h-full bg-white border-r py-4 dark:bg-forest-900 dark:border-forest-700">
      <div className="px-6 mb-6">
        <Link to="/" className="flex items-center font-semibold">
          <span className="text-2xl font-bold text-forest-500 dark:text-forest-50">
            {t("app.name")}
          </span>
        </Link>
      </div>

      <div className="flex-1 space-y-1">
        <Link
          to="/dashboard"
          className={cn(
            "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
            isActive("/dashboard")
              ? "bg-forest-100 text-forest-900 dark:bg-forest-800 dark:text-forest-50"
              : "text-gray-500 hover:bg-forest-100 dark:text-gray-400 dark:hover:bg-forest-800 dark:hover:text-forest-50"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          {t("sidebar.dashboard")}
        </Link>

        <Link
          to="/leads"
          className={cn(
            "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
            isActive("/leads")
              ? "bg-forest-100 text-forest-900 dark:bg-forest-800 dark:text-forest-50"
              : "text-gray-500 hover:bg-forest-100 dark:text-gray-400 dark:hover:bg-forest-800 dark:hover:text-forest-50"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="8.5" cy="7" r="4" />
            <line x1="18" x2="23" y1="8" y2="13" />
            <line x1="23" x2="18" y1="8" y2="3" />
          </svg>
          {t("sidebar.leads")}
        </Link>

        <Link
          to="/settings"
          className={cn(
            "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
            isActive("/settings")
              ? "bg-forest-100 text-forest-900 dark:bg-forest-800 dark:text-forest-50"
              : "text-gray-500 hover:bg-forest-100 dark:text-gray-400 dark:hover:bg-forest-800 dark:hover:text-forest-50"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M12.22 2.02A2 2 0 0 1 13.98 2h.04a2 2 0 0 1 1.76 2.02l.09 1.74A2 2 0 0 1 17.61 7h.09a2 2 0 0 1 2 1.74l.03.22a2 2 0 0 1-.92 2.48l-.08.08a2 2 0 0 1-1.13.58l-1.19.38a2 2 0 0 1-1.59 0l-1.18-.38a2 2 0 0 1-1.13-.58l-.08-.08a2 2 0 0 1-.92-2.48l.03-.22a2 2 0 0 1 2-1.74h.09a2 2 0 0 1 1.76-2.02z" />
            <circle cx="12" cy="12" r="3" />
            <path d="M12.22 15.98A2 2 0 0 1 13.98 16h.04a2 2 0 0 1 1.76 2.02l.09 1.74A2 2 0 0 1 17.61 21h.09a2 2 0 0 1 2 1.74l.03.22a2 2 0 0 1-.92 2.48l-.08.08a2 2 0 0 1-1.13.58l-1.19.38a2 2 0 0 1-1.59 0l-1.18-.38a2 2 0 0 1-1.13-.58l-.08-.08a2 2 0 0 1-.92-2.48l.03-.22a2 2 0 0 1 2-1.74h.09a2 2 0 0 1 1.76-2.02z" />
          </svg>
          {t("sidebar.settings")}
        </Link>

      <Link
        to="/bot-manager"
        className={cn(
          "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
          isActive("/bot-manager")
            ? "bg-forest-100 text-forest-900 dark:bg-forest-800 dark:text-forest-50"
            : "text-gray-500 hover:bg-forest-100 dark:text-gray-400 dark:hover:bg-forest-800 dark:hover:text-forest-50"
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <rect width="8" height="8" x="8" y="8" rx="2" />
          <path d="M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2" />
          <path d="M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2" />
          <path d="M4 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2" />
          <path d="M10 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
        </svg>
        {t("sidebar.botManager")}
      </Link>
      </div>

      <div className="mt-auto px-6 pt-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Avatar className="h-7 w-7">
                <AvatarImage src={user?.avatarUrl} alt={user?.name} />
                <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="truncate text-left">{user?.name}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{user?.name}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {user?.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => logout()}>
              {t("sidebar.logout")}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                theme === "light" ? setTheme("dark") : setTheme("light");
              }}
            >
              {theme === "light" ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  </svg>
                  <span>{t("sidebar.darkMode")}</span>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                  </svg>
                  <span>{t("sidebar.lightMode")}</span>
                </>
              )}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Sidebar;
