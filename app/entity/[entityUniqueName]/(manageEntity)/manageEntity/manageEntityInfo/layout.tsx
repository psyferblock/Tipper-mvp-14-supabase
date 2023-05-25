import EntityInfosContextProvider from "@/app/context/entityContext/entityContextStore";
import { ManageOpeningHoursContextProvider } from "@/app/context/openingHoursContext/openingClosingStore";
import { useUsersContext } from "@/app/context/userContext/userContextStore";
import { getBasicPicturesServer } from "@/app/lib/get/getBasicPictures";
import { getEntityUsingUniqueNameServer } from "@/app/lib/get/getEntityUsingUniqueName";
import { getMyEntityInfosServer } from "@/app/lib/get/getMyEntityInfos";
import { getMyUserInfoServer } from "@/app/lib/get/getMyUserInfo";
import { createServerClient } from "@/app/utils/supabase-server";

export default async function ManageEntityInfosLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { entityUniqueName: number };
}) {
  // Fetching from DB
  const supabaseServer = await createServerClient();
  const {
    data: { session },
  } = await supabaseServer.auth.getSession(); /// its here where we get the session from supabase. and its details.
  const entityUniqueName= params.entityUniqueName
  const userId = session?.user.id;
  const  entityInformation= await getEntityUsingUniqueNameServer(supabaseServer,entityUniqueName)
  const entityId=entityInformation?.id
  
  /// code from before test
  const basicPictures = await getBasicPicturesServer(supabaseServer, entityId);

  const arrayOfCoverPictureObjects = basicPictures.filter(
    (pictureObject) => pictureObject.media_category == "cover_picture"
  );

  //Getting the logo url and passing to context
  const arrayOfLogoPictureObject = basicPictures.filter(
    (pictureObject) => pictureObject.media_category == "logo_picture"
  );
  const logoPictureObject = arrayOfLogoPictureObject[0];
  console.log("logoPictureObject::", logoPictureObject);
  return (
    <>
     
        <EntityInfosContextProvider
          entityInfos={entityInformation}
          coverPictures={arrayOfCoverPictureObjects}
          logoPictureObject={logoPictureObject}
        >
      {/* <ManageOpeningHoursContextProvider hoursInput={hoursInput}> */}
          
        we are at the entity info management layout
        
        {children}
        {/* </ManageOpeningHoursContextProvider> */}
      </EntityInfosContextProvider>
    </>
  );
}
