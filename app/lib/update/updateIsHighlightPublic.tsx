import { supabase } from "@/app/utils/supabase-browser";

export default async function updateIsHighlightPublic(isPublic, highlightId) {
  const id = parseInt(highlightId);
  const { data, error } = await supabase
    .from("entity_highlight")
    .update({
      is_highlight_public: isPublic,
    })
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  console.log("data returned after updating is_highlight_public:", data);
}
