"use client";

export const userContextState = {
  userId: "",
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  gender: "",
  contactNumber: 0,
  profilePictureUrl: "",
  emailAddress:"",
    uniqueUserName:"",
    hasEntity:false,
};

const userReducer = (userState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_USER_ID":
      return { ...userState, userId: payload };
    case "CHANGE_FIRST_NAME":
      return { ...userState, firstName: payload }; // has to return the whole state with the update of the first name only ,

    case "CHANGE_LAST_NAME":
      return { ...userState, lastName: payload };
    case "CHANGE_DATE_OF_BIRTH":
      return { ...userState, dateOfBirth: payload };
    case "CHANGE_GENDER":
      return { ...userState, gender: payload };
    case "CHANGE_CONTACT_NUMBER":
      return { ...userState, contactNumber: payload };
    case "CHANGE_PROFILE_PIC_URL":
      return { ...userState, profilePictureUrl: payload };
      case "CHANGE_EMAIL_ADDRESS":
        return {...userState, emailAddress: payload};
        case"CHANGE_UNIQUE_USER_NAME":
        return {...userState, uniqueUserName: payload};
        case"HAS_ENTITY":
        return {...userState, hasEntity:payload}
    default:
      throw new Error(`no cases to switch from ${type} `);
  }
};

export default userReducer;
