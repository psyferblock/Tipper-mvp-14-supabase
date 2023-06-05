import { getBasicPicturesServer } from "@/app/lib/get/getBasicPictures";
import { getEntityUsingUniqueNameServer } from "@/app/lib/get/getEntityUsingUniqueName";
import EntityPageAboutUsSection from "@/app/root-components/entityPage-Components/AboutUsSection";
import EntityPageContactUsSection from "@/app/root-components/entityPage-Components/ContactUsSection";
import CopyUrlShareWhatsappButtons from "@/app/root-components/entityPage-Components/CopyUrlShareWhatsappButtons";
import EntityPageCoverPhotosSection from "@/app/root-components/entityPage-Components/CoverPhotosSection";
import EntityPageContainerWithEntityInfos from "@/app/root-components/entityPage-Components/EntityPageContainerWithEntityInfos";
import EntityPageHighlightsSection from "@/app/root-components/entityPage-Components/HighlightsSection";
import { createServerClient } from "@/app/utils/supabase-server";
import Image from "next/image";
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
  const entityId = entityInfos?.id;
  // console.log('entityInfos from entityUniqueName layout ', entityInfos)

  ////getting pictures
  const allBasicPictures = await getBasicPicturesServer(
    supabaseServer,
    entityId
  );

  const userId = session?.user.id;
  const isContactUsSectionPublic = entityInfos.is_contact_us_public;
  const entityCoverPictures=  allBasicPictures.filter((pic)=>(
    pic.media_category=="cover_picture"
  ))
  console.log('entityCoverPictures', entityCoverPictures)

  let userOwnsEntity;
  let entityOwnedId = entityInfos?.user_id;
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
        layout for entityUniqueName
        <div className="flex items-center justify-between m-2 border-stone-500 border-2">
          
          <div className="flex">
          <div className="aspect-1/1 relative mx-auto h-10 w-10 overflow-hidden rounded-full bg-ruby-tint ring-2 ring-ruby-tint">


            <Image src={entityInfos?.entity_logo_url} fill alt="entity_logo_url"/>
            </div>
            <div>

            {entityInfos?.entity_name}</div>
            </div>
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
          {/* <CopyUrlShareWhatsappButtons /> */}
        </div>
      </div>
      {/* TOP OF THE PAGE CONTAINER */}
      <div className="sm:flex sm:flex-row flex flex-col-reverse sm:space-x-5 sm:h-[496px] sm:mb-8">
        <EntityPageContainerWithEntityInfos entityInfos={entityInfos} />

        {/* EVERYTHING ON THE RIGHT OF THE LEFT COLUMN */}
        <div className="sm:h-[496px] sm:flex sm:flex-col justify-between sm:w-1/4 sm:grow">
          {/*  COVER PHOTOS CONTAINER */}
          <EntityPageCoverPhotosSection
            entityCoverPictures={entityCoverPictures}
          />

          <span className="bg-emerald">cover photos</span>
          {/* HIGHLIGHTS CONTAINER */}

          {/* <EntityPageHighlightsSection
              entityHighlights={entityHighlights}
              userOwnsEntity={userOwnsEntity}
              entityOwnedId={entityOwnedId}
            /> */}
        </div>
      </div>
      {children}
      <div>
        {isContactUsSectionPublic && (
          <EntityPageContactUsSection
            description={entityInfos.contact_us_description}
            phoneNumber={entityInfos.entity_phone_number}
            pictureUrl={entityInfos.contact_us_picture_url}
          />
        )}

        {/* ABOUT US SECTION */}
        <EntityPageAboutUsSection
          description={entityInfos.about_us_description}
          pictureUrl={entityInfos.about_us_picture_url}
        />
      </div>
    </>
  );
}
