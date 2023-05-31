import { supabase } from "@/app/utils/supabase-browser";

export async function changePdfPublicFromMenu({
  isPdfPublic: isPdfPublic,
  menuId: menuId,
}) {
    console.log('isPdfPublic', isPdfPublic)
  const { data, error } = await supabase
    .from("entity_menu_id")
    .update({ "is_pdf_public": isPdfPublic })
    .match({ "id": menuId })
  if (error) throw error;
  console.log("data from changePdfPublicFromMenu", data);
  return data;
}
