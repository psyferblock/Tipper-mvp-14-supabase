"use client";
import { useEntityContext } from "@/app/context/entityContext/entityContextStore";
import uploadPictureToBucket from "@/app/lib/create/uploadPictureToBucket";
import { addMenuPdf } from "@/app/lib/update/addMenuPdf";
import ToggleButton from "@/app/root-Components/tools-Components/ToggleButton";
import Image from "next/image";
import React, { ChangeEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import MenuIdPageLayout from "../../../(menu)/menu/[menuId]/category/layout";
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
    };
    getMenuId();
  }, [entityId]);

  const menuId = menuInfo.id;

  // an attempt to update teh database directly on toggle click

  const handlePdfMenuTogglebutton = async (bool) => {
    setIsPdfPublic(bool);
    await changePdfPublicFromMenu({
      menuId: menuId,
      isPdfPublic: isPdfPublic,
    });
  };

  // FOR SOME REASON THIS PART OF THE CODE ISNT WORKING. MAYBE ITS THE USE EFFECT OR MAYBE ITS THE CHANGE PDF FROM MENU TO PUBLIC FUNCTION.
  // useEffect(() => {
  //     const changePdfPublic = async () => {
  //       //change pdf is public
  //       await changePdfPublicFromMenu({
  //         menuId: menuId,
  //         isPdfPublic: isPdfPublic,
  //       });
  //       console.log('were in the change pdf public menu')
  //       changePdfPublic()
  //     };
  //   }, [isPdfPublic]);

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
  };
  return (
    <div className="m-2 flex flex-col justify-between border-2 p-2 ">
      <div className="">
        <div className=" m-2 flex justify-between p-2">
          <h1 className="text-bold text-lg">usePdf</h1>
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
        <div className="flex justify-center align-middle text-sm text-gray-600">
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
          className=" m-2 h-12 w-32 border-2 border-amethyst p-2"
          onClick={() => uploadPdfToDatabase()}
        >
          {" "}
          save menu pdf
        </button>
      </div>
      <div className="relative mt-1 h-auto rounded-lg border-2 border-dashed border-gray-400 bg-gray-100 sm:h-56">
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
