import { supabase } from "@/app/utils/supabase-browser"

async function getEntityTypes() {
    const {data,error}= await supabase
    .from("entity_type")
    .select("*")
    if (error) throw error
    console.log('entityTypes', data)
  return (
    data
  )

}

export default getEntityTypes
//THIS FUNCTION RETURNS THE ENTITY TYPES IN AN ARRAY