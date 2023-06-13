import { supabase } from "@/app/utils/supabase-browser";
import { error } from "console";

export async function getEntityIdUsingUniqueNameServer({
  supabaseServer: supabaseServer,
  entityUniqueName: entityUniqueName,
}) {
  const { data, error } = await supabaseServer
    .from("entity")
    .select("id")
    .eq("entity_unique_name", entityUniqueName)
    .single();
  if (error) throw error;
  console.log("data from getEntityIdUsingUniqueNameServer  ", data);
  return data;
}
