import { supabase } from "@/app/utils/supabase-browser";

export async function getExchangeRate(entityId) {
  //Exchange Rate Reading from Database
  const { data, error } = await supabase
    .from("exchange_rate")
    .select()
    .eq("entity_id", entityId)
    .single();
  if (error) throw error;
  console.log("ex rate:", data);
  const rate = data?.usd_lbp_rate;
  return rate;
}

export async function getExchangeRateServer(supabaseServerClient, entityId) {
  //Exchange Rate Reading from Database
  const { data, error } = await supabaseServerClient
    .from("exchange_rate")
    .select()
    .eq("entity_id", entityId)
    .single();
  if (error) throw error;
  console.log("ex rate:", data);
  const rate = data?.usd_lbp_rate;
  return rate;
}
