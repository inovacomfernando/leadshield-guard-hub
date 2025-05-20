
-- Create bot_configs table to store bot configuration
CREATE TABLE public.bot_configs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  target_url TEXT NOT NULL,
  form_selectors JSONB NOT NULL, -- JSON object mapping form field selectors to values or data types
  schedule JSONB NOT NULL, -- When to run (time, frequency)
  execution_rules JSONB NOT NULL, -- Rules for execution (IP ranges, quantity limits, etc)
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_id UUID REFERENCES auth.users(id)
);

-- Create logs table to record bot execution results
CREATE TABLE public.bot_execution_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  bot_config_id UUID REFERENCES public.bot_configs(id) ON DELETE CASCADE,
  status TEXT NOT NULL, -- 'success', 'failure', etc.
  response_data JSONB, -- Response from the target site
  execution_details JSONB, -- Details about execution (IP used, timing, etc.)
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to update updated_at on bot_configs
CREATE TRIGGER update_bot_configs_updated_at
BEFORE UPDATE ON public.bot_configs
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- RLS Policies for bot_configs table
ALTER TABLE public.bot_configs ENABLE ROW LEVEL SECURITY;
CREATE POLICY bot_configs_user_policy ON public.bot_configs
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- RLS Policies for bot_execution_logs table
ALTER TABLE public.bot_execution_logs ENABLE ROW LEVEL SECURITY;
CREATE POLICY bot_execution_logs_user_policy ON public.bot_execution_logs
  USING (bot_config_id IN (SELECT id FROM public.bot_configs WHERE user_id = auth.uid()));
