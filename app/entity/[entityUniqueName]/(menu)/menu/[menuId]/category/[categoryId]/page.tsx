import Carousel from "@/app/root-components/entityPage-Components/carousel/CarouselComponent";
import React from "react";
import MenuItemCard from "@/app/root-components/menu-Components/MenuItemCard";
import { getExchangeRateServer } from "@/app/lib/get/getExchangeRate";
import { getItemsOfCategoryServer } from "@/app/lib/get/getItemsOfCategory";
import { createServerClient } from "@/app/utils/supabase-server";
import { getMenuCategoriesServer } from "@/app/lib/get/getMenuCategories";
import { getEntityInfosServer } from "@/app/lib/get/getEntityInfos";
import { getEntityUsingUniqueNameServer } from "@/app/lib/get/getEntityUsingUniqueName";
import { getEntityIdUsingUniqueNameServer } from "@/app/lib/get/getEntityIdUsingUniqueName";

async function MenuCategoriesPage({
  params,
}: {
  params: { entityUniqueName: string; menuId: string; categoryId: string };
}) {
  const entityUniqueName = params.entityUniqueName;
  const menuId = params.menuId;
  const categoryId = params.categoryId;

  const supabaseServer = createServerClient();
  const categoryItems = await getItemsOfCategoryServer({
    supabaseServer: supabaseServer,
    categoryId: categoryId,
  });
  // console.log("categoryItems", categoryItems);
  const publicMenuItems = categoryItems.filter(
    (item) => item.is_menu_item_public == true
  );
  // console.log("publicMenuItems", publicMenuItems);

  const entityIdObject = await getEntityIdUsingUniqueNameServer({
    supabaseServer: supabaseServer,
    entityUniqueName: entityUniqueName,
  });
  // console.log('entityIdObject', entityIdObject)
  const entityId = entityIdObject.id;
  const exchangeRate = await getExchangeRateServer(supabaseServer, entityId);
  // console.log("exchangeRate", exchangeRate);

  return (
    <>
      <div className="grid h-4/6 gap-3 overflow-y-auto sm:mx-3 sm:grid sm:h-96 sm:grid-cols-3 sm:gap-5 sm:overflow-y-auto sm:pb-5 md:grid-cols-4 ">
        {publicMenuItems.map((item, index) => (
          <div key={index}>
            <MenuItemCard menuItem={item} exchangeRate={exchangeRate} />
          </div>
        ))}
      </div>
      {/* LEFT / RIGHT NAVIGATION BUTTONS */}
      {/* <div className="hidden sm:flex justify-end space-x-1 pr-1">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div> */}
    </>
  );
}

export default MenuCategoriesPage;
