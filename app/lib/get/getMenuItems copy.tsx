import { supabase } from "@/utils/supabase-browser";

export async function getMenuItems(categoryId: number) {
  //Menu Items Reading from Database
  const { data, error } = await supabase
    .from("menu_item")
    .select()
    .eq("menu_category_id", categoryId);
  if (error) throw error;
  return data;
}

export async function getMenuItemsServer(
  supabaseServerClient,
  categoryId: number
) {
  //Menu Items Reading from Database
  const { data, error } = await supabaseServerClient
    .from("menu_item")
    .select()
    .eq("menu_category_id", categoryId)
    .order("id", { ascending: true });

  if (error) throw error;
  return data;
}
