import { createServerClient } from "@/app/utils/supabase-server";
import Image from "next/image";
import Link from "next/link";
import UpvoteAndDownvote from "../voting/UpvoteAndDownvote";

export default async function EntityCard({ entity }) {
  const supabaseServer = await createServerClient();

  // console.log('props', entity)
  const entityUniqueName = entity.entity_unique_name;
  const entityName = entity.entity_name;
  const entityArea = entity.entity_area;
  const entityId = entity.id;
  const IndustryId = entity.industry_id;
  const entityTypeId = entity.entity_type;
  const entityAddress = entity.entity_address;
  const entityLogo = entity.entity_logo_url;
  const menuId = entity.entity_menu_id[0].id;
  // console.log('menuId', menuId)

  const categoryId = entity.entity_menu_id[0].menu_category[0].id;
  const entityCoverPhotos = entity.entity_basic_media.filter((pic) => {
    pic.media_url === "cover_picture";
    return pic;
  });
  const entityCoverPhoto = entityCoverPhotos[0].media_url;

  const upVotes = 12;
  const downVotes = 5;

  //Fetching from DB

  return (
    <>
      <Link
        href={`/entity/${entityUniqueName}/menu/${menuId}/category/${categoryId}`}
        scroll={false}
        passHref
      >
        <div
          id="app"
          className="text-grey-darkest flex   h-32 w-full max-w-md rounded-sm bg-ruby-tint  shadow-md "
        >
          <Image
            className="  h-11/12 left-0 top-0 w-1/2 rounded-l-sm p-1"
            src={entityCoverPhoto}
            alt="Room Image"
            width={500}
            height={500}
          />
          <div className="flex w-full flex-col">
            <div className="flex-1 p-4 pb-0">
              <h3 className="text-grey-darkest mb-1 font-light">
                {entityName}
              </h3>
              <div className="mb-4 flex items-center text-xs">
                <i className="fas fa-map-marker-alt text-grey-dark mr-1"></i>
                {entityArea}
              </div>

              <div className="px-2 text-xs">
                <i className="text-grey-darker far fa-building"></i>{" "}
                {entityAddress}
              </div>
            </div>
            {/* <UpvoteAndDownvote
              totalUpVotes={upVotes}
              totalDownVotes={downVotes}
            /> */}
          </div>
        </div>
      </Link>
    </>
  );
}
