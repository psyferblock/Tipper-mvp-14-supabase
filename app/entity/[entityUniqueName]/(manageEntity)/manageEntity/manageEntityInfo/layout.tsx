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
 
  return (
    <>
     
      {/* <ManageOpeningHoursContextProvider hoursInput={hoursInput}> */}
          
        we are at the entity info management layout
        
        {children}
        {/* </ManageOpeningHoursContextProvider> */}
    </>
  );
}
