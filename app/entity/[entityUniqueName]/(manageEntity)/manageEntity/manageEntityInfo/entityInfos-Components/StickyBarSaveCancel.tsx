// "use client";

// import { useSupabase } from "@/app/supabase-provider";
// import addBasicPictures from "@/lib/create/addBasicPictures";
// import addClosingHours from "@/lib/create/addClosingHours";
// import addOpeningHours from "@/lib/create/addOpeningHours";
// import updateEntityInfos from "@/lib/update/updateEntityInfos";
// import { supabase } from "@/utils/supabase-browser";
// import { useRouter } from "next/navigation";
// import { useManageEntityInfosContext } from "../Contexts/EntityInfoContext";
// import { useManageOpeningHoursContext } from "../Contexts/openingClosingStore";

// export default function StickyBarSaveCancel(props) {
//   const entityId = props.entityId;
//   const router = useRouter();

//   const contextState = useManageOpeningHoursContext();

//   const {
//     logoObject,
//     arrayOfPictureObjects,
//     tags,
//     phoneNumber,
//     emailAddress,
//     instagramUrl,
//     isInstagramUrlPublic,
//     facebookUrl,
//     isFacebookUrlPublic,
//     whatsappNumber,
//     isWhatsappNumberPublic,
//     aboutUsDescription,
//     aboutUsPictureUrl,
//     isContactUsSectionPublic,
//     contactUsDescription,
//     contactUsPictureUrl,
//     setArrayOfPictureObjects,
//   } = useManageEntityInfosContext();

//   async function handleSaveButton() {
//     await updateEntityInfos(
//       entityId,
//       tags,
//       phoneNumber,
//       emailAddress,
//       instagramUrl,
//       isInstagramUrlPublic,
//       facebookUrl,
//       isFacebookUrlPublic,
//       whatsappNumber,
//       isWhatsappNumberPublic,
//       aboutUsDescription,
//       aboutUsPictureUrl,
//       isContactUsSectionPublic,
//       contactUsDescription,
//       contactUsPictureUrl
//     );
//     await saveNewPictures();

//     //Refresh page every change is saved
//     //Im not doing router.refresh because i want to refresh the data fetched and the data fetched is in layout page
//     router.push(`${entityId}/manageEntity/entityInfo`);
//   }

//   //Function that removes the objects that were added but then user pressed on "Cancel" instead of "Save"
//   function handleCancelButton() {
//     const newArray = arrayOfPictureObjects.filter(
//       (pictureObject) => pictureObject.id != null
//     );
//     setArrayOfPictureObjects(newArray);
//   }

//   //Function to add new pictures to the DB
//   async function saveNewPictures() {
//     let arrayOfNewPictureObjects = arrayOfPictureObjects.filter(
//       (pictureObject) => pictureObject.id == null
//     );

//     if (logoObject?.id == null) {
//       console.log("logoObject in if", logoObject);
//       arrayOfNewPictureObjects.push(logoObject);
//       console.log(
//         "arrayOfNewPictureObjects after loggo adding",
//         arrayOfNewPictureObjects
//       );
//     }

//     if (arrayOfNewPictureObjects.length > 0) {
//       await addBasicPictures(arrayOfNewPictureObjects, entityId);
//     }

//     await addClosingHours(
//       contextState.openingHoursMondayFriday,
//       contextState.openingHoursSaturday,
//       contextState.openingHoursSunday,
//       entityId
//     );
//     await addOpeningHours(
//       contextState.closingHoursMondayFriday,
//       contextState.closingHoursSaturday,
//       contextState.closingHoursSunday,
//       entityId
//     );
//   }

//   return (
//     <div className="bg-gray-500 opacity-95 h-14 fixed bottom-0 left-0 right-0 py-2 px-12 flex justify-end space-x-5">
//       <button
//         className="w-28 h-10 rounded-3xl bg-white border hover:bg-gray-200 border-gray-600 text-black text-sm "
//         onClick={() => handleCancelButton()}
//       >
//         Cancel
//       </button>
//       <button
//         className="w-28 h-10 rounded-3xl bg-blue-600 border hover:bg-blue-700 border-gray-600 text-black text-sm "
//         onClick={() => handleSaveButton()}
//       >
//         Save
//       </button>
//     </div>
//   );
// }
