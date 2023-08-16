"use client";

import WorkingHoursRow from "./InputComponent";

export default function ManageWorkingHours() {
  return (
    <>
      <div className=" rounded-lg bg-white p-3 drop-shadow-lg sm:p-5">
        <p className="text-lg font-bold ">Working Hours</p>
        <p className="mb-4 text-xs sm:hidden">
          Press the clock icon to set the hour
        </p>
        {/* DIV CONTAINING ROWS */}
        <div className="flex flex-col space-y-5">
          <WorkingHoursRow day="Monday-Friday" />
          <WorkingHoursRow day="Saturday" />
          <WorkingHoursRow day="Sunday" />
        </div>
      </div>
    </>
  );
}
