import { supabase } from "@/app/utils/supabase-browser";

async function createMenuCategory(entityId) {
  const { data, error } = await supabase
    .from("menu_category")
    .insert({
     
      entity_id: entityId,
    })
    .select()
    // .single();
  if (error) throw error;
  return data;
}

export default createMenuCategory;
