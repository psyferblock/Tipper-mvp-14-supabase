"use client";
import React, { useEffect, useState } from "react";
import MenuItemCard from "@/app/rootComponents/menu-Components/MenuItemCard";
import { getExchangeRateServer } from "@/app/lib/get/getExchangeRate";
import { getItemsOfCategoryServer } from "@/app/lib/get/getItemsOfCategory";
import { createServerClient } from "@/app/utils/supabase_server";
import { getMenuCategoriesServer } from "@/app/lib/get/getMenuCategories";
import { getEntityInfosServer } from "@/app/lib/get/getEntityInfos";
import { getEntityUsingUniqueNameServer } from "@/app/lib/get/getEntityUsingUniqueName";
import { getEntityIdUsingUniqueNameServer } from "@/app/lib/get/getEntityIdUsingUniqueName";

// interface MenuCategoriesPageProps {
//   params: { entityUniqueName: string; menuId: string; categoryId: string };
// }

const MenuCategoriesPageComponent = ({ params }) => {
  const { entityUniqueName, menuId, categoryId } = params;

  const [publicMenuItems, setPublicMenuItems] = useState<any[]>([]);
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const supabaseServer = await createServerClient();

      const categoryItems = await getItemsOfCategoryServer({
        supabaseServer: supabaseServer,
        categoryId: categoryId,
      });
      const filteredItems = categoryItems.filter(
        (item) => item.is_menu_item_public === true
      );
      setPublicMenuItems(filteredItems);

      const entityIdObject = await getEntityIdUsingUniqueNameServer({
        supabaseServer: supabaseServer,
        entityUniqueName: entityUniqueName,
      });
      const entityId = entityIdObject?.id;
      if (entityId) {
        const rate = await getExchangeRateServer(supabaseServer, entityId);
        setExchangeRate(rate);
      }
    };

    fetchData();
  }, [categoryId, entityUniqueName]);

  return (
    <>
      <div className="scrollbar grid h-4/6 gap-3 overflow-y-auto sm:mx-3 sm:grid sm:h-96  sm:grid-cols-3 sm:overflow-y-auto sm:pb-5 md:grid-cols-5 ">
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
};

export default MenuCategoriesPageComponent;
