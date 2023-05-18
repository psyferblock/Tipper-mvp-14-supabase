"use client";

export const entityContextState = {
  entityName:"",
  logoObject: "",
  arrayOfPictureObjects: [],
  entityTags: [],
  entityPhoneNumber: "",
  entityEmailAddress: "",
  entityAddress:"",
  instagramUrl: "",
  facebookUrl: "",
  whatsappNumber: "",
  aboutUsDescription: "",
  aboutUsPictureUrl: "",
  isContactUsSectionPublic: false,
  contactUsDescription: "",
  contactUsPictureUrl: "",
  // new state that needs to be managed by tarek
  entityOwnerId: "",
  industryId: "",
  entityTypeId: "",
  locationId: "",
  isContactUsPublic: false,
  isVerified: false,
  isInstagramUrlPublic: false,
  isFacebookUrlPublic: false,
  isWhatsappNumberPublic: false,
  entityUniqueName: "",
  entityArea: "",
  entityId:"",
};

const entityInfoReducer = (entityState, action) => {
  const { type, payload } = action;
  switch (type) {
    case"SET_ENTITY_NAME":
    return {...entityState,entityName:payload}
    case "SET_LOGO_OBJECT":
      return { ...entityState, logoObject: payload }; //  logoObject: "",
    case " SET_ARRAY_OF_PICTURE_OBJECTS":
      return { ...entityState, arrayOfPictureObjects: payload }; //arrayOfPictureObjects: [],
    case " SET_ENTITY_TAGS":
      return { ...entityState, entityTags: payload }; //entityTags: [],
    case " SET_PHONE_NUMBER":
      return { ...entityState, entityPhoneNumber: payload }; // phoneNumber: "",
    case " SET_EMAIL_ADDRESS":
      return { ...entityState, emailAddress: payload }; // emailAddress: "",
    case " SET_INSTAGRAM_URL":
      return { ...entityState, instagramUrl: payload }; // instagramUrl: "",
    case " SET_IS_INSTAGRAM_URL_PUBLIC":
      return { ...entityState, isInstagramUrlPublic: payload }; //  isInstagramUrlPublic: false,
    case " SET_FACEBOOK_URL":
      return { ...entityState, facebookUrl: payload }; // facebookUrl: "",
    case " SET_IS_FACEBOOK_URL_PUBLIC":
      return { ...entityState, isFacebookUrlPublic: payload }; // isFacebookUrlPublic: false,
    case " SET_WHATSAPP_NUMBER":
      return { ...entityState, whatsappNumber: payload }; // whatsappNumber: "",
    case " SET_IS_WHATSAPP_NUMBER_PUBLIC":
      return { ...entityState, isWhatsappNumberPublic: payload }; // isWhatsappNumberPublic: false,
    case " SET_ABOUT_US_DESCRIPTION":
      return { ...entityState, aboutUsDescription: payload }; // aboutUsDescription: "",
    case " SET_ABOUT_US_PICTURE_URL":
      return { ...entityState, aboutUsPictureUrl: payload }; // aboutUsPictureUrl: "",
    case " SET_IS_CONTACT_US_SECTION_PUBLIC":
      return { ...entityState, isContactUsSectionPublic: payload }; // isContactUsSectionPublic: false,
    case " SET_CONTACT_US_DESCRIPTION":
      return { ...entityState, contactUsDescription: payload }; // contactUsDescription: "",
    case " SET_CONTACT_US_PICTURE_URL":
      return { ...entityState, contactUsPictureUrl: payload }; // contactUsPictureUrl: "",
    case " SET_IS_VERIFIED":
      return { ...entityState, contactUsPictureUrl: payload }; //isVerified: false,
    case "SET_ENTITY_OWNER_ID":
      return { ...entityState, entityOwnerId: payload }; // entityOwnerId: "",
    case "SET_INDUSTRY_ID":
      return { ...entityState, industryId: payload }; // industryId: "",
    case "SET_ENTITY_TYPE_ID":
      return { ...entityState, entityTypeId: payload }; // entityTypeId: "",
    case "SET_LOCATION_ID":
      return { ...entityState, locationId: payload }; // locationId: "",
    case "SET_ENTITY_AREA":
      return { ...entityState, entityArea: payload }; // entityArea: "",
    case "SET_ENTITY_UNIQUE_NAME":
      return { ...entityState, entityUniqueName: payload }; // entityUniqueName: "",
      case"SET_ENTITY_ADDRESS":
      return {...entityState,entityAddress:payload}
      case"SET_ENTITY_ID":
      return {...entityState,entityId:payload}
    default:
      throw new Error(`no cases to switch from entity of ${type} `);
  }
};
export default entityInfoReducer;
