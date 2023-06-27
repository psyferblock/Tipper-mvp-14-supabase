"use client";
import { useEntityContext } from "@/app/context/entityContext/entityContextStore";
import QrCodeGenerator from "./qrCode-Components/QrCodeGenerator";
import { useEffect, useState } from "react";
import { getMenuCategories } from "@/app/lib/get/getMenuCategories";
import QrCodeNext from "./qrCode-Components/QrCodeNext";
import ManageQrCode from "./qrCode-Components/ManageQrCode";

export default function ManageQrCodePage() {
  // const pageUrl;
  const [categoryId, setCategoryId] = useState(null);
  const { entityUniqueName, entityMenuInfo, logoObject } = useEntityContext();
  const menuId = entityMenuInfo[0].id;

  useEffect(() => {
    const getCategory = async () => {
      const id = await getMenuCategories({ menuId });
      const category = id[0].id;
      setCategoryId(category);
    };
    getCategory();
  }, [menuId]);
  const logo = logoObject.media_url;
  // console.log('logo', logo)
  return (
    < div className="flex w-screen h-2/3 items-center justify-center p-auto">
      <div className=" min-h-screen mt-auto m-auto  sm:h-fit sm:min-h-screen sm:w-full ">
        {/* <QrCodeGenerator logo={logo} entityUniqueName={entityUniqueName} menuId={menuId} categoryId={categoryId} /> */}
        <QrCodeNext
          logo={logo}
          entityUniqueName={entityUniqueName}
          menuId={menuId}
          categoryId={categoryId}
        />

        {/* <ManageQrCode /> */}
      </div>
    </div>
  );
}
