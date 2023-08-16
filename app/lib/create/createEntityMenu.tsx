import { supabase } from "@/app/utils/supabase_browser";

export async function createEntityMenu({
  entityId: entityId,
  menuName: menuName,
}) {
  const { data, error } = await supabase
    .from("entity_menu_id")
    .insert({
      entity_id: entityId,
      menu_name: menuName,
    })
    .select();
  if (error) throw error;
  console.log("data from creating entity menu ", data);
  return data[0];
}
