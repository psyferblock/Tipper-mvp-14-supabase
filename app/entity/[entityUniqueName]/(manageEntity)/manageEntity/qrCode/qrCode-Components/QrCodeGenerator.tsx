"use client";

import React, { FormEvent, useRef, useState } from "react";
import { usePathname } from "next/navigation";
//importing qr code from qrcode.react library //
import { QRCodeCanvas } from "qrcode.react";
import ReactDOM from "react-dom";

export default function QrCodeGenerator({ logo }) {
  //Setting the page URL to which the QR code redirects you on scan
  const pageUrl = usePathname();

  //   const [url, setUrl] = useState<string>("");
  const qrRef = useRef<HTMLDivElement | null>(null);
  const [color, setColor] = useState<string>("black");
  const [size, setSize] = useState<string>("300");

  const downloadQrCode = (e: FormEvent) => {
    e.preventDefault();
    //  @ts-ignore
    // setUrl(pageUrl);
    let canvas = qrRef.current?.querySelector("canvas");
    console.log("after canvas");
    let imageUrl = canvas.toDataURL("image/png", 0.8); // programatically generating an image
    console.log("after imageUrl");

    let anchor = document.createElement("a");
    console.log("after anchor");

    anchor.href = imageUrl; // programatically creaing a link .( by adding the image to the href value in the "a" tag created )
    // console.log("imageUrl", imageUrl);

    anchor.download = "qr-code-image.png"; // programatially naming the image
    console.log("after anchor.download");

    document.body.appendChild(anchor); // attaching it to the dom
    console.log("after document.body.appendChild");

    // console.log("anchor", anchor);

    anchor.click(); // clicking on it
    console.log("after anchor.click");

    document.body.removeChild(anchor); //and removing it
    console.log("after  document.body.removeChild");

    // console.log("anchor", anchor);

    // setUrl(""); // setting the url in the form to empty
  };

  const qrCode = (
    <QRCodeCanvas
      // renderAs="canvas"
      id="canvas"
      // typeof="canvas"
      //   size={parseInt(size)}
      size={200}
      value={pageUrl}
      //background color
      bgColor="white"
      // font color
      fgColor="black"
      // this one is the level of detail of the code. some levels are used when there is more data on the code. for us level "H" should be good enough.
      level="H"
      imageSettings={{
        src: logo, // this src button gets the image needed. for now its hard coded but will make it dynamic when its tested and done.
        excavate: true,
        // these two the "width " and "height" are the size of the image. here we marked them at 10% of the total size.
        width: parseInt(size) * 0.2, // thes
        height: parseInt(size) * 0.2,
      }}
    />
  );

  return (
    <>
      {/* <form onSubmit={downloadQrCode} className=""> */}
      {/* <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
        /> */}
      {/* <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="color"
        />
        <input
          type="text"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          placeholder="size"
        /> */}
      {/* </form> */}

      <div className="mt-1 bg-white rounded-lg p-5 drop-shadow-lg">
        <div className="text-lg font-bold mb-6">Generate QR Code</div>

        <div className="flex justify-center mb-5" ref={qrRef}>
          {qrCode}
        </div>

        {/* DOWNLOAD QR CODE TEXT AND ICON */}
        <div className="text-center">
          <button onClick={downloadQrCode} className="text-blue-500">
            <div className="flex items-center space-x-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              <div> Download QR Code</div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
