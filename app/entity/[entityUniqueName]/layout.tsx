import GoToEntityButton from "@/app/(entityCreation)/entity-components/GoToEntityButton";
import EntityButton from "@/app/home/[uniqueUserProfile]/profilePageComponents/EntityButton";
import { getEntityUsingUniqueNameServer } from "@/app/lib/get/getEntityUsingUniqueName";
import CopyUrlShareWhatsappButtons from "@/app/root-components/entityPage-Components/CopyUrlShareWhatsappButtons";
import EntityPageCoverPhotosSection from "@/app/root-components/entityPage-Components/CoverPhotosSection";
import EntityPageContainerWithEntityInfos from "@/app/root-components/entityPage-Components/EntityPageContainerWithEntityInfos";
import EntityPageHighlightsSection from "@/app/root-components/entityPage-Components/HighlightsSection";
import { createServerClient } from "@/app/utils/supabase-server";
import Link from "next/link";

export default async function EntityPageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { entityUniqueName: string };
}) {
  const entityUniqueName = params.entityUniqueName;
  



  const supabaseServer= createServerClient()
  // getting session
  const {
    data: { session },
  } = await supabaseServer.auth.getSession(); /// its here where we get the session from supabase. and its details.



 const  userId=session?.user.id

  return (
    <>
    
  
      welcome to entityUniqueName/menu layout page 
      <EntityButton/>
      {children}
    </>
  );
}
