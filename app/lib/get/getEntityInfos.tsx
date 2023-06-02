import { supabase } from "@/app/utils/supabase-browser";

export async function getEntityInfos(entityId) {
  const { data, error } = await supabase
    .from("entity")
    .select()
    .eq("id", entityId);
  if (error) throw error;
  // console.log("browser side entity profile data", data);
  return data[0];
}

export async function getEntityInfosServer(supabaseServerClient, entityId) {
  const { data, error } = await supabaseServerClient
    .from("entity")
    .select()
    .eq("id", entityId)
    // .single();
  if (error) throw error;
  // console.log("server side entity information data", data);
  return data[0]
}


// NOTE: .single() method returns an object while NORMALLY it supabase will return an array 
