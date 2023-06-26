"use client";

import { useSupabase } from "@/app/supabase-provider";
import addBasicPictures from "@/app/lib/create/addBasicPictures";
import addClosingHours from "@/app/lib/update/addClosingHours";
import addOpeningHours from "@/app/lib/update/addOpeningHours";
import updateEntityInfos from "@/app/lib/update/updateEntityInfos";
import { supabase } from "@/app/utils/supabase-browser";
import { useRouter } from "next/navigation";
import { useEntityContext } from "@/app/context/entityContext/entityContextStore";
import { useManageOpeningHoursContext } from "@/app/context/openingHoursContext/openingClosingStore";

export default function StickyBarSaveCancel(props) {
  const router = useRouter();

  const hoursContextState = useManageOpeningHoursContext();

  const {
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
    handleTags,
    removeTag,
    changeInput,
  } = useEntityContext();

  async function handleSaveButton() {
    await updateEntityInfos({
      entityTags: entityTags,
      entityPhoneNumber: entityPhoneNumber,
      entityEmailAddress: entityEmailAddress,
      instagramUrl: instagramUrl,
      isInstagramUrlPublic: isInstagramUrlPublic,
      facebookUrl: facebookUrl,
      isFacebookUrlPublic: isFacebookUrlPublic,
      whatsappNumber: whatsappNumber,
      isWhatsappNumberPublic: isWhatsappNumberPublic,
      aboutUsDescription: aboutUsDescription,
      aboutUsPictureUrl: aboutUsPictureUrl,
      isContactUsSectionPublic: isContactUsSectionPublic,
      contactUsDescription: contactUsDescription,
      contactUsPictureUrl: contactUsPictureUrl,
      // entityArea: entityArea,
      // entityAddress: entityAddress,
      entityId: entityId,
      entityLogoUrl: logoObject.media_url,
    });

    console.log("entityId ,closingHoutsMondayFriday", entityId);
    console.log(
      "closingHoursMondayFriday",
      hoursContextState.closingHoursMondayFriday
    );
    console.log("we are before save new pictures await ");
    await saveNewPictures();

    //Refresh page every change is saved
    //Im not doing router.refresh because i want to refresh the data fetched and the data fetched is in layout page
    router.push(`${entityId}/manageEntity/Menu`);
  }

  //Function that removes the objects that were added but then user pressed on "Cancel" instead of "Save"
  function handleCancelButton() {
    const newArray = arrayOfPictureObjects.filter(
      (pictureObject) => pictureObject.id != null
    );
    setArrayOfPictureObjects(newArray);
  }

  //Function to add new pictures to the DB
  async function saveNewPictures() {
    let arrayOfNewPictureObjects = arrayOfPictureObjects.filter(
      (pictureObject) => pictureObject.id == null
    );

    if (logoObject?.id == null) {
      console.log("logoObject in if", logoObject);
      arrayOfNewPictureObjects.push(logoObject);
      console.log(
        "arrayOfNewPictureObjects after loggo adding",
        arrayOfNewPictureObjects
      );
    }

    if (arrayOfNewPictureObjects.length > 0) {
      await addBasicPictures(arrayOfNewPictureObjects, entityId);
    }

    await addOpeningHours({
      openingHoursMondayFriday: hoursContextState.openingHoursMondayFriday,
      openingHoursSaturday: hoursContextState.openingHoursSaturday,
      openingHoursSunday: hoursContextState.openingHoursSunday,
      entityId: entityId,
    });
    await addClosingHours({
      closingHoursMondayFriday: hoursContextState.closingHoursMondayFriday,
      closingHoursSaturday: hoursContextState.closingHoursSaturday,
      closingHoursSunday: hoursContextState.closingHoursSunday,
      entityId: entityId,
    });
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 flex h-14 justify-end space-x-5 bg-gray-500 px-12 py-2 opacity-95">
      <button
        className="h-10 w-28 rounded-3xl border border-gray-600 bg-white text-sm text-black hover:bg-gray-200 "
        onClick={() => handleCancelButton()}
      >
        Cancel
      </button>
      <button
        className="h-10 w-28 rounded-3xl border border-gray-600 bg-blue-600 text-sm text-black hover:bg-blue-700 "
        onClick={() => handleSaveButton()}
      >
        Save
      </button>
    </div>
  );
}
