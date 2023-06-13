import { supabase } from "@/app/utils/supabase-browser";

export async function getEntityMenu(entityId: string) {
  const { data, error } = await supabase
    .from("entity_menu_id")
    .select()
    .eq("entity_id", entityId);

  if (error) throw error;
  console.log("data from getEntityMenu", data);
  return data[0];
}
export async function getEntityMenuServer(supabaseServer, entityId: string) {
  const { data, error } = await supabaseServer
    .from("entity_menu_id")
    .select()
    .eq("entity_id", entityId);

  if (error) throw error;
  console.log("data from getEntityMenuServer ", data);
  return data[0];
}
