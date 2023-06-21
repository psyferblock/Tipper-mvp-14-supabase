export async function getUserPassword(supabaseServerClient, userId) {
  const { data, error } = await supabaseServerClient
    .from("auth.users")
    .select()
    .eq("id", userId);
  //   const { data, error } = await supabaseServerClient.auth.api.getUserById(
  //     userId
  //   );
  if (error) throw error;
  // console.log("data from auth", data);
  return data;
}
