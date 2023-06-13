"use client";
import { useEntityContext } from "@/app/context/entityContext/entityContextStore";
import { getOpeningHours } from "@/app/lib/get/getOpeningClosingHours";
import React, { useEffect, useRef, useState } from "react";
import { getEntityUsingUniqueNameServer } from "./lib/get/getEntityUsingUniqueName";

const BrowserTestingComponent = () => {
  const { entityId } = useEntityContext();
  const [openingState, setOpeningState] = useState("");
  console.log("entityId", entityId);
  const entityUniqueName = "smurfvillage-78-692-4";
  // useEffect(() => {
  //  const getInfos=async ()=>{
  //   await getEntityUsingUniqueNameServer(supabaseServer,entityUniqueName)
  // }, []);
  return (
    <div className="bg-ruby">
      <h1 className="align-middle text-2xl font-bold text-purple-800">
        testing Component
      </h1>
      <div className="m-3 block h-32 w-auto overflow-auto border-cyan-300 p-3 autofill:bg-yellow-200 ">
        {JSON.stringify(openingState)}
      </div>
    </div>
  );
};

export default BrowserTestingComponent;
