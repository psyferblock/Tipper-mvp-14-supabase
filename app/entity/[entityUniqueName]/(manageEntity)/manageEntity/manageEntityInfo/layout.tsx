
import EntityInfosContextProvider from "@/app/context/entityContext/entityContextStore";
import { useUsersContext } from "@/app/context/userContextStore";
import { getBasicPicturesServer } from "@/app/lib/get/getBasicPictures";
import { getMyEntityInfosServer } from "@/app/lib/get/getMyEntityInfos";
import { createServerClient } from "@/app/utils/supabase-server";


export default async function ManageEntityInfosLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { entityUniqueName: number };
}) {
  // Fetching from DB
  const supabaseServer = createServerClient();
  const {userId,hasEntity}=useUsersContext()
  
  const entityInformation = hasEntity
    ? await getMyEntityInfosServer(supabaseServer, userId)
    : {};

  console.log('entityInformation', entityInformation)
  const basicPictures = await getBasicPicturesServer(
    supabaseServer,
    entityInformation.id,
    
    
  );
  console.log('basicPictures', basicPictures)

  const arrayOfCoverPictureObjects = basicPictures.filter(
    (pictureObject) => pictureObject.media_category == "cover_picture"
  );

  //Getting the logo url and passing to context
  const arrayOfLogoPictureObject = basicPictures.filter(
    (pictureObject) => pictureObject.media_category == "logo_picture"
  );
  const logoPictureObject = arrayOfLogoPictureObject[0];


  
  return (
    <>
     <EntityInfosContextProvider
          entityInfos={entityInformation}
          coverPictures={arrayOfCoverPictureObjects}
          logoPictureObject={logoPictureObject}
        >

    we are at the entity info management layout 
    
    {children}
        </EntityInfosContextProvider>
    </>
  );
}