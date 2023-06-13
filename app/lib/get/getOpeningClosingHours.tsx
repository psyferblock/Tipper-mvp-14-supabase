import { supabase } from "@/app/utils/supabase-browser";
import { createServerClient } from "@/app/utils/supabase-server";

export async function getOpeningHoursServer({
  supabaseServer: supabaseServer,
  entityId: entityId,
}) {
  const { data, error } = await supabaseServer
    .from("opening_hours")
    .select()
    .eq("entity_id", entityId)
    .single();
  if (error) {
    console.log("the error from getOpeningHours browser", error);
  }
  console.log("the data from getOpeningHours browser", data);
  return data;
}

export async function getClosingHoursServer({
  supabaseServer: supabaseServer,
  entityId: entityId,
}) {
  const { data, error } = await supabaseServer
    .from("closing_hours")
    .select()
    .eq("entity_id", entityId)
    .single();
  if (error) {
    console.log("the error from getOpeningHours browser", error);
  }
  console.log("the data from getOpeningHours browser", data);
  return data;
}
