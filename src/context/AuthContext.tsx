
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export type UserRole = "admin" | "operator" | "customer";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  companyName?: string;
  avatarUrl?: string;
  subscription?: {
    plan: "free" | "start" | "growth" | "full";
    isActive: boolean;
    expiresAt?: string;
    isAnnual: boolean;
  };
}

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (email: string, password: string, name: string, companyName: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock implementation for demonstration
const mockUsers: User[] = [
  {
    id: "1",
    email: "admin@leadshield.com",
    name: "Admin User",
    role: "admin",
    companyName: "LeadShield",
    avatarUrl: "https://ui-avatars.com/api/?name=Admin+User&background=13271a&color=fff",
    subscription: {
      plan: "full",
      isActive: true,
      expiresAt: "2024-12-31",
      isAnnual: true,
    },
  },
  {
    id: "2",
    email: "operator@leadshield.com",
    name: "Operator User",
    role: "operator",
    companyName: "LeadShield",
    avatarUrl: "https://ui-avatars.com/api/?name=Operator+User&background=13271a&color=fff",
    subscription: {
      plan: "growth",
      isActive: true,
      expiresAt: "2024-06-30",
      isAnnual: false,
    },
  },
  {
    id: "3",
    email: "customer@example.com",
    name: "Customer User",
    role: "customer",
    companyName: "Example Corp",
    avatarUrl: "https://ui-avatars.com/api/?name=Customer+User&background=13271a&color=fff",
    subscription: {
      plan: "start",
      isActive: true,
      expiresAt: "2024-09-30",
      isAnnual: false,
    },
  }
];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  // Check for existing authentication
  useEffect(() => {
    const storedUser = localStorage.getItem("leadshield-user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const foundUser = mockUsers.find(u => u.email === email);
      
      if (!foundUser || password !== "password") { // Using simple password for demo
        throw new Error("Invalid email or password");
      }
      
      setUser(foundUser);
      localStorage.setItem("leadshield-user", JSON.stringify(foundUser));
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("leadshield-user");
    navigate("/login");
  };

  const signup = async (email: string, password: string, name: string, companyName: string) => {
    setIsLoading(true);
    
    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if email already exists
      if (mockUsers.some(u => u.email === email)) {
        throw new Error("Email already in use");
      }
      
      // Create new user (in a real app, this would be an API call)
      const newUser: User = {
        id: `${mockUsers.length + 1}`,
        email,
        name,
        role: "customer",
        companyName,
        avatarUrl: `https://ui-avatars.com/api/?name=${name}&background=13271a&color=fff`,
        subscription: {
          plan: "free",
          isActive: true,
          isAnnual: false,
        },
      };
      
      // In a real app, this would update the database
      mockUsers.push(newUser);
      
      // Set the current user
      setUser(newUser);
      localStorage.setItem("leadshield-user", JSON.stringify(newUser));
      navigate("/dashboard");
    } catch (error) {
      console.error("Signup failed:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
