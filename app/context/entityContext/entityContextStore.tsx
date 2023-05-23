"use client";

import { error } from "console";
import React, {
  useEffect,
  createContext,
  useContext,
  useReducer,
  useCallback,
  useState,
} from "react";
import entityInfoReducer, { entityContextState } from "./entityContextReducer";

/**
 * Function returning all the tools that children component will inherit when using the context.
 */
function createManageEntityInfosTools(entityInfos, coverPictures,
  logoPictureObject) {
  const [entityState, dispatch] = useReducer(
    entityInfoReducer,
    entityContextState
  );
  const {
    entityName,
    logoObject,
    arrayOfPictureObjects,
    entityTags,
    entityPhoneNumber,
    entityEmailAddress,
    entityAddress,
    instagramUrl,
    facebookUrl,
    whatsappNumber,
    aboutUsDescription,
    aboutUsPictureUrl,
    isContactUsSectionPublic,
    contactUsDescription,
    contactUsPictureUrl,
    entityOwnerId,
    industryId,
    entityTypeId,
    locationId,
    isContactUsPublic,
    isVerified,
    isInstagramUrlPublic,
    isFacebookUrlPublic,
    isWhatsappNumberPublic,
    entityUniqueName,
    entityArea,
    entityId
  } = entityState;

  useEffect(() => {
    setLogoObject(logoPictureObject);
    setArrayOfPictureObjects(coverPictures);
    setEntityTags(entityInfos?.entity_tags);
    setPhoneNumber(entityInfos?.entity_phone_number);
    setEmailAddress(entityInfos?.entity_email);
    setInstagramUrl(entityInfos?.instagram_link);
    setIsInstagramUrlPublic(entityInfos?.is_instagram_url_public);
    setFacebookUrl(entityInfos?.facebook_link);
    setIsFacebookUrlPublic(entityInfos?.is_facebook_url_public);
    setWhatsappNumber(entityInfos?.whatsapp_phone_number);
    setIsWhatsappNumberPublic(entityInfos?.is_whatsapp_number_public);
    setAboutUsDescription(entityInfos?.about_us_description);
    setAboutUsPictureUrl(entityInfos?.about_us_picture_url);
    setIsContactUsSectionPublic(entityInfos?.is_contact_us_public);
    setContactUsDescription(entityInfos?.contact_us_description);
    setContactUsPictureUrl(entityInfos?.contact_us_picture_url);
    setEntityOwnerId(entityInfos?.user_id);
    setIsVerified(entityInfos?.is_verified);
    setIndustryId(entityInfos?.industry_id);
    setEntityTypeId(entityInfos?.entity_type_id);
    setLocationId(entityInfos?.location_id);
    setEntityArea(entityInfos?.entity_area);
    setEntityUniqueName(entityInfos?.entity_unique_name);
    setEntityAddress(entityInfos?.entity_address);
    setEntityName(entityInfos?.entity_name);
    setEntityId(entityInfos?.id)
  }, []);


const setEntityId = useCallback((name: string) => {
    dispatch({
      type: "SET_ENTITY_ID",
      payload: name,
    });
  }, []);
  
   const setEntityName = useCallback((name: string) => {
    dispatch({
      type: "SET_ENTITY_NAME",
      payload: name,
    });
  }, []);
  /**
   * Setter function for arrayOfObjectPictures state variable
   */
  const setLogoObject = useCallback((newObject: string) => {
    dispatch({
      type: "SET_LOGO_OBJECT",
      payload: newObject,
    });
  }, []);

  /**
   * Setter function for arrayOfObjectPictures state variable
   */
  const setArrayOfPictureObjects = useCallback((newArray: string[]) => {
    dispatch({
      type: "SET_ARRAY_OF_PICTURE_OBJECTS",
      payload: newArray,
    });
  }, []);

  /**
   * Setter function for tag state variable
   */
  const setEntityTags = useCallback((currentTags: string[]) => {
    dispatch({
      type: "SET_ENTITY_TAGS",
      payload: currentTags,
    });
  }, []);

  /**
   * Setter function for tag state variable
   */
  const setPhoneNumber = useCallback((number: string) => {
    dispatch({
      type: "SET_PHONE_NUMBER",
      payload: number,
    });
  }, []);

  /**
   * Setter function for tag state variable
   */
  const setEmailAddress = useCallback((email: string) => {
    dispatch({
      type: "SET_EMAIL_ADDRESS",
      payload: email,
    });
  }, []);

  /**
   * Setter function for tag state variable
   */
  const setInstagramUrl = useCallback((url: string) => {
    dispatch({
      type: "SET_INSTAGRAM_URL",
      payload: url,
    });
  }, []);

  /**
   * Setter function for tag state variable
   */
  const setIsInstagramUrlPublic = useCallback((isPublic: boolean) => {
    dispatch({
      type: "SET_IS_INSTAGRAM_URL_PUBLIC",
      payload: isPublic,
    });
  }, []);

  /**
   * Setter function for tag state variable
   */
  const setFacebookUrl = useCallback((url: string) => {
    dispatch({
      type: "SET_FACEBOOK_URL",
      payload: url,
    });
  }, []);

  /**
   * Setter function for tag state variable
   */
  const setIsFacebookUrlPublic = useCallback((isPublic: boolean) => {
    dispatch({
      type: "SET_IS_FACEBOOK_URL_PUBLIC",
      payload: isPublic,
    });
  }, []);

  /**
   * Setter function for tag state variable
   */
  const setWhatsappNumber = useCallback((number: string) => {
    dispatch({
      type: "SET_WHATSAPP_NUMBER",
      payload: number,
    });
  }, []);

  /**
   * Setter function for tag state variable
   */
  const setIsWhatsappNumberPublic = useCallback((isPublic: boolean) => {
    dispatch({
      type: "SET_IS_WHATSAPP_NUMBER_PUBLIC",
      payload: isPublic,
    });
  }, []);

  /**
   * Setter function for tag state variable
   */
  const setAboutUsDescription = useCallback((description: string) => {
    dispatch({
      type: "SET_ABOUT_US_DESCRIPTION",
      payload: description,
    });
  }, []);

  /**
   * Setter function for tag state variable
   */
  const setAboutUsPictureUrl = useCallback((url: string) => {
    dispatch({
      type: "SET_ABOUT_US_PICTURE_URL",
      payload: url,
    });
  }, []);

  /**
   * Setter function for tag state variable
   */
  const setIsContactUsSectionPublic = useCallback((isPublic: boolean) => {
    dispatch({
      type: "SET_IS_CONTACT_US_SECTION_PUBLIC",
      payload: isPublic,
    });
  }, []);

  /**
   * Setter function for tag state variable
   */
  const setContactUsDescription = useCallback((description: string) => {
    dispatch({
      type: "SET_CONTACT_US_DESCRIPTION",
      payload: description,
    });
  }, []);

  /**
   * Setter function for tag state variable
   */
  const setContactUsPictureUrl = useCallback((url: string) => {
    dispatch({
      type: "SET_CONTACT_US_PICTURE_URL",
      payload: url,
    });
  }, []);

  const setIsVerified = useCallback((verified: boolean) => {
    dispatch({
      type: "SET_IS_VERIFIED",
      payload: verified,
    });
  }, []);
  const setEntityOwnerId = useCallback((ownerId: string) => {
    dispatch({
      type: "SET_ENTITY_OWNER_ID",
      payload: ownerId,
    });
  }, []);
  const setIndustryId = useCallback((industryId: number) => {
    dispatch({
      type: "SET_INDUSTRY_ID",
      payload: industryId,
    });
  }, []);
  const setEntityTypeId = useCallback((entityType: number) => {
    dispatch({
      type: "SET_ENTITY_TYPE_ID",
      payload: entityType,
    });
  }, []);
  const setLocationId = useCallback((locationId: number) => {
    dispatch({
      type: "SET_LOCATION_ID",
      payload: locationId,
    });
  }, []);
  const setEntityArea = useCallback((entityArea: string) => {
    dispatch({
      type: "SET_ENTITY_AREA",
      payload: entityArea,
    });
  }, []);
  const setEntityUniqueName = useCallback((uniqueName: string) => {
    dispatch({
      type: "SET_ENTITY_UNIQUE_NAME",
      payload: uniqueName,
    });
  }, []);
  const setEntityAddress = useCallback((entityAddress: string) => {
    dispatch({
      type: "SET_ENTITY_ADDRESS",
      payload: entityAddress,
    });
  }, []);

  return {
    entityName,
    logoObject,
    arrayOfPictureObjects,
    entityTags,
    entityPhoneNumber,
    entityEmailAddress,
    instagramUrl,
    isInstagramUrlPublic,
    facebookUrl,
    isFacebookUrlPublic,
    whatsappNumber,
    isWhatsappNumberPublic,
    aboutUsDescription,
    aboutUsPictureUrl,
    isContactUsSectionPublic,
    contactUsDescription,
    contactUsPictureUrl,
    entityOwnerId,
    industryId,
    entityTypeId,
    locationId,
    isContactUsPublic,
    isVerified,
    entityUniqueName,
    entityArea,
    entityAddress,
    entityId,
    setEntityName,
    setLogoObject,
    setArrayOfPictureObjects,
    setEntityTags,
    setPhoneNumber,
    setEmailAddress,
    setInstagramUrl,
    setIsInstagramUrlPublic,
    setFacebookUrl,
    setIsFacebookUrlPublic,
    setWhatsappNumber,
    setIsWhatsappNumberPublic,
    setAboutUsDescription,
    setAboutUsPictureUrl,
    setIsContactUsSectionPublic,
    setContactUsDescription,
    setContactUsPictureUrl,
    setEntityOwnerId,
    setIsVerified,
    setIndustryId,
    setEntityTypeId,
    setLocationId,
    setEntityArea,
    setEntityUniqueName,
    setEntityAddress,
    setEntityId,
  };
}

