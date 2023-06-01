import Carousel from '@/app/root-components/entityPage-Components/carousel/CarouselComponent'
import React from 'react'
import MenuItemCard from '@/app/root-components/menu-Components/MenuItemCard';
import { getExchangeRateServer } from "@/app/lib/get/getExchangeRate";
import { getMenuItemsServer } from "@/app/lib/get/getMenuItems";
import { createServerClient } from "@/app/utils/supabase-server";

 async function MenuCategoriesPage({params}:{params:{entityUniqueName:string,menuId:string,categoryId:string}}) {

  const entityUniqueName=params.entityUniqueName 
  const menuId=params.menuId
  const categoryId=params.categoryId
 


  const supabase = createServerClient();

  const allMenuItems = await getMenuItemsServer(supabase, params.categoryId);
  const publicMenuItems = allMenuItems.filter(
    (menuItem) => menuItem.is_menu_item_public == true
  );

  const exchangeRate = await getExchangeRateServer(supabase, params.entityId);
  return (
    <>
      <div className="grid h-96 gap-3 overflow-y-auto sm:h-96 sm:grid sm:grid-cols-4 sm:gap-5 sm:pb-5 sm:overflow-y-auto">
        {publicMenuItems.map((item,index) => (
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

export default MenuCategoriesPage