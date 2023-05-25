import { supabase } from "@/app/utils/supabase-browser";

export async function getOpeningHours(entityId) {
  const { data, error } = await supabase
    .from("opening_hours")
    .select()
    .eq("entity_id", entityId)
    .single();
    if (error ) {
        console.log('the error from getOpeningHours browser', error)
    } 
    console.log('the data from getOpeningHours browser',  data )
    return data
}

export async function getClosingHours(entityId) {
  const { data, error } = await supabase
    .from("closing_hours")
    .select()
    .eq("entity_id", entityId)
    .single();
    if (error ) {
        console.log('the error from getOpeningHours browser', error)
    } 
    console.log('the data from getOpeningHours browser',  data )
    return data
}
