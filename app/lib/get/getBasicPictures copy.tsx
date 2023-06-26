import { supabase } from "@/app/utils/supabase-browser";

export async function getBasicPictures(mediaCategory, entityId) {
  const { data, error } = await supabase
    .from("entity_basic_media")
    .select()
    .eq("media_category", mediaCategory)
    .eq("entity_id", entityId);
  if (error) throw error;
  // console.log("arrayOfPictures of category returned:", data);
  return data;
}

export async function getBasicPicturesServer(supabaseServerClient, entityId) {
  const { data, error } = await supabaseServerClient
    .from("entity_basic_media")
    .select()
    .eq("entity_id", entityId);
  //   can replace here with the functions used in this example:
  //   const { data, error } = await supabase
  // .from('cities')
  // .select('name, country_id')
  // .match({name: 'Beijing', country_id: 156})
  if (error) throw error;
  // console.log("arrayOfPictures of category returned:", data);
  return data;
}
