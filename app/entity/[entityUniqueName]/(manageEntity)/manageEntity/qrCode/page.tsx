"use client"
import { useEntityContext } from "@/app/context/entityContext/entityContextStore";
import QrCodeGenerator from "./qrCode-Components/QrCodeGenerator";
import { useEffect, useState } from "react";
import { getMenuCategories } from "@/app/lib/get/getMenuCategories";

export default function ManageQrCodePage() {
  // const pageUrl;
  const [categoryId,setCategoryId]=useState(null)
  const {entityUniqueName,entityMenuInfo,logoObject}=useEntityContext()
  const menuId =entityMenuInfo[0].id
  console.log('menuId', menuId)
  
  useEffect(()=>{
    const getCategory= async ()=>{
      const id=await getMenuCategories({menuId})
      const category=id[0].id
      setCategoryId(category)
    }
    getCategory()
  },[menuId])
  console.log('logoObject', logoObject)
  const logo=logoObject.media_url
  return (
    <>
      <div className=" sm:h-fit min-h-screen sm:min-h-screen sm:w-full px-3 ">
        <QrCodeGenerator logo={logo} entityUniqueName={entityUniqueName} menuId={menuId} categoryId={categoryId} />
        {/* <ManageQrCode /> */}
      </div>
    </>
  );
}
