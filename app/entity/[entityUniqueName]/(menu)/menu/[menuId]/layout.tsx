import { getEntityUsingUniqueNameServer } from "@/app/lib/get/getEntityUsingUniqueName";
import CopyUrlShareWhatsappButtons from "@/app/root-components/entityPage-Components/CopyUrlShareWhatsappButtons";
import EntityPageCoverPhotosSection from "@/app/root-components/entityPage-Components/CoverPhotosSection";
import EntityPageContainerWithEntityInfos from "@/app/root-components/entityPage-Components/EntityPageContainerWithEntityInfos";
import EntityPageHighlightsSection from "@/app/root-components/entityPage-Components/HighlightsSection";
import { createServerClient } from "@/app/utils/supabase-server";
import Link from "next/link";

export default async function MenuIdPageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { entityUniqueName: string };
}) {
  const entityUniqueName = params.entityUniqueName;


  const supabaseServer = createServerClient();

  // getting session
  const {
    data: { session },
  } = await supabaseServer.auth.getSession(); /// its here where we get the session from supabase. and its details.

  //Fetching from DB
  const entityInfos = await getEntityUsingUniqueNameServer(
    supabaseServer,
    entityUniqueName
  );

  const userId = session?.user.id;

  let userOwnsEntity;
  let entityOwnedId = entityInfos.user_id;
  if (session) {
    const ownerOfCurrentEntity = entityOwnedId;
    if (userId === ownerOfCurrentEntity) {
      userOwnsEntity = true;
      entityOwnedId = entityInfos.id;
    }
  }

  return (
    <>
      <div>
        <div className="flex items-center justify-between m-2 border-stone-500 border-2">
          <div>{entityInfos.entity_name}</div>
          {userOwnsEntity && (
            <button className="bg-amethyst rounded-md h-12 w-32 m-2">
              <Link
                href={`entity/${entityUniqueName}/manageEntity/manageEntityInfo`}
                className=" "
              >
                Manage Entity
              </Link>
            </button>
          )}
        </div>
        <div className=" border-stone-500 border-2 m-2">
          <CopyUrlShareWhatsappButtons />
        </div>
      </div>
      welcome to entityUniqueName /menuId home
      {children}
    </>
  );
}
