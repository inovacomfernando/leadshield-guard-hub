// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://tolcvuukssapooppjkif.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvbGN2dXVrc3NhcG9vcHBqa2lmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3NjkzNjYsImV4cCI6MjA2MzM0NTM2Nn0.xmc99oWHMFIZBIZN-nwG4b7drAoxYAr81yQXHgfnWjs";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);