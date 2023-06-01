"use client";
import { useEntityContext } from "@/app/context/entityContext/entityContextStore";
import { getOpeningHours } from "@/app/lib/get/getOpeningClosingHours";
import React, { useEffect, useRef, useState } from "react";
import { getEntityUsingUniqueNameServer } from "./lib/get/getEntityUsingUniqueName";

const BrowserTestingComponent = () => {
  const { entityId } = useEntityContext();
  const [openingState, setOpeningState] = useState("");
console.log('entityId', entityId)
const entityUniqueName='smurfvillage-78-692-4'
  // useEffect(() => {
  //  const getInfos=async ()=>{
  //   await getEntityUsingUniqueNameServer(supabaseServer,entityUniqueName)
  // }, []);
  return (
    <div className="bg-ruby">
      <h1 className="text-2xl font-bold text-purple-800 align-middle">
        testing Component
      </h1>
      <div className="block border-cyan-300 h-32 w-auto autofill:bg-yellow-200 overflow-auto p-3 m-3 ">
        {JSON.stringify(openingState)}
      </div>
    </div>
  );
};

export default BrowserTestingComponent;
