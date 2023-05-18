import { supabase } from "@/app/utils/supabase-browser";

export async function getMenuCategories(entityId: number) {
  const { data, error } = await supabase
    .from("menu_category")
    .select()
    .eq("entity_id", entityId);
  if (error) throw error;
  return data;
}

export async function getMenuCategoriesServer(
  supabaseServerClient,
  entityId: number
) {
  const { data, error } = await supabaseServerClient
    .from("menu_category")
    .select()
    .eq("entity_id", entityId)
    .order("id", { ascending: true });
  if (error) throw error;
  return data;
}
