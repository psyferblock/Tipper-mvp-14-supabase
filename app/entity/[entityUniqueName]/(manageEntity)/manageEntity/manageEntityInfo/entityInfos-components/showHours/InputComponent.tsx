"use client";
import { useManageOpeningHoursContext } from "@/app/context/openingHoursContext/openingClosingStore";
import { useState } from "react";

export default function WorkingHoursRow(props:any) {
  const [openingState, setOpeningState] = useState<any|null>(null);
  const [closingState, setClosingState] = useState<any|null>(null);

  const {
    addMonFridayOpening,
    addSaturdayOpening,
    addSundayOpening,
    addMonFridayClosing,
    addSaturdayClosing,
    addSundayClosing,
  } = useManageOpeningHoursContext();

  const handleHours = (openingHours:any, closingHours:any) => {
    if (props.day == "Monday-Friday") {
      addMonFridayOpening(openingHours);
      addMonFridayClosing(closingHours);
    } else if (props.day == "Saturday") {
      addSaturdayOpening(openingHours);
      addSaturdayClosing(closingHours);
    } else if (props.day == "Sunday") {
      addSundayOpening(openingHours);
      addSundayClosing(closingHours);
    } else {
      throw new Error("no days mate");
    }
  };

  return (
    <div className="items-center space-y-2 sm:flex sm:space-x-8 sm:space-y-0">
      {/* CHECKBOX AND DAY DIV */}

      <div className="flex items-center sm:w-44">
        <div className="text-sm sm:ml-3">
          <label htmlFor="dayCheckBox" className="font-medium  text-gray-700">
            {props.day}
          </label>
        </div>
      </div>

      {/* INPUT BAR FOR THE HOUR

   

      {/* INPUT BAR FOR THE HOUR MOBILE SIZE */}

      <div className="flex items-center ">
        <div className="flex flex-col">
          <div className="flex w-32 overflow-hidden rounded-md border border-gray-400 bg-white">
            <input
              type="time"
              id="clock"
              className="mx-3 border-0 stroke-orange-600 focus:ring-0 "
              onChange={(e) => setOpeningState(e.currentTarget.value)}
            />
          </div>
        </div>
        <p className="mx-2">to</p>

        {/* SECOND TIME SETTING */}

        <div className="sm:flex sm:flex-col">
          <div className="flex w-32 overflow-hidden rounded-md border border-gray-400 bg-white">
            <input
              type="time"
              id="clock"
              className="mx-3 border-0 focus:ring-0"
              onChange={(e) => setClosingState(e.currentTarget.value)}
            />
          </div>
        </div>
      </div>

      <button
        className="rounded hover:bg-amethyst-tint px-4 py-1 font-bold text-white bg-amethyst"
        onClick={() => handleHours(openingState, closingState)}
      >
        Save 
      </button>
    </div>
  );
}
