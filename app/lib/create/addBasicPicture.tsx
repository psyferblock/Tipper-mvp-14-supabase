import { supabase } from "@/app/utils/supabase-browser";

export default async function addBasicPicture(
  pictureObject,
  entityId
) {
  const { data, error } = await supabase
    .from("entity_basic_media")
    .insert({
      media_category:pictureObject.media_category,
      media_url: pictureObject.media_url,
      entity_id: entityId,
    })
    .select();
  console.log("arrived before the error in addBasic pics");

  if (error) throw error;
  console.log("data returned after basic pictures are added:", data);
}
