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
import GoToEntityButton from "@/app/(entityCreation)/entity-components/GoToEntityButton";

export default function StickyBarSaveCancel(props: any) {
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

    isAboutUsPublic,
    entityUniqueName,
    entityId,
    setArrayOfPictureObjects,
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
      isAboutUsPublic: isAboutUsPublic,
      // entityArea: entityArea,
      // entityAddress: entityAddress,
      entityId: entityId,
      entityLogoUrl: logoObject.media_url,
    });

    await saveNewPictures();

    //Refresh page every change is saved
    //Im not doing router.refresh because i want to refresh the data fetched and the data fetched is in layout page
    router.push(`/entity/${entityUniqueName}/manageEntity/manageEntityInfo`);
  }

  //Function that removes the objects that were added but then user pressed on "Cancel" instead of "Save"
  function handleCancelButton() {
    const newArray = arrayOfPictureObjects.filter(
      (pictureObject: any) => pictureObject.id != null
    );
    setArrayOfPictureObjects(newArray);
  }

  //Function to add new pictures to the DB
  async function saveNewPictures() {
    let arrayOfNewPictureObjects = arrayOfPictureObjects.filter(
      (pictureObject: any) => pictureObject.id == null
    );

    if (logoObject?.id == null) {
      arrayOfNewPictureObjects.push(logoObject);
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
    <div className="fixed mb-2 bottom-0 left-0 right-0 flex h-20 justify-between space-x-5 bg-ruby-tint px-12 py-2 opacity-95">
      <GoToEntityButton />
      <button
        className="border-white-2 m-4 h-12 w-32 border-spacing-4  rounded-md border-2 border-amethyst bg-white p-3 text-center shadow-md shadow-amethyst-shade"
        onClick={() => handleCancelButton()}
      >
        Cancel
      </button>
      <button
        className="border-white-2 m-4 h-12 w-32 border-spacing-4  rounded-md border-2 border-amethyst bg-white p-3 text-center shadow-md shadow-amethyst-shade"
        onClick={() => handleSaveButton()}
      >
        Save
      </button>
    </div>
  );
}
