import { supabase } from "@/utils/supabase-browser";

export default async function updateExchangeRate(exchangeRate, entityId) {
  const { data, error } = await supabase
    .from("exchange_rate")
    .update({
      usd_lbp_rate: exchangeRate,
    })
    .eq("entity_id", entityId)
    .select();
  if (error) throw error;
  console.log(data);
}
