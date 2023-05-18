import { supabase } from "@/app/utils/supabase-browser";

export async function getEntityIdFromUniqueName(entityUniqueName) {
  const { data, error } = await supabase
    .from("entity")
    .select()
    .eq("entity_unique_name", entityUniqueName)
    if (error) throw error 
    console.log('data for the entity id ', data)
    return data 
}

export async function getEntityIdFromUniqueNameServer(
  supabaseServerClient,
  entityUniqueName
) {
  const { data, error } = await supabaseClientServer
    .from("entity")
    .select()
    .eq("entity_unique_name", entityUniqueName);
    if (error) throw error 
    console.log('data for the entity id ', data)
    return data 
}
