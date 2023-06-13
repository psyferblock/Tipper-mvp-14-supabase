import { supabase } from "@/app/utils/supabase-browser";

export async function getHighlights(entityId) {
  const { data, error } = await supabase
    .from("entity_highlight")
    .select()
    .eq("entity_id", entityId);
  if (error) throw error;
  return data;
}
export async function getHighlightsServer(supabaseServerClient, entityId) {
  const { data, error } = await supabaseServerClient
    .from("entity_highlight")
    .select()
    .eq("entity_id", entityId);
  if (error) throw error;
  return data;
}
