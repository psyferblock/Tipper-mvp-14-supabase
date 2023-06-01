import { getEntityUsingUniqueNameServer } from "@/app/lib/get/getEntityUsingUniqueName";
import MenuNavigation from "@/app/root-Components/menu-Components/MenuNavigation";
import { getExchangeRateServer } from "@/lib/get/getExchangeRate";
import { createServerClient } from "@/utils/supabase-server";

export default async function EntityPageMenuSectionLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { entityUniqueName: string };
}) {
  //Fetching from DB
  const supabaseServer = createServerClient();
  const entityUniqueName=params.entityUniqueName
  const entityInfos=await getEntityUsingUniqueNameServer(supabaseServer,entityUniqueName)

  const exchangeRate=entityInfos
  // const exchangeRate = await getExchangeRateServer(supabaseServer, params.entityUniqueName);
  const exchangeRateFormatted = exchangeRate?.toLocaleString();

  return (
    <div className="bg-gray-100 py-6 sm:py-8">
      <div className="text-center sm:my-5 pb-4 sm:pb-4">
        <div className="font-bold text-xl mx-auto pt-2 sm:pt-3 border-t-4 border-blue-500 w-fit">
          Our Menu
        </div>
        <div className="text-xs font-semibold">
          (Rate: {exchangeRateFormatted}LBP)
        </div>
      </div>
      <div className=" sm:flex sm:space-x-1">
        <div className="sm:w-1/6 ">
          {/* @ts-expect-error Server Component */}
          <MenuNavigation entityId={params.entityId} />
        </div>
        {/* MENU ITEM CARDS */}
        {children}
      </div>
    </div>
  );
}
