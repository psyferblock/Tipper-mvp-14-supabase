import { supabase } from "@/app/utils/supabase-browser";

export default async function updateExchangeRate({
  exchangeRate:exchangeRate,
                 entityId:entityId}) {
                  
  const { data, error } = await supabase
    .from("exchange_rate")
    .update({
      usd_lbp_rate: exchangeRate,
    })
    .match({"entity_id": entityId})
    .select();
  if (error) throw error;
  console.log(data);
  return data[0]
}
