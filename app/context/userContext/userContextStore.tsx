"use client";

import React from "react";
import userReducer, { userContextState } from "./userContextReducer";
import {
  useEffect,
  useReducer,
  createContext,
  useContext,
  useCallback,
} from "react";
import { useSupabase } from "../../supabase-provider";

const emailValidationRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const numberValidationRegex = /^[6-9]\d{9}$/;

// first create the context tools

const CreateUserContextInfoTools = (userInfos) => {
  const [state, dispatch] = useReducer(userReducer, userContextState);

  const {
    userId,
    firstName,
    lastName,
    dateOfBirth,
    gender,
    contactNumber,
    profilePictureUrl,
    emailAddress,
    uniqueUserName,
    hasEntity,
  } = state;

  // user has entity
  const setHasEntity = useCallback(() => {
    dispatch({
      type: "HAS_ENTITY",
    });
  }, []);
  const setHasNotEntity = useCallback(() => {
    dispatch({
      type: "HAS_NOT_ENTITY",
    });
  }, []);
  // userID
  const setUserId = useCallback((newObject) => {
    dispatch({
      type: "SET_USER_ID",
      payload: newObject,
    });
  }, []);
  // user name
  const setUserName = useCallback((newObject) => {
    dispatch({
      type: "CHANGE_FIRST_NAME",
      payload: newObject,
    });
  }, []);
  // user last name
  const setUserLastName = useCallback((newObject) => {
    dispatch({
      type: "CHANGE_LAST_NAME",
      payload: newObject,
    });
  }, []);

  //CHANGE DATE OF BIRTH
  const setDateOfBirth = useCallback((newObject) => {
    dispatch({
      type: "CHANGE_DATE_OF_BIRTH",
      payload: newObject,
    });
  }, []);
  // CHANGE GENDER
  const setGender = useCallback((newObject) => {
    dispatch({
      type: "CHANGE_GENDER",
      payload: newObject,
    });
  }, []);

  // CHANGE CONTACT NUMBER
  const setContactNumber = useCallback((newObject) => {
    dispatch({
      type: "CHANGE_CONTACT_NUMBER",
      payload: newObject,
    });
  }, []);

  const setProfilePicUrl = useCallback((newObject) => {
    dispatch({
      type: "CHANGE_PROFILE_PIC_URL",
      payload: newObject,
    });
  }, []);

  // SET EMAIL ADDRESS
  const setEmailAddress = useCallback((newObject) => {
    dispatch({
      type: "CHANGE_EMAIL_ADDRESS",
      payload: newObject,
    });
  }, []);

  // SET UNIQUE USER NAME
  const setUniqueName = useCallback((newObject) => {
    dispatch({
      type: "CHANGE_UNIQUE_USER_NAME",
      payload: newObject,
    });
  }, []);

  useEffect(() => {
    setContactNumber(userInfos?.phone_number),
      setDateOfBirth(userInfos?.date_of_birth),
      setGender(userInfos?.gender),
      setProfilePicUrl(userInfos?.profile_picture),
      setUserId(userInfos?.user_id),
      setUserLastName(userInfos?.last_name),
      setUserName(userInfos?.first_name),
      setEmailAddress(userInfos?.email_address),
      setUniqueName(userInfos?.unique_user_name);
    if (userInfos?.hasEntity) {
      setHasEntity();
    } else {
      setHasNotEntity();
    }
  }, []);
  console.log("reduced state in user context ", state);

  return {
    userId,
    firstName,
    lastName,
    dateOfBirth,
    gender,
    contactNumber,
    profilePictureUrl,
    emailAddress,
    uniqueUserName,
    hasEntity,
    setContactNumber,
    setDateOfBirth,
    setGender,
    setProfilePicUrl,
    setUserId,
    setUserLastName,
    setUserName,
    setEmailAddress,
    setUniqueName,
    setHasEntity,
    setHasNotEntity,
  };
};

const ManageUserInfoContext = createContext<
  ReturnType<typeof CreateUserContextInfoTools>
>({} as unknown as ReturnType<typeof CreateUserContextInfoTools>);

export default function UserInfoContextProvider({
  children,
  userInfos,
}: {
  children: React.ReactNode;
  userInfos: any;
}) {
  console.log("contextCreated", userInfos);
  return (
    <ManageUserInfoContext.Provider
      value={CreateUserContextInfoTools(userInfos)}
    >
      {children}
    </ManageUserInfoContext.Provider>
  );
}
// CREATE THE HOOK SO YO UCAN USE CONTEXT DIRECTLY ANYWHERE YOU WANT
export function useUsersContext() {
  const context = useContext(ManageUserInfoContext);
  if (!context) {
    throw new Error("useUsersContext must be used within a FormProvider");
  }
  return context;
}
// / // / /// /// //// /// //// ////// ////
