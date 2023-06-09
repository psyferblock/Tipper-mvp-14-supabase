import {
  getClosingHoursServer,
  getOpeningHoursServer,
} from "@/app/lib/get/getOpeningClosingHours";
import { createServerClient } from "@/app/utils/supabase-server";
import React from "react";

async function OpeningAndClosingHours({ entityId }) {
  const supabaseServer = createServerClient();
    const openingHours = await getOpeningHoursServer({
      supabaseServer: supabaseServer,
      entityId: entityId,
    });
    console.log("openingHours", openingHours);
    const closingHours = await getClosingHoursServer({
      supabaseServer: supabaseServer,
      entityId: entityId,
    });
    console.log("closingHours", closingHours);
  console.log("entityId", entityId);

  function formatTime(timeString) {
    const [hourString, minute] = timeString.split(":");
    const hour = +hourString % 24;
    return (hour % 12 || 12) + ":" + minute + (hour < 12 ? " AM" : " PM");
  }

  const tConvert = (time) => {
    // Check correct time format and split into components
     time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      // If time format correct
       time = time.slice(1); // Remove full string match value
       time[5] = +time[0] < 12 ? "AM" : "PM"; // Set AM/PM
       time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(""); // return adjusted time or original string
  };

    const openingMonFri = openingHours && formatTime(openingHours?.monday_friday);
    const openingSat = openingHours && formatTime(openingHours?.saturday);
    const openingSun = openingHours && formatTime(openingHours?.sunday);

    const closingMonFri=closingHours && formatTime(closingHours?.monday_friday);
    const closingSat=closingHours && formatTime(closingHours?.saturday);
    const closingSun=closingHours && formatTime(closingHours?.sunday);


  return (
    <div>
      <div className="-mt-3 sm:-mt-5 sm:pb-0.5">Opening Hours</div>
      <div className="divide-y sm:px-1">
        <div className="flex justify-between">
          <div className="text-xs font-normal">Monday-Friday</div>
          <div className="text-xs font-normal">
            {openingMonFri} - {closingMonFri}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-xs font-normal">Saturday</div>
          <div className="text-xs font-normal">{openingSat} - {closingSat}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-xs font-normal">Sunday</div>
          <div className="text-xs font-normal">{openingSun} - {closingSun}</div>
        </div>
      </div>
    </div>
  );
}

export default OpeningAndClosingHours;
