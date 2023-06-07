import { getChosenEntityCardPictureServer } from "@/app/lib/get/getChosenEntityCardPicture";
import { getFirstMenuCategoryIdServer } from "@/lib/get/getFirstMenuCategoryId";
import { getMenuCategoriesServer } from "@/app/lib/get/getMenuCategories";
import { createServerClient } from "@/app/utils/supabase-server";
import Image from "next/image";
import Link from "next/link";
import { getBasicPictures } from "@/app/lib/get/getBasicPictures";

export default async function EntityCard({ entity }) {
  const supabaseServer = createServerClient();

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
  console.log("entityCoverPhoto", entityCoverPhoto);

  //Fetching from DB

  return (
    <>
      <Link
        href={`entity/${entityUniqueName}/menu/${menuId}/category/${categoryId}`}
      >
        <div
          id="app"
          className=" w-42  text-grey-darkest m-1 flex h-32 rounded bg-white  shadow-md max-w-md"
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
          </div>
        </div>
      </Link>
    </>
  );
}

// entity_unique_name: 'smurfvillage-78-692-4',
// entity_name: 'smurf village',
// industry_id: 5,
// entity_type_id: 4,
// entity_address: 'the smurfin world',
// entity_logo_url: 'https://zluncbhyhpxonqhigbhn.supabase.co/storage/v1/object/public/logos/885c9273-1869-4466-b67e-935f51d06ad0/833eeb7b-aeda-4791-b08d-708dd3f557cf',
// entity_menu_id: [ [Object] ]
