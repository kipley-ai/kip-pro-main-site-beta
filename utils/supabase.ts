import { createClient } from "@supabase/supabase-js";

export const supabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_API_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_API_KEY!
);

export const supabaseSecretClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_API_URL!,
  process.env.SUPABASE_SECRET_KEY!
);
