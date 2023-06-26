import { supabase } from "@/app/utils/supabase-browser";

export default async function updateHighlightName(
  newHighlightName,
  highlightId
) {
  const id = parseInt(highlightId);
  const { data, error } = await supabase
    .from("entity_highlight")
    .update({
      highlight_name: newHighlightName,
    })
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  console.log("data returned after updating name of highlight:", data);
}
