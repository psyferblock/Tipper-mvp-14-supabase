"use client"
import React, { useEffect,useRef } from 'react'
import { useEntityContext } from './context/entityContext/entityContextStore'
import { getOpeningHours } from './lib/get/getOpeningClosingHours'

const BrowserTestingComponent = () => {
  const {entityId}=useEntityContext()
const hoursRef=useRef()

  useEffect(()=>{
    const getHours=async ()=>{
  const openingHours= await getOpeningHours(entityId)
  hoursRef.current.value=openingHours

    }
    getHours()
  console.log('openingHours', openingHours)

  },[])
  return (
    <div>
        <h1 className="text-2xl font-bold text-purple-800 align-middle">testing Component</h1>
        <div className="block border-cyan-300 h-32 w-auto autofill:bg-yellow-200 overflow-auto p-3 m-3 ">{JSON.stringify(openingHours)}</div>
    </div>
  )
}

export default BrowserTestingComponent