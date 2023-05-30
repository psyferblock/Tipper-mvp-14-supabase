import { supabase } from "@/app/utils/supabase-browser";

export default async function insertUrlsToHighlight(
  arrayOfPictureUrls: string[],
  highlightId
) {
  for (let i = 0; i < arrayOfPictureUrls.length; i++) {
    const { data, error } = await supabase
      .from("highlight_media")
      .insert({
        media_url: arrayOfPictureUrls[i],
        entity_highlight_id: highlightId,
      })
      .select();
    if (error) throw error;
    console.log("data returned after url is added to highlight", data);
  }
}
