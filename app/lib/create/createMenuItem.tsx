import { supabase } from "@/app/utils/supabase_browser";

export default async function createMenuItem(
  isPublic: boolean,
  itemName: string,
  itemDescription: string,
  itemPrice: string,
  itemPictureUrl: string,
  menuCategoryId: number
) {
  const { data, error } = await supabase
    .from("menu_item")
    .insert({
      is_menu_item_public: isPublic,
      item_name: itemName,
      item_price: itemPrice,
      item_description: itemDescription,
      item_picture_url: itemPictureUrl,
      menu_category_id: menuCategoryId,
    })
    .select();

  if (error) throw error;
  console.log("data returned after item creation", data);
}
