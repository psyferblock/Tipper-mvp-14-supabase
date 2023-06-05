import { getChosenEntityCardPictureServer } from "@/app/lib/get/getChosenEntityCardPicture";
import { getFirstMenuCategoryIdServer } from "@/lib/get/getFirstMenuCategoryId";
import { getMenuCategoriesServer } from "@/app/lib/get/getMenuCategories";
import { createServerClient } from "@/app/utils/supabase-server";
import Image from "next/image";
import Link from "next/link";
export default async function EntityCard(props) {
  const entity = props?.entity;
  const entityUniqueName = entity?.entity_unique_name;
  const menuId=entity?.menu

  console.log("entity id:", entityId);
  //Fetching from DB
  const supabaseServer = createServerClient();
 


  return (
    <>
      <Link
        href={`entity/${entituUniqueName}/menu/${menuId}/category/${categoryId}`}
        className="relative bg-gray-400 w-60 sm:w-[302px] h-40 sm:h-[162px] drop-shadow-lg rounded-md sm:pb-6 overflow-hidden"
      >
        {displayPictureUrl ? (
          <Image src={displayPictureUrl} alt="" fill />
        ) : (
          <></>
        )}

        {/* <!-- Pin to bottom left corner --> */}
        <div className="absolute bottom-3 sm:bottom-5 left-0 h-8 sm:w-fit flex space-x-2 pl-2">
          <Image
            className="w-8 h-8 inline-block rounded-full ring-2 mt-1"
            src={}
            alt="something"
            fill
          />
          <div>
            <div>{entity.entity_name}</div>
            <div className="text-xs">{entity.entity_type}</div>
          </div>
        </div>
      </Link>
    </>
  );
}
