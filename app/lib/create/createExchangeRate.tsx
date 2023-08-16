import { supabase } from "@/app/utils/supabase_browser";

async function createExchangeRate(entityId, exchangeRate) {
  const { data, error } = await supabase
    .from("exchange_rate")
    .insert({
      entity_id: entityId,
      usd_lbp_rate: exchangeRate,
    })
    .eq("entity_id", entityId)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export default createExchangeRate;
