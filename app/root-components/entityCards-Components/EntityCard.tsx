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
        {/* <!-- Card wrapper -->/\ */}
        <div className="mx-auto flex w-2/5 flex-wrap  p-4 shadow-lg lg:w-4/5">
          {/* <!-- Card image --> */}
          <div className="-z-2 relative h-32 w-full border bg-cover bg-bottom object-center md:h-auto md:w-1/3">
            {/* <div className="absolute text-xl"> */}
            {/* <i className="fa fa-heart hover:text-red-light ml-4 mt-4 cursor-pointer text-white"></i> */}
            <Image
              className="mt-1 inline-block rounded-sm ring-2"
              src={entityCoverPhoto}
              alt="entityCoverPhoto"
              fill
            />
            {/* </div> */}
          </div>
          {/* <!-- ./Card image --> */}
          {/* <!-- Card body --> */}
          <div className="bg-grey-200 w-full  md:w-2/3">
            {/* <!-- Card body - outer wrapper --> */}
            <div className="relative m-1 mx-auto h-full border-2  border-green-800 px-6 md:-ml-6 md:px-0 md:pt-6">
              {/* <!-- Card body - inner wrapper --> */}
              <div className=" -mt-6 mb-4 flex flex-wrap items-center  rounded-md border-2 border-blue-800 bg-white p-1 text-center md:mb-0 md:mt-0 md:flex-wrap lg:h-full">
                {/* <!-- Card title and subtitle --> */}
                <div className="lg:border-right m-1 h-12 w-full rounded-sm border-2 border-orange-500 p-1 shadow-sm  md:text-left lg:w-1/5 lg:border-solid">
                  <h3>{entityName}</h3>
                  <h1 className="text-grey-dark m-1 text-sm italic">
                    {entityArea}
                  </h1>
                  <hr className="mt-4 w-1/4 border  md:ml-0 lg:hidden" />
                </div>
                {/* <!-- ./Card title and subtitle --> */}

                {/* <!-- Card Address --> */}
                <div className="w-full border-2 border-purple-800 lg:w-3/5 lg:px-3">
                  <h1 className="text-md mt-2 p-2 text-justify text-sm md:text-left lg:mt-0">
                    {entityAddress}
                  </h1>
                </div>
                {/* <!-- ./Card Address --> */}
              </div>
              {/* <!-- ./Card body - inner wrapper --> */}
            </div>
            {/* <!-- ./Card body - outer wrapper --> */}
          </div>
          {/* <!-- ./Card body --> */}
        </div>
        {/* <!-- ./Card wrapper --> */}
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
