import QrCodeGenerator from "./qrCode-Components/QrCodeGenerator";

export default function ManageQrCodePage(params) {
  // const pageUrl;
console.log('logging the params in qr code ', params)
  return (
    <>
      <div className=" sm:h-fit min-h-screen sm:min-h-screen sm:w-full px-3 ">
        <QrCodeGenerator logo={null} />
        {/* <ManageQrCode /> */}
      </div>
    </>
  );
}
