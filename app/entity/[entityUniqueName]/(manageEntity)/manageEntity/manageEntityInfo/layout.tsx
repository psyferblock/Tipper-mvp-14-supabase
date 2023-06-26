import EntityInfosContextProvider, {
  useEntityContext,
} from "@/app/context/entityContext/entityContextStore";
import { ManageOpeningHoursContextProvider } from "@/app/context/openingHoursContext/openingClosingStore";
import { useUsersContext } from "@/app/context/userContext/userContextStore";
import { getBasicPicturesServer } from "@/app/lib/get/getBasicPictures";
import { getEntityUsingUniqueNameServer } from "@/app/lib/get/getEntityUsingUniqueName";
import { getMyEntityInfosServer } from "@/app/lib/get/getMyEntityInfos";
import { getMyUserInfoServer } from "@/app/lib/get/getMyUserInfo";
import { createServerClient } from "@/app/utils/supabase-server";

export default async function ManageEntityInfosLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { entityUniqueName: number };
}) {
  // Fetching from DB
  const supabaseServer = createServerClient();

  const entityInfo = await getEntityUsingUniqueNameServer(
    supabaseServer,
    params.entityUniqueName
  );
  const entityId = entityInfo?.id;

  const openingHours = await supabaseServer
    .from("opening_hours")
    .select()
    .eq("entity_id", entityId);
  const closingHours = await supabaseServer
    .from("closingHours")
    .select()
    .eq("entity_id", entityId);

  const hoursInput = {
    openingHoursMondayFriday: openingHours?.monday_friday,
    openingHoursSaturday: openingHours?.saturday,
    openingHoursSunday: openingHours?.sunday,
    closingHoursMondayFriday: closingHours?.monday_friday,
    closingHoursSaturday: closingHours?.saturday,
    closingHoursSunday: closingHours?.sunday,
  };

  return (
    <>
      <ManageOpeningHoursContextProvider hoursInput={hoursInput}>
        {children}
      </ManageOpeningHoursContextProvider>
    </>
  );
}
