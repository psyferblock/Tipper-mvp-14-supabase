import { supabase } from "@/app/utils/supabase-browser";

export default async function updateIsMenuCategoryPublic(
  menuCategoryId,
  isPublic
) {
  const { data, error } = await supabase
    .from("menu_category")
    .update({
      is_menu_category_public: isPublic,
    })
    .eq("id", menuCategoryId)
    .select()
    .single();
  if (error) throw error;
  console.log("data returned after updating is_menu_category_public:", data);
}
