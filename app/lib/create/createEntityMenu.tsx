import { supabase } from "@/app/utils/supabase-browser";


export async function createEntityMenu(entityId){
    const {data,error}=await supabase.from("entity_menu_id").insert({
        entity_id:entityId
    }).select()
    if (error) throw error
    console.log('data from creating entity menu ', data)
    return data[0]
}