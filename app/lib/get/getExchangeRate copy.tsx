import { supabase } from "@/utils/supabase-browser";

export async function getExchangeRate(entityId: number) {
  //Exchange Rate Reading from Database
  const { data, error } = await supabase
    .from("exchange_rate")
    .select()
    .eq("entity_id", entityId);
  if (error) throw error;
  console.log("ex rate:", data);
  const rate = data[0]?.usd_lbp_rate;
  return rate;
}

export async function getExchangeRateServer(
  supabaseServerClient,
  entityId: number
) {
  //Exchange Rate Reading from Database
  const { data, error } = await supabaseServerClient
    .from("exchange_rate")
    .select()
    .eq("entity_id", entityId);
  if (error) throw error;
  console.log("ex rate:", data);
  const rate = data[0]?.usd_lbp_rate;
  return rate;
}
