import AboutUsSection from "@/app/root-Components/entityPage-Components/AboutUsSection";
import ContactUsSection from "@/app/root-Components/entityPage-Components/ContactUsSection";
import CoverPhotos from "@/app/root-Components/entityPage-Components/CoverPhotosSection";
import EntityInfosLeftContainer from "@/app/root-Components/entityPage-Components/EntityInfosLeftContainer";
import HighlightsSection from "@/app/root-Components/entityPage-Components/HighlightsSection";
import Link from "next/link";
import ManageEntityButtonDesktop from "@/app/root-Components/entityPage-Components/ManageEntityDesktopButton";
import { getHighlightsServer } from "@/app/lib/get/getHighlights";
import { getBasicPicturesServer } from "@/app/lib/get/getBasicPictures";
import { createServerClient } from "@/app/utils/supabase-server";
import { getEntityInfosServer } from "@/app/lib/get/getEntityInfos";
import CopyUrlShareWhatsappButtons from "@/app/root-Components/entityPage-Components/CopyUrlShareWhatsappButtons";
import getEntityOfUserServer from "@/app/lib/get/getEntityOfUser";
import { getEntityIdFromUniqueNameServer } from "@/app/lib/get/getEntityIdFromUniqueName";

export default async function EntityPageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { entityUniqueName: string };
}) {
  //Fetching from DB
  const supabaseServer = createServerClient();
   const entityId= await getEntityIdFromUniqueNameServer(supabaseServer,params.entityUniqueName)


  //Fetching entity infos and passing them as props
  const entityInfos = await getEntityInfosServer(supabaseServer, params.entityId);

  //Fetching highlights and passing them as props
  const entityHighlights = await getHighlightsServer(supabaseServer, params.entityId);

  //Fetching cover pictures and passing them as props
  const allBasicPictures = await getBasicPicturesServer(
    supabaseServer,
    params.entityId
  );

  const entityCoverPictures = allBasicPictures.filter(
    (pictureObject) => pictureObject.media_category == "cover_picture"
  );

  //Checking if contact_us is set to public or not
  const isContactUsSectionPublic = entityInfos.is_contact_us_public;

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const userId = session?.user.id;

  let userOwnsEntity;
  let entityOwnedId;
  if (session) {
    const ownerOfCurrentEntity = entityInfos.user_id;
    if (userId == ownerOfCurrentEntity) {
      userOwnsEntity = true;
      entityOwnedId = entityInfos.id;
    }
  }

  return (
    <>
      {/* MOBILE "MANAGE ENTITY" */}
      {/* <div className="flex items-center justify-between sm:hidden h-16 px-3 bg-gray-300 w-full z-50 fixed text-2xl font-bold">
        <div>
          <div>{entityInfos.entity_name}</div>
          <CopyUrlShareWhatsappButtons />
        </div>
        {userOwnsEntity && (
          <Link
            href={`${entityOwnedId}/manageEntity/entityInfo`}
            className="h-fit rounded-3xl text-blue-500 pb-2 text-sm "
          >
            Manage
          </Link>
        )}
      </div> */}

      <div className=" sm:hidden h-16 px-3 bg-gray-300 w-full z-50 fixed text-2xl font-bold">
        <div className="flex items-center justify-between">
          <div>{entityInfos.entity_name}</div>
          {userOwnsEntity && (
            <Link
              href={`${entityOwnedId}/manageEntity/entityInfo`}
              className="h-fit rounded-3xl text-blue-500 pt-3 text-sm "
            >
              Manage Entity
            </Link>
          )}
        </div>
        {/* <CopyUrlShareWhatsappButtons /> */}
      </div>

      {/* THIS DIV IS FOR MOBILE VERSION ONLY: EXTRA SPACE TO COMPENSATE FOR NAVBAR HEIGHT */}
      <div className="h-16 sm:h-0"></div>

      {/* DESKTOP "MANAGE ENTITY" */}
      <div className=" sm:h-fit sm:min-h-screen px-3 sm:px-12 py-3 sm:py-8">
        <div className="hidden sm:flex items-center justify-between pb-5 sm:pb-2">
          <div>
            <div className="font-semibold text-2xl ">Entity Name</div>
            {/* <CopyUrlShareWhatsappButtons /> */}
          </div>
          {
            userOwnsEntity && (
              <Link href={`${entityOwnedId}/manageEntity/entityInfo`}>
                <div className="sm:w-32 sm:h-9 h-fit rounded-3xl sm:border-2 sm:border-gray-500 text-blue-500 sm:text-blue-500 text-xs">
                  <div className="sm:text-center sm:pt-2">Manage Entity</div>
                </div>
              </Link>
            )
            // <ManageEntityButtonDesktop />
          }
        </div>
        {/* TOP OF THE PAGE CONTAINER */}
        <div className="sm:flex sm:flex-row flex flex-col-reverse sm:space-x-5 sm:h-[496px] sm:mb-8">
          {/* <EntityInfosLeftContainer entityInfos={entityInfos} /> */}

          {/* EVERYTHING ON THE RIGHT OF THE LEFT COLUMN */}
          <div className="sm:h-[496px] sm:flex sm:flex-col justify-between sm:w-1/4 sm:grow">
            {/*  COVER PHOTOS CONTAINER */}
            {/* <CoverPhotos entityCoverPictures={entityCoverPictures} /> */}
            {/* HIGHLIGHTS CONTAINER */}

            {/* <HighlightsSection
              entityHighlights={entityHighlights}
              userOwnsEntity={userOwnsEntity}
              entityOwnedId={entityOwnedId}
            /> */}
          </div>
        </div>

        {/* OUR MENU SECTION */}
        {children}

        {/* CONTACT US SECTION */}
        {isContactUsSectionPublic && (
          // <ContactUsSection
          //   description={entityInfos.contact_us_description}
          //   phoneNumber={entityInfos.entity_phone_number}
          //   pictureUrl={entityInfos.contact_us_picture_url}
          // />
        )}

        {/* ABOUT US SECTION */}
        {/* <AboutUsSection
          description={entityInfos.about_us_description}
          pictureUrl={entityInfos.about_us_picture_url}
        /> */}
      </div>
    </>
  );
}
