import { EntityInfosContextProvider } from '@/app/context/entityContext/entityContextStore';
import { getMyEntityInfoServer } from '@/app/lib/get/getEntityInfo';
import { createServerClient } from '@/app/utils/supabase-server';
import React from 'react'
import { getEntityIdFromUniqueNameServer } from '../lib/get/getEntityIdFromUniqueName';

type entityPageProps = {
  children:React.ReactNode,
    params: {
        entityUniqueName: string
    }
}
async function EntityLayout({children}: entityPageProps
) {
    
 
  const supabaseServer = createServerClient();

  const {
    data: { session },
  } = await supabaseServer.auth.getSession(); /// its here where we get the session from supabase. and its details.

 const entityOwnerId=session?.user.id

 const entityInfo=await getMyEntityInfoServer(entityOwnerId)


 console.log('entityInfo', entityInfo)

 
  

  return (
    <>
        <EntityInfosContextProvider entityInfos={entityInfo}>

    <div>{children}</div>
    </EntityInfosContextProvider>
    </>
  )
}

export default EntityLayout