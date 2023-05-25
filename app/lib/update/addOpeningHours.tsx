import { supabase } from "@/app/utils/supabase-browser";

export default async function addOpeningHours({
  openingHoursMonday: openingHoursMonday,
  openingHoursSaturday: openingHoursSaturday,
  openingHoursSunday: openingHoursSunday,
  entityId: entityId,
}) {
  const { data, error } = await supabase
    .from("opening_hours")
    .update({
      monday_friday: openingHoursMonday,
      saturday: openingHoursSaturday,
      sunday: openingHoursSunday,
      entity_id: entityId,
    })
    .select();
  if (error) throw error;
  console.log("opening hours returned after adding them", data);
}
