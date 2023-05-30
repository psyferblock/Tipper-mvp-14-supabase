"use client";
import { useManageOpeningHoursContext } from "@/app/context/openingHoursContext/openingClosingStore";
import { useState } from "react";


export default function WorkingHoursRow(props) {
  const [openingState, setOpeningState] = useState();
  const [closingState, setClosingState] = useState();

  const {
    addMonFridayOpening,
    addSaturdayOpening,
    addSundayOpening,
    addMonFridayClosing,
    addSaturdayClosing,
    addSundayClosing,
  } = useManageOpeningHoursContext();

  const handleHours = (openingHours, closingHours) => {
    
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
    console.log('openingHours', openingHours, props.day)
    console.log('closingHours', closingHours)
  };

  return (
    <div className="sm:flex items-center space-y-2 sm:space-y-0 sm:space-x-8">
      {/* CHECKBOX AND DAY DIV */}

      <div className="sm:w-44 flex items-center">
        <div className="sm:ml-3 text-sm">
          <label htmlFor="dayCheckBox" className="font-medium  text-gray-700">
            {props.day}
          </label>
        </div>
      </div> 

      {/* INPUT BAR FOR THE HOUR

   

      {/* INPUT BAR FOR THE HOUR MOBILE SIZE */}

      <div className="flex items-center sm:hidden">
        <div className="flex flex-col">
          <div className="w-32 flex bg-white border border-gray-400 rounded-md overflow-hidden">
            <input
              type="time"
              id="clock"
              className="border-0 mx-3 focus:ring-0 stroke-orange-600 "
              onChange={(e) => setOpeningState(e.currentTarget.value)}
            />
          </div>
        </div>
        <p className="mx-2">to</p>

        {/* SECOND TIME SETTING */}

        <div className="sm:flex sm:flex-col">
          <div className="w-32 flex bg-white border border-gray-400 rounded-md overflow-hidden">
            <input
              type="time"
              id="clock"
              className="border-0 mx-3 focus:ring-0"
              onChange={(e) => setClosingState(e.currentTarget.value)}
            />
          </div>
        </div>
      </div>
      
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleHours(openingState, closingState)}
      >
        Button
      </button>
    </div>
  );
}
