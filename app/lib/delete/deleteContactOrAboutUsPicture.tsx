import { supabase } from "@/app/utils/supabase-browser";

//Deleting the contactUs or AboutUs picture
export async function deleteContactUsPicture(entityId) {
  const { data, error } = await supabase
    .from("entity")
    .update({ contact_us_picture_url: "" })
    .eq("id", entityId)
    .single();
  if (error) throw error;
  console.log("after picture is deleted from contact us", data);
}

//Deleting the contactUs or AboutUs picture
export async function deleteAboutUsPicture(entityId) {
  const { data, error } = await supabase
    .from("entity")
    .update({ about_us_picture_url: "" })
    .eq("id", entityId)
    .single();
  if (error) throw error;
  console.log("after picture is deleted from about us", data);
}
