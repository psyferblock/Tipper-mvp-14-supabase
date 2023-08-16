"use client";
import { useEntityContext } from "@/app/context/entityContext/entityContextStore";
import uploadPictureToBucket from "@/app/lib/create/uploadPictureToBucket";
import { addMenuPdf } from "@/app/lib/update/addMenuPdf";
import ToggleButton from "@/app/root_components/toolsComponents/ToggleButton";
import Image from "next/image";
import React, { ChangeEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
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
    await addMenuPdf({
      pictureUrl: pdfMenu,
      menuId: menuId,
    });
  };
  async function handleDeletePictureButton() {
    setPdfMenu("");
  }
  return (
    <div className="m-2  h-auto flex flex-col justify-between border-2 p-2 ">
      <div className="">
        <div className=" my-2 flex justify-between">
          <h1 className="text-bold text-lg">Pdf Menu Public</h1>
          <ToggleButton
            handleToggleButton={handlePdfMenuTogglebutton}
            switchedOn={!isPdfPublic}
          />
        </div>

        <h1 className="mb-2"> Upload Menu Pdf</h1>
      </div>
      <div className="flex h-auto w-auto justify-between">
        <div className="wrap mb-2 flex h-fit w-3/5 space-x-2 overflow-hidden text-sm text-gray-600">
          <label
            htmlFor="menuPdf"
            className="relative cursor-pointer rounded-md bg-gray-100 font-medium text-amethyst-shade focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-400"
          >
            <input
              id="menuPdf"
              name="menuPdf"
              type="file"
              className="m-auto h-12 p-2"
              onChange={(e) => handleUploadPdf(e)}
            />
          </label>
        </div>
        <button
          className="border-white-2  h-12 w-32 border-spacing-4  rounded-md border-2 border-amethyst bg-white  text-center shadow-md shadow-amethyst-shade"
          onClick={() => uploadPdfToDatabase()}
        >
          {" "}
          Save pdf
        </button>
      </div>
      <div className="relative mt-1 h-auto w-auto rounded-lg border-2 border-dashed border-gray-400 bg-gray-100 ">
        {pdfMenu ? (
          <>
            <Image
              width={500}
              height={500}
              alt="menu pdf"
              className="h-fit min-h-min"
              src={pdfMenu}
            />
            <button
              onClick={() => handleDeletePictureButton()}
              className="absolute bottom-0 right-0 z-10 mb-3 mr-3 h-fit rounded-lg bg-diamond"
            >
              {/* TRASH ICON */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="z-10 m-1 h-6 w-6 text-amethyst"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </>
        ) : (
          "{your image comes here} "
        )}
      </div>
    </div>
  );
};

export default UploadPdfMenu;
