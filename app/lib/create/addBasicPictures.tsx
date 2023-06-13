// A basic picture is a picture belonging to any category (cover photos, menu item photos,
// contact us photo) except the highlight category

// This function takes as parameter an array of ojects, each object represents a picture object
//containing an id, media category, and media url
import { supabase } from "@/app/utils/supabase-browser";

export default async function addBasicPictures(
  arrayOfPictureObjects,
  entityId
) {
  for (let i = 0; i < arrayOfPictureObjects.length; i++) {
    const { data, error } = await supabase
      .from("entity_basic_media")
      .insert({
        media_category: arrayOfPictureObjects[i]?.media_category,
        media_url: arrayOfPictureObjects[i]?.media_url,
        entity_id: entityId,
      })
      .select();
    console.log("arrived before the error in addBasic pics");

    if (error) throw error;
    console.log("data returned after basic pictures are added:", data);
  }
}
