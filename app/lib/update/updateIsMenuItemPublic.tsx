import { supabase } from "@/app/utils/supabase-browser";

export default async function updateIsMenuItemPublic(isPublic, menuItemId) {
  const id = parseInt(menuItemId);
  const { data, error } = await supabase
    .from("menu_item")
    .update({
      is_menu_item_public: isPublic,
    })
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  console.log("data returned after updating is_menu_item_public:", data);
}
