import { supabase } from "@/app/utils/supabase-browser";

async function getMyEntityInfo(userId) {
  const { data, error } = await supabase
    .from("entity")
    .select()
    .eq("user_id", userId);
  if (error) throw error;
  return data[0];
}

async function getMyEntityInfoServer(supabaseServerClient, userId) {
  const { data, error } = await supabaseServerClient
    .from("entity")
    .select()
    .eq("user_id", userId);
  if (error) throw error;
  return data[0];
}
