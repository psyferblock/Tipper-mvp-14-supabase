import { supabase } from "@/app/utils/supabase-browser"

async function createMenuCategory(       categoryName,
  isPublic,
  entityId) {
    const {data,error}= await supabase.from("menu_category")
    .insert({
   menu_category_name: categoryName,
      entity_id: entityId,
      is_menu_category_public: isPublic,
    })
     .select()
    .single();
    if (error) throw error
  return (
    data
  )
}

export default createMenuCategory