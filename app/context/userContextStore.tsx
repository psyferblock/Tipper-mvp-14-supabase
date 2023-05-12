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
import { useSupabase } from "../supabase-provider";

const emailValidationRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const numberValidationRegex = /^[6-9]\d{9}$/;

// first create the context tools

const CreateUserContextInfoTools = (userInfo ) => {
  const [
    state,
    dispatch,
  ] = useReducer(userReducer, userContextState);

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
    }=state
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
  const setUniqueName = useCallback((email,id) => { 
    // i took the first name and the last name. then took the user id and removed 2 digits from it and concatenated it to the name. as random as i can possibly think about.
    
    let first =email.split("@")
    let array=first[0]
    let uuidSample=id.slice(10,15) 
   
    const unique=array+uuidSample

    // const getRandomInt=(max)=>{Math.floor(Math.random()*max)}
      dispatch({
      type: "CHANGE_UNIQUE_USER_NAME",
      payload: unique,
    });
  }, []);

  
  

  useEffect(() => {
    setContactNumber(userInfo?.phone_number),
      setDateOfBirth(userInfo?.date_of_birth),
      setGender(userInfo?.gender),
      setProfilePicUrl(userInfo?.profilePicture),
      setUserId(userInfo?.user_id),
      setUserLastName(userInfo?.last_name),
      setUserName(userInfo?.first_name),
      setEmailAddress(userInfo?.email_address),
      setUniqueName(userInfo?.unique_user_name);
      
  }, []);

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
    setContactNumber,
    setDateOfBirth,
    setGender,
    setProfilePicUrl,
    setUserId,
    setUserLastName,
    setUserName,
    setEmailAddress,
    setUniqueName,
  };
};



const ManageUserInfoContext = createContext<
  ReturnType<typeof CreateUserContextInfoTools>
>({} as unknown as ReturnType<typeof CreateUserContextInfoTools>);

export function UserInfoContextProvider({
  children,
  userInfo,
  
}: {
  children: React.ReactNode;
  userInfo: any;
 
}) {
  return (
    <ManageUserInfoContext.Provider
      value={CreateUserContextInfoTools( userInfo)}
    >
      {children}
    </ManageUserInfoContext.Provider>
  );
}
// CREATE THE HOOK SO YO UCAN USE CONTEXT DIRECTLY ANYWHERE YOU WANT
export function useUsersContext() {
  const context = useContext(ManageUserInfoContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
}
// / // / /// /// //// /// //// ////// ////
