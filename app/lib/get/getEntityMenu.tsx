import { supabase } from "@/app/utils/supabase-browser";

export async function getEntityMenu(entityId) {
  const { data, error } = await supabase
    .from("entity_menu_id")
    .select()
    .eq("entity_id", entityId)
    
    if (error) throw error
    console.log('data from get entity menu', data)
    return data
}
