import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://osfecacncrmeshhezhxj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zZmVjYWNuY3JtZXNoaGV6aHhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg4NjQxNTgsImV4cCI6MjAwNDQ0MDE1OH0.91hPXdH33jM6aiDTuIPyz3kr2pgipTZG8zz9w_1uUJU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
