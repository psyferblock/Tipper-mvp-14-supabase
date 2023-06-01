"use client";

export const entityContextState = {
  entityName: "",
  logoObject: "",
  arrayOfPictureObjects: [],
  entityTags: [],
  entityPhoneNumber: "",
  entityEmailAddress: "",
  entityAddress: "",
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
  // isContactUsPublic: false,
  isVerified: false,
  isInstagramUrlPublic: false,
  isFacebookUrlPublic: false,
  isWhatsappNumberPublic: false,
  entityUniqueName: "",
  entityArea: "",
  entityId: "",
  entityMenuInfo: [],
};

const entityInfoReducer = (entityState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ENTITY_NAME":
      return { ...entityState, entityName: payload };
    case "LOGO_OBJECT":
      return { ...entityState, logoObject: payload }; //  logoObject: "",
    case "ARRAY_OF_PICTURE_OBJECTS":
      return { ...entityState, arrayOfPictureObjects: payload }; //arrayOfPictureObjects: [],
    case "ENTITY_TAGS":
      return { ...entityState, entityTags: payload }; //entityTags: [],
    case "PHONE_NUMBER":
      return { ...entityState, entityPhoneNumber: payload }; // phoneNumber: "",
    case "EMAIL_ADDRESS":
      return { ...entityState, entityEmailAddress: payload }; // emailAddress: "",
    case "INSTAGRAM_URL":
      return { ...entityState, instagramUrl: payload }; // instagramUrl: "",
    case "IS_INSTAGRAM_URL_PUBLIC":
      return { ...entityState, isInstagramUrlPublic: payload }; //  isInstagramUrlPublic: false,
    case "FACEBOOK_URL":
      return { ...entityState, facebookUrl: payload }; // facebookUrl: "",
    case "IS_FACEBOOK_URL_PUBLIC":
      return { ...entityState, isFacebookUrlPublic: payload }; // isFacebookUrlPublic: false,
    case "WHATSAPP_NUMBER":
      return { ...entityState, whatsappNumber: payload }; // whatsappNumber: "",
    case "IS_WHATSAPP_NUMBER_PUBLIC":
      return { ...entityState, isWhatsappNumberPublic: payload }; // isWhatsappNumberPublic: false,
    case "ABOUT_US_DESCRIPTION":
      return { ...entityState, aboutUsDescription: payload }; // aboutUsDescription: "",
    case "ABOUT_US_PICTURE_URL":
      return { ...entityState, aboutUsPictureUrl: payload }; // aboutUsPictureUrl: "",
    case "IS_CONTACT_US_SECTION_PUBLIC":
      return { ...entityState, isContactUsSectionPublic: payload }; // isContactUsSectionPublic: false,
    case "CONTACT_US_DESCRIPTION":
      return { ...entityState, contactUsDescription: payload }; // contactUsDescription: "",
    case "CONTACT_US_PICTURE_URL":
      return { ...entityState, contactUsPictureUrl: payload }; // contactUsPictureUrl: "",
    case "IS_VERIFIED":
      return { ...entityState, contactUsPictureUrl: payload }; //isVerified: false,
    case "ENTITY_OWNER_ID":
      return { ...entityState, entityOwnerId: payload }; // entityOwnerId: "",
    case "INDUSTRY_ID":
      return { ...entityState, industryId: payload }; // industryId: "",
    case "ENTITY_TYPE_ID":
      return { ...entityState, entityTypeId: payload }; // entityTypeId: "",
    case "LOCATION_ID":
      return { ...entityState, locationId: payload }; // locationId: "",
    case "ENTITY_AREA":
      return { ...entityState, entityArea: payload }; // entityArea: "",
    case "ENTITY_UNIQUE_NAME":
      return { ...entityState, entityUniqueName: payload }; // entityUniqueName: "",
    case "ENTITY_ADDRESS":
      return { ...entityState, entityAddress: payload };
    case "ENTITY_ID":
      return { ...entityState, entityId: payload };
    case "CHANGE_INPUT":
      return {
        ...entityState,
        [action.payload.name]: action.payload.value,
      };
    case "ADD_TAG":
      return {
        ...entityState,
        entityTags: [...entityState.entityTags, action.payload],
      };
    case "REMOVE_TAG":
      return {
        ...entityState,
        entityTags: entityState.entityTags.filter(
          (tag) => tag !== action.payload
        ),
      };
    case "ENTITY_MENU_INFO":
      return {
        ...entityState,
        entityMenuInfo: payload,
      };
    default:
      throw new Error(`no cases to switch from entity of ${type} `);
  }
};
export default entityInfoReducer;
