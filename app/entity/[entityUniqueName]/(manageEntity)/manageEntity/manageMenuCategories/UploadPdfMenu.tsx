"use client";
import { useEntityContext } from "@/app/context/entityContext/entityContextStore";
import uploadPictureToBucket from "@/app/lib/create/uploadPictureToBucket";
import ToggleButton from "@/app/root-Components/tools-Components/ToggleButton";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const UploadPdfMenu = () => {
  const [pdfMenu, setPdfMenu] = useState("");
  const { entityId } = useEntityContext();

  async function handleUploadPdf(e: ChangeEvent<HTMLInputElement>) {
    let file;

    if (e.target.files) {
      file = e.target.files[0];
    }
    const storageSchema = "public";
    const bucket = "restaurant_images";
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
  return (
    <div className="p-2 m-2 border-2 flex flex-col justify-between ">
      <div className="">
        <div className=" p-2 m-2 flex justify-between">
          <h1 className="text-lg text-bold">usePdf</h1> <ToggleButton />{" "}
        </div>

        <h1>
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error eum,
          odio dolorum, quas vitae voluptatem aut veritatis quos ipsa rerum
          eaque quod assumenda obcaecati fuga minus, voluptate placeat magni
          itaque!
        </h1>
      </div>
      <button onClick={handleUploadPdf}>upload PDF</button>
    </div>
  );
};

export default UploadPdfMenu;
