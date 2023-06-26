// A basic picture is a picture belonging to any category (cover photos, menu item photos,
// contact us photo) except the highlight category

import { supabase } from "@/app/utils/supabase-browser";

export default async function deleteBasicPictureWithId(pictureId) {
  const { data, error } = await supabase
    .from("entity_basic_media")
    .delete()
    .eq("id", pictureId);
  if (error) throw error;
  console.log("after picture is deleted from basic_entity_media", data);
}
