import { supabase } from "@/app/utils/supabase-browser";

export default async function addEntityTags(entityId){
    const {data,error}= await supabase.from("entity").select().eq("entity_id",entityId)

}

// the functino needs an entity id 
// then we find the entityId 
// we need to get thee data only of the tags
// in the entity we need to update the tags that are already there 
// then post it 