import { supabase } from "@/app/utils/supabase-browser";

export default async function deletePictureFromHighlight(pictureId) {
  const { data, error } = await supabase
    .from("highlight_media")
    .delete()
    .eq("id", pictureId);
  if (error) throw error;
  console.log("after url is deleted from highlight", data);
}
