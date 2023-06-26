import { supabase } from "@/app/utils/supabase-browser";

export async function addMenuPdf({ pictureUrl: pictureUrl, menuId: menuId }) {
  const { data, error } = await supabase
    .from("menu_pdf")
    .insert({
      pdf_url: pictureUrl,
      menu_id: menuId,
    })
    .select()
    .single();
  if (error) throw error;
  console.log("from addMenuPdf data ", data);
  return data;
}
