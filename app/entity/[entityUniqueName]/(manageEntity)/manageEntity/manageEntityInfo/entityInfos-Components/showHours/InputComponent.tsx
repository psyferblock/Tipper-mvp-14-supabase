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
    console.log("openingState", openingState);
    console.log("closingState", closingState);
    if (props.day === "Monday-Friday") {
      addMonFridayOpening(openingHours);
      addMonFridayClosing(closingHours);
    } else if (props.day === "Saturday") {
      addSaturdayOpening(openingHours);
      addSaturdayClosing(closingHours);
    } else if (props.day === "Sunday") {
      addSundayOpening(openingHours);
      addSundayClosing(closingHours);
    } else {
      throw new Error("no days mate");
    }
  };

  const row = (
    <div className="sm:flex items-center space-y-2 sm:space-y-0 sm:space-x-8">
      {/* CHECKBOX AND DAY DIV */}

      <div className="sm:w-44 flex items-center">
        {/* <div className="flex sm:h-5 items-center">
            <input
              id="dayCheckBox"
              type="checkbox"
              className="sm:h-4 sm:mr-0 mr-2 sm:w-4 border rounded border-gray-400 text-indigo-600 focus:ring-indigo-500"
            />
          </div> */}
        <div className="sm:ml-3 text-sm">
          <label htmlFor="dayCheckBox" className="font-medium  text-gray-700">
            {props.day}
          </label>
        </div>
      </div>

      {/* INPUT BAR FOR THE HOUR */}

      {/* <div className="hidden sm:flex flex-col bg-green">
        <input
          type="text"
          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          id="form1"
           onChange={(e) => setOpeningState(e.currentTarget.value)}
        />
        <label
          htmlFor="form1"
          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >
          Select a time
        </label>
      </div> */}

      <label htmlFor="clock" className="text-xs">
        {props.caption}
      </label>
      <div className="w-40 sm:w-40 flex bg-blue border border-gray-400 py-0 px-3 rounded-md overflow-hidden ml-5">
        <input
          type="time"
          id="clock"
          className="border-0 focus:ring-0 bg-grey"
          onChange={(e) => setOpeningState(e.currentTarget.value)}
        />
      </div>
      <div
        className="relative"
        data-te-timepicker-init
        data-te-input-wrapper-init
      ></div>
      <p className="hidden sm:block sm:px-5">to</p>

      {/* SECOND TIME SETTING */}

      <div className="hidden sm:flex flex-col">
        <label htmlFor="clock" className="text-xs">
          {props.caption}
        </label>
        <div className="w-12 sm:w-40 flex bg-white border border-gray-400 py-0 px-3 rounded-md overflow-hidden">
          <input
            type="time"
            id="clock"
            className="border-0 focus:ring-0"
            onChange={(e) => setClosingState(e.currentTarget.value)}
          />
        </div>
      </div>

      {/* INPUT BAR FOR THE HOUR MOBILE SIZE*/}

      <div className="flex items-center sm:hidden">
        <div className="sm:flex sm:flex-col">
          <div className="w-28 flex bg-white border border-gray-400 rounded-md overflow-hidden">
            <input
              type="time"
              id="clock"
              className="border-0 -mx-3 focus:ring-0 stroke-orange-600 s"
              onChange={(e) => setOpeningState(e.currentTarget.value)}
            />
          </div>
        </div>
        <p className="mx-2">to</p>

        {/* SECOND TIME SETTING */}

        <div className="sm:flex sm:flex-col">
          <div className="w-28 flex bg-white border border-gray-400 rounded-md overflow-hidden">
            <input
              type="time"
              id="clock"
              className="border-0 -mx-3 focus:ring-0"
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
  return <div>{row}</div>;
}
