'use client'

import React, {
  useEffect,
  createContext,
  useContext,
  useReducer,
  useCallback,
  useState,
} from "react";

export const entityContextState= {
    logoObject: "",
      arrayOfPictureObjects: [],
      tags: [],
      phoneNumber: "",
      emailAddress: "",
      instagramUrl: "",
      facebookUrl: "",
      whatsappNumber: "",
      aboutUsDescription: "",
      aboutUsPictureUrl: "",
      isContactUsSectionPublic: "",
      contactUsDescription: "",
      contactUsPictureUrl: "",
}

const entityInfoReducer= (entityState,action )=>{
     switch (action.type) {
        case "setLogoObject":
          return { ...entityState, logoObject: action.payload };
        case "setArrayOfPictureObjects":
          return { ...entityState, arrayOfPictureObjects: action.payload };
        case "setTags":
          return { ...entityState, tags: action.payload };
        case "setPhoneNumber":
          return { ...entityState, phoneNumber: action.payload };
        case "setEmailAddress":
          return { ...entityState, emailAddress: action.payload };
        case "setInstagramUrl":
          return { ...entityState, instagramUrl: action.payload };
        case "setIsInstagramUrlPublic":
          return { ...entityState, isInstagramUrlPublic: action.payload };
        case "setFacebookUrl":
          return { ...entityState, facebookUrl: action.payload };
        case "setIsFacebookUrlPublic":
          return { ...entityState, isFacebookUrlPublic: action.payload };
        case "setWhatsappNumber":
          return { ...entityState, whatsappNumber: action.payload };
        case "setIsWhatsappNumberPublic":
          return { ...entityState, isWhatsappNumberPublic: action.payload };
        case "setAboutUsDescription":
          return { ...entityState, aboutUsDescription: action.payload };
        case "setAboutUsPictureUrl":
          return { ...entityState, aboutUsPictureUrl: action.payload };
        case "setIsContactUsSectionPublic":
          return { ...entityState, isContactUsSectionPublic: action.payload };
        case "setContactUsDescription":
          return { ...entityState, contactUsDescription: action.payload };
        case "setContactUsPictureUrl":
          return { ...entityState, contactUsPictureUrl: action.payload };
      }

}