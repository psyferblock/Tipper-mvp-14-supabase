export async function getEntityUsingUniqueNameServer(
  supabaseServerClient,
  uniqueName
) {
  const { data, error } = await supabaseServerClient
    .from("entity")
    .select()
    .eq("entity_unique_name", uniqueName)

    .single()
    .limit(1)
  if (error) throw error;
  console.log("data getEntityUsingUniqueNameServer ", data);
  return data;
}
