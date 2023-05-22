import { EntityInfosContextProvider } from "@/app/context/entityContext/entityContextStore";
import { createServerClient } from "@/app/utils/supabase-server";
import React from "react";
import { getEntityIdFromUniqueNameServer } from "../lib/get/getEntityIdFromUniqueName";
import { getMyEntityInfosServer } from "../lib/get/getMyEntityInfos";
import NavBar from "../root-components/NavBar";



async function EntityLayout({ children }: {children:React.ReactNode}) {
  const supabaseServer =  createServerClient();

  const {
    data: { session },
  } = await supabaseServer.auth.getSession(); /// its here where we get the session from supabase. and its details.

  const entityOwnerId = session?.user.id;

  const entityInfo = await getMyEntityInfosServer(
    supabaseServer,
    entityOwnerId
  );

  console.log("entityInfo", entityInfo);

  return (
    <>
      {/* <EntityInfosContextProvider entityInfos={entityInfo}> */}
      <NavBar/>
      layout for entity folder 
        <div>{children}</div>
      {/* </EntityInfosContextProvider> */}
    </>
  );
}

export default EntityLayout;
