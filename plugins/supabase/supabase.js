import { createClient } from '@supabase/supabase-js';

const runtimeConfig = useRuntimeConfig();

const supabase = createClient(
  runtimeConfig.public.supabaseUrl,
  runtimeConfig.public.supabaseKey
);

export default supabase;
