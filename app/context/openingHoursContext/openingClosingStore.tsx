"use client";

import React from "react";
import entityWorkingHoursReducer, {
  workingHoursState,
} from "./openingHoursReducer";

import {
  useReducer,
  useEffect,
  useCallback,
  useContext,
  createContext,
} from "react";

function CreateWorkingHoursTools(hoursInput) {
  const [hoursState, dispatch] = useReducer(
    entityWorkingHoursReducer,
    workingHoursState
  );

  const {
    openingHoursMondayFriday,
    openingHoursSaturday,
    openingHoursSunday,
    closingHoursMondayFriday,
    closingHoursSaturday,
    closingHoursSunday,
  } = hoursState;

  const addMonFridayOpening = useCallback((input) => {
    dispatch({
      type: "ADD_OPENING_HOURS_MONDAY_FRIDAY",
      payload: input,
    });
  }, []);

  const addSaturdayOpening = useCallback((input) => {
    dispatch({
      type: "ADD_OPENING_HOURS_SATURDAY",
      payload: input,
    });
  }, []);
  const addSundayOpening = useCallback((input) => {
    dispatch({
      type: "ADD_OPENING_HOURS_SUNDAY",
      payload: input,
    });
  }, []);
  const addMonFridayClosing = useCallback((input) => {
    dispatch({
      type: "ADD_CLOSING_HOURS_MONDAY_FRIDAY",
      payload: input,
    });
  }, []);
  const addSaturdayClosing = useCallback((input) => {
    dispatch({
      type: "ADD_CLOSING_HOURS_SATURDAY",
      payload: input,
    });
  }, []);

  const addSundayClosing = useCallback((input) => {
    dispatch({
      type: "ADD_CLOSING_HOURS_SUNDAY",
      payload: input,
    });
  }, []);

  useEffect(() => {
    addMonFridayOpening(hoursInput.monTime);
    addSaturdayOpening(hoursInput.satTime);
    addSundayOpening(hoursInput.sunTime);
    addMonFridayClosing(hoursInput.monTimeClosing);
    addSaturdayClosing(hoursInput.satTimeClosing);
    addSundayClosing(hoursInput.sunTimeClosing);
  }, []);

  console.log("reducedState in context hours ", hoursState);

  return {
    openingHoursMondayFriday,
    openingHoursSaturday,
    openingHoursSunday,
    closingHoursMondayFriday,
    closingHoursSaturday,
    closingHoursSunday,
    addMonFridayOpening,
    addSaturdayOpening,
    addSundayOpening,
    addMonFridayClosing,
    addSaturdayClosing,
    addSundayClosing,
  };
}

const ManageOpeningHoursContext = createContext<
  ReturnType<typeof CreateWorkingHoursTools>
>({} as unknown as ReturnType<typeof CreateWorkingHoursTools>);

export function ManageOpeningHoursContextProvider({
  children,
  hoursInput,
}: {
  children: React.ReactNode;
  hoursInput: any;
}) {
  return (
    <ManageOpeningHoursContext.Provider
      value={CreateWorkingHoursTools(hoursInput)}
    >
      {children}
    </ManageOpeningHoursContext.Provider>
  );
}

// hours context hook
export function useManageOpeningHoursContext() {
  const context = useContext(ManageOpeningHoursContext);
  if (!context) {
    throw new Error("useUsersContext must be used within a FormProvider");
  }
  return context;
}
