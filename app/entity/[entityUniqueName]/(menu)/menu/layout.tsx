import ManageEntityButton from "@/app/(entityCreation)/entity-components/ManageEntityButton";
import { getBasicPicturesServer } from "@/app/lib/get/getBasicPictures";
import { getEntityUsingUniqueNameServer } from "@/app/lib/get/getEntityUsingUniqueName";
import EntityPageAboutUsSection from "@/app/root-components/entityPage-components/entitySections/AboutUsSection";
import EntityPageContactUsSection from "@/app/root-components/entityPage-components/entitySections/ContactUsSection";
import CopyUrlShareWhatsappButtons from "@/app/root-components/entityPage-components/entitySections/CopyUrlShareWhatsappButtons";
import CoverPhotosSection from "@/app/rootComponents/entityPage-Components/entitySections/CoverPhotosSection";
import EntityPageContainerWithEntityInfos from "@/app/root-components/entityPage-components/entitySections/EntityPageContainerWithEntityInfos";
import EntityPageHighlightsSection from "@/app/root-components/entityPage-components/entitySections/HighlightsSection";
import { createServerClient } from "@/app/utils/supabase-server";
import Image from "next/image";
import Link from "next/link";
import { BsWordpress } from "react-icons/bs";

export default async function MenuIdPageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { entityUniqueName: string };
}) {
  const entityHighlights = [
    {
      highlight_name: "this week",
    },
    {
      highlight_name: "valentines day",
    },
    {
      highlight_name: "happy hour",
    },
  ];

  const entityUniqueName = params.entityUniqueName;

  const supabaseServer = await createServerClient();

  // getting session
  const {
    data: { session },
  } = await supabaseServer.auth.getSession(); /// its here where we get the session from supabase. and its details.
  console.log("sessionat menu id layout ", session);
  //Fetching from DB
  const entityInfos = await getEntityUsingUniqueNameServer(
    supabaseServer,
    entityUniqueName
  );
  const entityId = entityInfos?.id;

  ////getting pictures
  const allBasicPictures = await getBasicPicturesServer(
    supabaseServer,
    entityId
  );

  const userId = session?.user.id;
  const isContactUsSectionPublic = entityInfos.is_contact_us_public;
  const entityCoverPictures = allBasicPictures.filter(
    (pic) => pic.media_category == "cover_picture"
  );
  const name = entityInfos?.entity_name;
  const entityTitle = name.split(" ");

  const capitaliseString = (title) => {
    for (let i = 0; i < title.length; i++) {
      title[i] = title[i][0].toUpperCase() + title[i].substr(1);
    }
    return title.join(" ");
  };
  const finalName = capitaliseString(entityTitle);

  let userOwnsEntity;
  let entityOwnedId = entityInfos?.user_id;

  if (userId == entityOwnedId) {
    userOwnsEntity = true;
    entityOwnedId = entityInfos.id;
  }

  return (
    <>
      <div className="mx-2" id="">
        <div>
          <div className=" flex items-center justify-between py-2 ">
            <div className="flex ">
              <div className="aspect-1/1 relative mx-auto aspect-auto h-12 w-12 overflow-hidden rounded-md  ring-2 ring-ruby-tint">
                <Image
                  src={entityInfos?.entity_logo_url}
                  fill
                  alt="entity_logo_url"
                />
              </div>
              <div className="p-2 align-text-bottom text-lg ">{finalName}</div>
            </div>
            <div>
              {userOwnsEntity && (
                <ManageEntityButton entityUniqueName={entityUniqueName} />
              )}
            </div>
          </div>
          <div className="mb-2 ">
            <CopyUrlShareWhatsappButtons />
          </div>
        </div>
        {/* TOP OF THE PAGE CONTAINER */}
        <div className="flex h-full flex-col-reverse sm:mb-8 sm:flex sm:h-[496px] sm:flex-row sm:space-x-5">
          <EntityPageContainerWithEntityInfos entityInfos={entityInfos} />

          {/* EVERYTHING ON THE RIGHT OF THE LEFT COLUMN */}
          <div className="  -mb-[400px] h-screen justify-between sm:mb-0 sm:flex sm:h-[496px] sm:w-1/4 sm:grow sm:flex-col ">
            {/*  COVER PHOTOS CONTAINER */}
            <CoverPhotosSection entityCoverPictures={entityCoverPictures} />

            {/* HIGHLIGHTS CONTAINER */}

            <EntityPageHighlightsSection
              entityHighlights={entityHighlights}
              userOwnsEntity={userOwnsEntity}
              entityOwnedId={entityOwnedId}
            />
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
      </div>
    </>
  );
}
