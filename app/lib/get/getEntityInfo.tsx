import { supabase } from "@/app/utils/supabase-browser";

export async function getEntityInfo(entityId) {
  const { data, error } = await supabase
    .from("entity")
    .select()
    .eq("user_id", entityId);
  if (error) throw error;
  console.log("browser side entity profile data", data);
  return data[0];
}

export async function getEntityInfoServer(supabaseServerClient, entityId) {
  const { data, error } = await supabaseServerClient
    .from("entity")
    .select()
    .eq("id", entityId);
  if (error) throw error;
  console.log("server side entity information data", data);
  return data[0];
}
