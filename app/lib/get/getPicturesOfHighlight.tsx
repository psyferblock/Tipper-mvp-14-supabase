import { supabase } from "@/utils/supabase-browser";

export async function getPicturesOfHighlight(highlightId) {
  const { data, error } = await supabase
    .from("highlight_media")
    .select()
    .eq("entity_highlight_id", highlightId);
  if (error) throw error;
  console.log("arrayOfUrls of highlight returned:", data);
  return data;
}

export async function getPicturesOfHighlightServer(
  supabaseServerClient,
  highlightId
) {
  const { data, error } = await supabaseServerClient
    .from("highlight_media")
    .select()
    .eq("entity_highlight_id", highlightId);
  if (error) throw error;
  console.log("arrayOfUrls of highlight returned:", data);
  return data;
}
