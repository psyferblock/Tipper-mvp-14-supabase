import { supabase } from "@/app/utils/supabase-browser";

export async function getMenuCategories(menuId: number) {
  const { data, error } = await supabase
    .from("menu_category")
    .select()
    .eq("entity_id", menuId);
  if (error) throw error;
  console.log('data from getMenuCategories browser ', data )

  return data;
}

export async function getMenuCategoriesServer(
  supabaseServerClient,
  menuId: number
) {
  const { data, error } = await supabaseServerClient
    .from("menu_category")
    .select()
    .eq("entity_id", menuId)
    .order("id", { ascending: true });
  if (error) throw error;
  console.log('data from getMenuCategories server ', data )
  return data;
}
