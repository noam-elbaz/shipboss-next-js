import { createClient } from "@supabase/supabase-js";

export default createClient(
  process.env.SUPBASE_URL,
  process.env.SUPABASE_API_KEY
);
