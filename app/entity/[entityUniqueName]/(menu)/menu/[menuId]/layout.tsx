import { getEntityUsingUniqueNameServer } from "@/app/lib/get/getEntityUsingUniqueName";
import MenuNavigation from "@/app/root-components/menuComponents/MenuNavigation";

import { getExchangeRateServer } from "@/app/lib/get/getExchangeRate";
import { createServerClient } from "@/app/utils/supabase-server";

export default async function EntityPageMenuSectionLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { entityUniqueName: string };
}) {
  //Fetching from DB
  const supabaseServer =await  createServerClient();
  const entityUniqueName = params.entityUniqueName;
  const entityInfos = await getEntityUsingUniqueNameServer(
    supabaseServer,
    entityUniqueName
  );
  const entityId = entityInfos.id;

  const menuInfo = entityInfos.entity_menu_id[0];
  const menuId = menuInfo.id;

  const exchangeRate = entityInfos.exchange_rate[0].usd_lbp_rate;
  const exchangeRateFormatted = exchangeRate?.toLocaleString();

  return (
    <div  className="shadow-xl " >
      <div className=" bg-gray-100 py-6 sm:py-8 rounded-md ">
        <div className="pb-4 text-center sm:my-5 sm:pb-4" id="menuTab" >
          <div className="mx-auto w-fit border-t-4 border-amethyst pt-2 text-xl font-bold sm:pt-3">
            Our Menu
          </div>
          <div className="bg-emerald-tint text-xs font-semibold">
            (Rate: {exchangeRateFormatted} LBP)
          </div>
        </div>
        <div className=" sm:flex sm:space-x-1">
          <div className="sm:w-1/6 ">
            {/* @ts-expect-error Server Component */}
            <MenuNavigation
              menuId={menuId}
              entityUniqueName={entityUniqueName}
            />
          </div>
          {/* MENU ITEM CARDS */}
          {children}
        </div>
      </div>
    </div>
  );
}
