
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4";

const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface BotExecutionRequest {
  configId: string;
  immediate?: boolean;
}

serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { configId, immediate = false }: BotExecutionRequest = await req.json();

    // Get the bot configuration
    const { data: botConfig, error: configError } = await supabase
      .from("bot_configs")
      .select("*")
      .eq("id", configId)
      .single();

    if (configError || !botConfig) {
      console.error("Error fetching bot configuration:", configError);
      return new Response(
        JSON.stringify({ 
          error: "Bot configuration not found", 
          details: configError?.message 
        }),
        {
          status: 404,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // In a real implementation, this is where you would:
    // 1. Validate the execution time against the schedule if not immediate
    // 2. Send the task to a worker or external service that runs Selenium/Puppeteer
    // 3. For demo purposes, we'll just simulate a successful execution
    
    // Log the execution attempt
    const { data: logEntry, error: logError } = await supabase
      .from("bot_execution_logs")
      .insert({
        bot_config_id: configId,
        status: "scheduled",
        execution_details: {
          scheduled: new Date().toISOString(),
          immediate: immediate,
          execution_mode: "simulation" // In real implementation: "headless", "visible", etc.
        }
      })
      .select()
      .single();

    if (logError) {
      console.error("Error creating log entry:", logError);
      return new Response(
        JSON.stringify({ error: "Failed to create execution log", details: logError.message }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Return success response
    return new Response(
      JSON.stringify({
        message: "Bot execution scheduled successfully",
        execution: {
          id: logEntry.id,
          status: "scheduled",
          configName: botConfig.name,
          targetUrl: botConfig.target_url
        }
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error) {
    console.error("Error in bot executor function:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error", details: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
