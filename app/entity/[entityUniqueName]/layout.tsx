import { EntityInfosContextProvider } from '@/app/context/entityContext/entityContextStore';
import { getMyEntityInfoServer } from '@/app/lib/get/getEntityInfo';
import { createServerClient } from '@/app/utils/supabase-server';
import React from 'react'

type entityPageProps = {
  children:React.ReactNode,
    params: {
        entityUniqueName: string
    }
}
async function EntityLayout({children,params:{entityUniqueName},}: entityPageProps
) {
    
 


  return (
    <>

    <div>{children}</div>
    </>
  )
}

export default EntityLayout