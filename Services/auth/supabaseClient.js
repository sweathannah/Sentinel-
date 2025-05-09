import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://nggzvtkbaoxtucfcgjfm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5nZ3p2dGtiYW94dHVjZmNnamZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU3NzgzNzIsImV4cCI6MjA2MTM1NDM3Mn0.e8SN9tnM1AmZ95OXkTUJhgBct97gqrtVuCLXfvhyc4s';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);