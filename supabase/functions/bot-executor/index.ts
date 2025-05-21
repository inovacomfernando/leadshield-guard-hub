
// Supabase Edge Function for bot execution
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Define CORS headers for API responses
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Handle HTTP requests
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: corsHeaders,
      status: 204,
    });
  }

  try {
    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    // Get request body
    const data = await req.json();
    const { configId, immediate = false } = data;

    console.log("Bot execution requested for config:", configId);

    if (!configId) {
      return new Response(
        JSON.stringify({ error: "Missing configId parameter" }),
        { 
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400 
        }
      );
    }

    // Get bot configuration
    const { data: botConfig, error: configError } = await supabaseClient
      .from("bot_configs")
      .select("*")
      .eq("id", configId)
      .single();

    if (configError || !botConfig) {
      console.error("Error fetching bot config:", configError);
      return new Response(
        JSON.stringify({ error: "Bot configuration not found" }),
        { 
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 404 
        }
      );
    }

    // Create execution log entry
    const { data: logEntry, error: logError } = await supabaseClient
      .from("bot_execution_logs")
      .insert({
        bot_config_id: configId,
        status: "pending",
        execution_details: {
          immediate: immediate,
          scheduled_time: new Date().toISOString(),
          target_url: botConfig.target_url,
          field_count: Object.keys(botConfig.form_selectors).length,
        }
      })
      .select()
      .single();

    if (logError) {
      console.error("Error creating log entry:", logError);
      return new Response(
        JSON.stringify({ error: "Failed to create execution log" }),
        { 
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 500 
        }
      );
    }

    // Process mock execution (in real implementation, this would use a headless browser)
    // In a production environment, this would likely be done asynchronously
    const executionResult = await mockBotExecution(botConfig);
    
    // Update log with execution results
    const { error: updateError } = await supabaseClient
      .from("bot_execution_logs")
      .update({
        status: executionResult.success ? "success" : "failure",
        response_data: executionResult.response,
        execution_details: {
          ...logEntry.execution_details,
          execution_time: executionResult.executionTime,
          completed_at: new Date().toISOString(),
          fields_filled: executionResult.fieldsFilled,
        }
      })
      .eq("id", logEntry.id);

    if (updateError) {
      console.error("Error updating log entry:", updateError);
      return new Response(
        JSON.stringify({ error: "Failed to update execution log" }),
        { 
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 500 
        }
      );
    }

    return new Response(
      JSON.stringify({
        message: "Bot execution completed",
        success: executionResult.success,
        logId: logEntry.id
      }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200 
      }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500 
      }
    );
  }
});

// Mock function for bot execution (would be replaced with real headless browser automation)
async function mockBotExecution(botConfig: any) {
  console.log(`Simulating bot execution for target: ${botConfig.target_url}`);
  
  // Simulate processing time
  const startTime = new Date();
  await new Promise(resolve => setTimeout(resolve, 2000));
  const endTime = new Date();
  const executionTime = endTime.getTime() - startTime.getTime();
  
  // Get form selectors
  const formSelectors = botConfig.form_selectors;
  const fieldsFilled = Object.keys(formSelectors).map(field => {
    return {
      field,
      selector: formSelectors[field],
      status: "filled"
    };
  });
  
  // Simulate successful form submission ~80% of the time
  const success = Math.random() > 0.2;
  
  return {
    success,
    executionTime,
    fieldsFilled,
    response: {
      statusCode: success ? 200 : 400,
      message: success ? "Form submitted successfully" : "Failed to submit form",
      timestamp: new Date().toISOString()
    }
  };
}
