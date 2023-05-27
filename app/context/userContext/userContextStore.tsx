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
    profileId,
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
  const setHasEntity = useCallback((boolean) => {
    dispatch({
      type: "HAS_ENTITY",
      payload: boolean,
    });
  }, []);

  // userID
  const setUserId = useCallback((userId) => {
    dispatch({
      type: "SET_USER_ID",
      payload: userId,
    });
  }, []);
  // user name
  const setUserName = useCallback((userName) => {
    dispatch({
      type: "CHANGE_FIRST_NAME",
      payload: userName,
    });
  }, []);
  // user last name
  const setUserLastName = useCallback((lastName) => {
    dispatch({
      type: "CHANGE_LAST_NAME",
      payload: lastName,
    });
  }, []);

  //CHANGE DATE OF BIRTH
  const setDateOfBirth = useCallback((dob) => {
    dispatch({
      type: "CHANGE_DATE_OF_BIRTH",
      payload: dob,
    });
  }, []);
  // CHANGE GENDER
  const setGender = useCallback((gender) => {
    dispatch({
      type: "CHANGE_GENDER",
      payload: gender,
    });
  }, []);

  // CHANGE CONTACT NUMBER
  const setContactNumber = useCallback((contactNumber) => {
    dispatch({
      type: "CHANGE_CONTACT_NUMBER",
      payload: contactNumber,
    });
  }, []);

  const setProfilePicUrl = useCallback((profilePic) => {
    dispatch({
      type: "CHANGE_PROFILE_PIC_URL",
      payload: profilePic,
    });
  }, []);

  // SET EMAIL ADDRESS
  const setEmailAddress = useCallback((email) => {
    dispatch({
      type: "CHANGE_EMAIL_ADDRESS",
      payload: email,
    });
  }, []);

  // SET UNIQUE USER NAME
  const setUniqueName = useCallback((uniqueName) => {
    dispatch({
      type: "CHANGE_UNIQUE_USER_NAME",
      payload: uniqueName,
    });
  }, []);
  const setProfileId = useCallback((profileId) => {
    dispatch({
      type: "ADD_PROFILE_ID",
      payload: profileId,
    });
  }, []);

 
  useEffect(() => {
    setContactNumber(userInfos?.phone_number);
      setDateOfBirth(userInfos?.date_of_birth);
      setGender(userInfos?.gender);
      setProfilePicUrl(userInfos?.profile_picture);
      setProfileId(userInfos?.id);
      setUserId(userInfos?.user_id);
      setUserLastName(userInfos?.last_name);
      setUserName(userInfos?.first_name);
      setEmailAddress(userInfos?.email_address);
      setUniqueName(userInfos?.unique_user_name);
    setHasEntity(userInfos?.has_entity);
    setProfileId(userInfos?.id);
  }, []);
  console.log("reduced state in user context ", state);

  return {
    profileId,
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
    setProfileId,
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
