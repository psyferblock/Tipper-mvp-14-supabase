
import { supabase } from "@/app/utils/supabase-browser";
async function createEntity(
  userId: string,
  entityName: string,
  entityUniqueName: string,
  entityArea: string,
  entityAddress: string,
  entityEmailAddress: string,
  entityPhoneNumber: number,
  entityTypeId: number
) {
  const { data, error } = await supabase
    .from("entity")
    .insert({
      user_id: userId,
      entity_name: entityName,
      entity_unique_name: entityUniqueName,
      entity_area: entityArea,
      entity_address: entityAddress,
      entity_email: entityEmailAddress,
      entity_phone_number: entityPhoneNumber,
      entity_type_id: entityTypeId,
      is_verified: false,
      industry_id: 5,
    })
    .select()
    .single();

  if (error) throw error;
  console.log("data returned after entity creation", data);
  return data;
}

export default createEntity;

// this returns the entity info that has been registered.
