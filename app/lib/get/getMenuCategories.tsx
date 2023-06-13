import { supabase } from "@/app/utils/supabase-browser";

export async function getMenuCategories({ menuId: menuId }) {
  const { data, error } = await supabase
    .from("menu_category")
    .select()
    .eq("menu_id", menuId)
    .order("id", { ascending: true });

  // .single()

  if (error) throw error;
  console.log("data from getMenuCategories browser ", data);

  return data;
}

export async function getMenuCategoriesServer({
  supabaseServer: supabaseServer,
  menuId: menuId,
}) {
  const { data, error } = await supabaseServer
    .from("menu_category")
    .select(`*,menu_item(*)`)
    .eq("menu_id", menuId)
    .order("id", { ascending: true });

  if (error) throw error;
  console.log("data from getMenuCategories server ", data);
  return data;
}
