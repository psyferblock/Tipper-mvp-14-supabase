import { supabase } from "@/app/utils/supabase_browser";

export default async function createMenuCategory({
  categoryName: categoryName,
  isPublic: isPublic,
  menuId: menuId,
}) {
  const { data, error } = await supabase
    .from("menu_category")
    .insert({
      menu_category_name: categoryName,
      category_public: isPublic,
      menu_id: menuId,
    })
    .select()
    .single();

  if (error) throw error;
  console.log("data returned in createMenuCategory browser", data);
  return data;
}