/**
 * All Tools Context Creator (contains all tools and variables we will store, and that will be callable from children)
 * setting the context return type to the same type as the function we will call inside it, which is createAllTools()
 * if createAllTools() does not return something, we initialize the context to an unknown object as return type of createAllTools
 */

const ManageEntityInfosContext = createContext<
  ReturnType<typeof createManageEntityInfosTools>
>({} as unknown as ReturnType<typeof createManageEntityInfosTools>);

/**
 * Component that provides context for the children
 */
export default function EntityInfosContextProvider({
  children,
  entityInfos,
  coverPictures,
  logoPictureObject
  
}: {
  children: React.ReactNode;
  entityInfos: any;
  coverPictures:any;
  logoPictureObject:any;
}) {
  console.log('entityContext from context ', entityInfos )
  // createManageEntityInfosTools(entityInfos, coverPictures, logoPictureObject);
  return (
    <ManageEntityInfosContext.Provider
      value={createManageEntityInfosTools(entityInfos, coverPictures,
        logoPictureObject)}
    >
      {children}
    </ManageEntityInfosContext.Provider>
  );
}

// CREATE THE HOOK SO YO UCAN USE CONTEXT DIRECTLY ANYWHERE YOU WANT
export function useEntityContext() {
  const context = useContext(ManageEntityInfosContext);
  if (!context) {
    throw new Error(`something seems to be wrong with ${context}`)
  }
  return context;
}
// / // / /// /// //// /// //// ////// ////
