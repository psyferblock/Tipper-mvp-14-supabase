
import { supabase } from "@/app/utils/supabase-browser";

export async function updateUserHasEntity(userId,hasEntityValue){
    const { data, error } = await supabase
  .from('user_profile')
  .insert([

    { has_entity: hasEntityValue}
  ]
  )
  .eq("id",userId)
  .select()
  if (error) throw error
  console.log('data from updata user has entity', data)
  return data 
}

export async function updateUserHasEntityServer(supabaseServerClient,hasEntityValue){
    const { data, error } = await supabaseServerClient
  .from('user_profile')
  .insert(
    { has_entity: hasEntityValue}
  ).select()
  if (error) throw error
  console.log('data from updata user has entity', data)
  return data 
}