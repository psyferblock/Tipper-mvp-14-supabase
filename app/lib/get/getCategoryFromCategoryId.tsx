import { supabase } from "@/app/utils/supabase-browser";

export async function getCategoryFromCategoryId(categoryId) {
  const { data, error } = await supabase
    .from("menu_category")
    .select()
    .eq("id", categoryId)
    .single();
  if (error) throw error;
  // console.log("data from getCategoryFromCategoryId ", data);
  return data;
}
