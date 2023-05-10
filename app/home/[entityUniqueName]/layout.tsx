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