import { supabase } from "@/app/utils/supabase-browser";

export async function getEntityIdFromUniqueName(entityUniqueName) {
  const { data, error } = await supabase
    .from("entity")
    .select("id")
    .eq("entity_unique_name", entityUniqueName)
    if (error) throw error 
    console.log('data for the entity id ', data)
    return data
}

export async function getEntityIdFromUniqueNameServer(
  supabaseServerClient,
  entityUniqueName
) {
  const { data, error } = await supabaseServerClient
    .from("entity")
    .select("id")
    .eq("entity_unique_name", entityUniqueName)
    .single()

    if (error) throw error 
    console.log('data for the entity id ', data)
    return data
}
