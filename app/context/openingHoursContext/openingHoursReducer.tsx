"use client";
import React from "react";

export const workingHoursState = {
  openingHoursMondayFriday: "",
  openingHoursSaturday: "",
  openingHoursSunday: "",
  closingHoursMondayFriday: "",
  closingHoursSaturday: "",
  closingHoursSunday: "",
};

const entityWorkingHoursReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_OPENING_HOURS_MONDAY_FRIDAY":
      return { ...state, openingHoursMondayFriday: payload };

    case "ADD_OPENING_HOURS_SATURDAY":
      return { ...state, openingHoursSaturday: payload };

    case "ADD_OPENING_HOURS_SUNDAY":
      return { ...state, openingHoursSunday: payload };

    case "ADD_CLOSING_HOURS_MONDAY_FRIDAY":
      return { ...state, closingHoursMondayFriday: payload };

    case "ADD_CLOSING_HOURS_SATURDAY":
      return { ...state, closingHoursSaturday: payload };

    case "ADD_CLOSING_HOURS_SUNDAY":
      return { ...state, closingHoursSunday: payload };
 
    default:
      throw new Error(`no cases to switch from entity of ${type} `);
  }
};
export default entityWorkingHoursReducer;
