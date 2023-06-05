import { getEntityUsingUniqueNameServer } from "@/app/lib/get/getEntityUsingUniqueName";
import MenuNavigation from "@/app/root-components/menu-Components/MenuNavigation";

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
  const supabaseServer = createServerClient();
  const entityUniqueName = params.entityUniqueName;
  // console.log("entityUniqueName", entityUniqueName);
  const entityInfos = await getEntityUsingUniqueNameServer(
    supabaseServer,
    entityUniqueName
  );
  const entityId = entityInfos.id;

  const menuInfo = entityInfos.entity_menu_id[0];
  const menuId = menuInfo.id;
  // console.log("menuId from layout ", menuId);

  // console.log("menuInfo from categoryId layout ", menuInfo);
  const exchangeRate = entityInfos.exchange_rate[0].usd_lbp_rate;
  // console.log("exchangeRate", exchangeRate);
  // // const exchangeRate = await getExchangeRateServer(supabaseServer, params.entityUniqueName);
  const exchangeRateFormatted = exchangeRate?.toLocaleString();

  return (
    <div className="bg-gray-100 py-6 sm:py-8">
      <div className="pb-4 text-center sm:my-5 sm:pb-4">
        <div className="mx-auto w-fit border-t-4 border-blue-500 pt-2 text-xl font-bold sm:pt-3">
          Our Menu
        </div>
        <div className="bg-emerald-tint text-xs font-semibold">
          (Rate: {exchangeRateFormatted} LBP)
        </div>
      </div>
      <div className=" sm:flex sm:space-x-1">
        <div className="sm:w-1/6 ">
          {/* @ts-expect-error Server Component */}
          <MenuNavigation menuId={menuId} entityUniqueName={entityUniqueName} />
        </div>
        {/* MENU ITEM CARDS */}
        {children}
      </div>
    </div>
  );
}
