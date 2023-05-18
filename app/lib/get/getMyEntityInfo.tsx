import { supabase } from "@/app/utils/supabase-browser";

export async function getMyEntityInfo(userId) {
  const { data, error } = await supabase
    .from("entity")
    .select()
    .eq("user_id", userId);
  if (error) throw error;
  return data[0];
}

export async function getMyEntityInfoServer(supabaseServerClient, userId) {
  const { data, error } = await supabaseServerClient
    .from("entity")
    .select()
    .eq("user_id", userId);
  if (error) throw error;
  return data[0];
}
