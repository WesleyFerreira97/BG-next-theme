import { createClient } from "@supabase/supabase-js";

const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY_ENV;
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL_ENV;
const public_storage = "https://qelkbubgpdwwhqzoqphu.supabase.co/storage/v1/object/public";

export const supaDb = createClient(SUPABASE_URL as string, SUPABASE_ANON_KEY as string);

export { public_storage };