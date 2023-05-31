"use client";
import { useEntityContext } from "@/app/context/entityContext/entityContextStore";
import uploadPictureToBucket from "@/app/lib/create/uploadPictureToBucket";
import { addMenuPdf } from "@/app/lib/update/addMenuPdf";
import ToggleButton from "@/app/root-Components/tools-Components/ToggleButton";
import Image from "next/image";
import React, { ChangeEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import MenuIdPageLayout from "../../../(menu)/menu/[menuId]/layout";
import { changePdfPublicFromMenu } from "@/app/lib/change/changePdfPublicFromMenu";
import { getEntityMenu } from "@/app/lib/get/getEntityMenu";

const UploadPdfMenu = () => {
  const [pdfMenu, setPdfMenu] = useState("");
  const [isPdfPublic, setIsPdfPublic] = useState(false);
  const [menuInfo, setMenuInfo] = useState({});
  const { entityId } = useEntityContext();

  useEffect(() => {
    const getMenuId = async () => {
      const menu = await getEntityMenu(entityId);
      setMenuInfo(menu);
      console.log("menu", menu);
    };
    getMenuId();
  }, [entityId]);

  const menuId = menuInfo.id;

  const handlePdfMenuTogglebutton = (bool) => {
    setIsPdfPublic(bool);
  };
console.log('isPdfPublic', isPdfPublic)
  

// FOR SOME REASON THIS PART OF THE CODE ISNT WORKING. MAYBE ITS THE USE EFFECT OR MAYBE ITS THE CHANGE PDF FROM MENU TO PUBLIC FUNCTION.
useEffect(() => {
    const changePdfPublic = async () => {
      //change pdf is public
      await changePdfPublicFromMenu({
        menuId: menuId,
        isPdfPublic: isPdfPublic,
      });
      console.log('were in the change pdf public menu')
      changePdfPublic()
    };
  }, [isPdfPublic]);


  async function handleUploadPdf(e: ChangeEvent<HTMLInputElement>) {
    let file;

    if (e.target.files) {
      file = e.target.files[0];
    }
    const storageSchema = "public";
    const bucket = "pdf_menu";
    const uuid = uuidv4();
    let pictureUrl = await uploadPictureToBucket({
      file,
      storageSchema: storageSchema,
      bucket: bucket,
      id: entityId,
      uuid: uuid,
    });
    //Setting the picture URL in context
    setPdfMenu(pictureUrl);
  }
  const uploadPdfToDatabase = async () => {
    const pdfMenuFromStorage = await addMenuPdf({
      pictureUrl: pdfMenu,
      menuId: menuId,
    });
    console.log("pdfMenuFromStorage", pdfMenuFromStorage);
  };
  return (
    <div className="p-2 m-2 border-2 flex flex-col justify-between ">
      <div className="">
        <div className=" p-2 m-2 flex justify-between">
          <h1 className="text-lg text-bold">usePdf</h1>
          <ToggleButton
            handleToggleButton={handlePdfMenuTogglebutton}
            switchedOn={isPdfPublic}
          />
        </div>

        <h1>
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error eum,
          odio dolorum, quas vitae voluptatem aut veritatis quos ipsa rerum
          eaque quod assumenda obcaecati fuga minus, voluptate placeat magni
          itaque!
        </h1>
      </div>
      <div className="flex justify-between">
        <div className="flex text-sm text-gray-600 align-middle justify-center">
          <label
            htmlFor="menuPdf"
            className="relative cursor-pointer rounded-md bg-gray-100 font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-400"
          >
            <span>upload pdf </span>
            <input
              id="menuPdf"
              name="menuPdf"
              type="file"
              className=""
              onChange={(e) => handleUploadPdf(e)}
            />
          </label>
        </div>
        <button
          className=" m-2 p-2 h-12 w-32 border-2 border-amethyst"
          onClick={() => uploadPdfToDatabase()}
        >
          {" "}
          save menu pdf
        </button>
      </div>
      <div className="relative bg-gray-100 sm:h-56 h-auto rounded-lg border-2 border-dashed border-gray-400 mt-1">
        {pdfMenu ? (
          <Image fill alt="menu pdf" src={pdfMenu} />
        ) : (
          "{your image comes here} "
        )}
      </div>
    </div>
  );
};

export default UploadPdfMenu;
