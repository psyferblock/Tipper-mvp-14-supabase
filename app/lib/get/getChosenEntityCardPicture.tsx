//For the moment im taking the first cover picture of the entity as the picture that will be displayed
//on the entity's card

export async function getChosenEntityCardPictureServer(
  supabaseServerClient,
  entityId
) {
  let { data, error } = await supabaseServerClient
    .from("entity_basic_media")
    .select()
    .eq("entity_id", entityId)
    .limit(1)
    .single();
  if (error) console.log(error);
  console.log("data returned after fetching first cover photo", data);
  return data;
}
