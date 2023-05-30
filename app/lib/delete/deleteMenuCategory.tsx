import { supabase } from "@/app/utils/supabase-browser";

export default async function deleteMenuCategory(menuCategoryId) {
  const { data, error } = await supabase
    .from("menu_category")
    .delete()
    .eq("id", menuCategoryId);
  if (error) throw error;
  console.log("after deleting menu category", data);
}
