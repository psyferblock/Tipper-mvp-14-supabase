export async function getEntityUsingUniqueNameServer(
  supabaseServerClient,
  uniqueName
) {
  const { data, error } = await supabaseServerClient
    .from("entity")
    .select(`*,entity_menu_id(*),exchange_rate(usd_lbp_rate)`)
    .eq("entity_unique_name", uniqueName);

  if (error) throw error;
  // console.log("data getEntityUsingUniqueNameServer ", data);
  return data[0];
}
