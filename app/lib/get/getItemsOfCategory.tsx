import { supabase } from "@/app/utils/supabase-browser";

export async function getItemsOfCategory(categoryId: number) {
  //Menu Items Reading from Database
  const { data, error } = await supabase
    .from("menu_item")
    .select()
    .eq("menu_category_id", categoryId);
  if (error) throw error;
  return data;
}

export async function getItemsOfCategoryServer({
  supabaseServer: supabaseServer,
  categoryId: categoryId,
}) {
  //Menu Items Reading from Database
  const { data, error } = await supabaseServer
    .from("menu_item")
    .select()
    .eq("menu_category_id", categoryId)
    .order("id", { ascending: true });

  if (error) throw error;
  return data;
}
