import { supabase } from "@/app/utils/supabase-browser";

export default async function addClosingHours({
  closingHoursMondayFriday: closingHoursMondayFriday,
  closingHoursSaturday: closingHoursSaturday,
  closingHoursSunday: closingHoursSunday,
  entityId: entityId,
}) {
  const { data, error } = await supabase
    .from("closing_hours")
    .update({
      monday_friday: closingHoursMondayFriday,
      saturday: closingHoursSaturday,
      sunday: closingHoursSunday,
    })
    // .select();
    .match({
      entity_id: entityId,
    });
  if (error) throw error;
  console.log("closing hours returned after adding them", data);
}
