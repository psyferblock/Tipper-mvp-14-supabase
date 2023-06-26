import { supabase } from "@/app/utils/supabase-browser";

export async function getBasicPictures(mediaCategory, entityId) {
  const { data, error } = await supabase
    .from("entity_basic_media")
    .select()
    .eq("media_category", mediaCategory)
    .eq("entity_id", entityId);
  if (error) throw error;
  // console.log("arrayOfPictures of pictures returned:", data);
  return data;
}

export async function getBasicPicturesServer(supabaseServerClient, entityId) {
  const { data, error } = await supabaseServerClient
    .from("entity_basic_media")
    .select()
    .eq("entity_id", entityId);

  // .match({"entity_id": entityId, "media_category": basicStatus})
  if (error) throw error;
  // console.log("arrayOfPictures of pictures returned:", data);
  return data;
}
