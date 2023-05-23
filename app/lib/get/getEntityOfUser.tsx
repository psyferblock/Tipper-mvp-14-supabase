import { supabase } from "@/app/utils/supabase-browser";


export  async function getEntityOfUser( userId) {
  let { data, error } = await supabase
    .from("entity")
    .select()
    .eq("user_id", userId)
    .limit(1)
    .single();
  if (error) console.log(error);
  console.log("data returned from getEntityOfUser", data);
  return data;
}

export  async function getEntityOfUserServer(supabaseServerClient, userId) {
  let { data, error } = await supabaseServerClient
    .from("entity")
    .select()
    .eq("user_id", userId)
    .limit(1)
    .single();
  if (error) console.log(error);
  console.log("data returned from getEntityOfUser", data);
  return data;
}
