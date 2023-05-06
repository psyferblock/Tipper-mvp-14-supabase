import { supabase } from "@/app/utils/supabase-browser"
function createEntity(userId,
     entityName,
        entityTypeId,
        entityAddress,
        entityEmailAddress,
        entityPhoneNumber,
        arrOfTags) {
            const {data,error}=await supabase.from("entity")
            .insert({
                user_id: userId,
      entity_name: entityName,
      entity_type_id: entityTypeId,
      entity_address: entityAddress,
      entity_email: entityEmailAddress,
      entity_phone_number: entityPhoneNumber,
      entity_tags: arrOfTags,
      is_verified: false,
            })
            .select()
            .single()

            if (error ) throw error
            console.log('data returned after entity creation', data)
  return (
    data
  )
}

export default createEntity

// this returns the entity info that has been registered. 