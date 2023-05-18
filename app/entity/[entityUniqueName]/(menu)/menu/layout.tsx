import React from 'react'

type menuPageProps = {
  children:React.ReactNode,
    
}
async function MenuLayout({children}:menuPageProps) {
  return (
    <div>{children}</div>
  )
}

export default  