import { supabase } from "@/app/utils/supabase-browser";

export default async function createMenuCategory({
  categoryName,
  isPublic,
}
) {
  const { data, error } = await supabase
    .from("menu_category")
    .insert({
      menu_category_name: categoryName,
      is_menu_category_public: isPublic,
    })
    .select()
    .single();

  if (error) throw error;
  console.log("data returned in createMenuCategory browser", data);
  return data;
}
