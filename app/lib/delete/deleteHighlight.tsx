import { supabase } from "@/app/utils/supabase-browser";

export default async function deleteHighlight(highlightId) {
  const { data, error } = await supabase
    .from("entity_highlight")
    .delete()
    .eq("id", highlightId);
  if (error) throw error;
  console.log("data returned after deleting highlight", data);
}
