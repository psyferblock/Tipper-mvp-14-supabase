import { supabase } from "@/app/utils/supabase-browser";

export async function addMenuPdf({
  pictureUrl: pictureUrl,
  entityId: entityId,
}) {
  const { data, error } = await supabase
    .from("menu_pdf")
    .insert({
      pdf_url: pictureUrl,
      entity_id: entityId,
    })
    .select()
    .single();
  if (error) throw error;
  console.log("from addMenuPdf data ", data);
  return data;
}
