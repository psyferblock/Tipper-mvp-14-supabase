import { supabase } from "@/app/utils/supabase-browser";
export default async function updateMenuCategoryName(
  newCategoryName,
  menuCategoryId
) {
  const { data, error } = await supabase
    .from("menu_category")
    .update({
      menu_category_name: newCategoryName,
    })
    .eq("id", menuCategoryId)
    .select();
  if (error) throw error;
  console.log(data);
}
