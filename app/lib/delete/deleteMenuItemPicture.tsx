import { supabase } from "@/utils/supabase-browser";

export default async function deleteMenuItemPicture(menuItemId) {
  const { data, error } = await supabase
    .from("menu_item")
    .update({
      item_picture_url: "",
    })
    .eq("id", menuItemId)
    .single();
  if (error) throw error;
  console.log("data returned after deleting menu item picture", data);
}
