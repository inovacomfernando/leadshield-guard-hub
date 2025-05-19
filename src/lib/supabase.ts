
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

// Initialize the Supabase client with default values when environment variables are not available
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://example.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "public-anon-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Custom hook to use Supabase client
export function useSupabaseClient() {
  return supabase;
}

// Custom hook to check subscription status
export function useSubscriptionStatus(userId?: string) {
  const [status, setStatus] = useState<{
    isLoading: boolean;
    isSubscribed: boolean;
    plan?: string;
    error?: string;
  }>({
    isLoading: true,
    isSubscribed: false,
  });

  useEffect(() => {
    if (!userId) {
      setStatus({ isLoading: false, isSubscribed: false });
      return;
    }

    // For now, we'll mock the subscription check rather than calling a potentially unavailable function
    setTimeout(() => {
      setStatus({ 
        isLoading: false, 
        isSubscribed: true,
        plan: 'growth', // Mock plan for testing
      });
    }, 1000);

    // Comment out the actual API call until Supabase is properly configured
    /*
    async function checkSubscription() {
      try {
        const { data, error } = await supabase.functions.invoke('check-subscription');
        
        if (error) throw error;
        
        setStatus({ 
          isLoading: false, 
          isSubscribed: data?.subscribed || false,
          plan: data?.subscription_tier,
        });
      } catch (error) {
        console.error("Error checking subscription:", error);
        setStatus({ 
          isLoading: false, 
          isSubscribed: false,
          error: "Failed to check subscription status"
        });
      }
    }

    checkSubscription();
    */
  }, [userId]);

  return status;
}
