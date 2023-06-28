"use client";
import { useRef, forwardRef } from "react";
import { useQRCode } from "next-qrcode";
import { saveAs } from "file-saver";
import { useEntityContext } from "@/app/context/entityContext/entityContextStore";

/**
 * Primero hay que crear un componente aparte que imprima el QR
 * Necesita estar envuelto en otro elemento (en este caso un div)
 * que pueda tener una referencia, esto para poder usar la libreria
 * de react-to-print (esta en sus ejemplos).
 */
const QRCode = forwardRef((props, ref) => {
  const { Canvas } = useQRCode();

  return (
    <div ref={ref}>
      <Canvas text={""} {...props} />
    </div>
  );

});
QRCode.displayName="QRCode"


export default function QrCodeNext({
  logo,
  entityUniqueName,
  menuId,
  categoryId,
}) {
  // Esta es la variable que va a tener la referencia al
  // elemento que envuelve el QR
  const qrRef = useRef();
  const pageUrl = `entity/${entityUniqueName}/menu/${menuId}/category/${categoryId}`;
  const width = "400";
  const { entityName } = useEntityContext();

  // Para descargar, se va directamente al DOM y se obtiene el
  // elemento canvas (por eso se usa Canva para genera el QR)
  // Esto esta sacado del ejemplo de como salvar un cavas a archivo
  // en la libreria de file-saver:
  // https://www.npmjs.com/package/file-saver#saving-a-canvas

  const onDownload = () => {
    const canva = document.getElementsByTagName("canvas")[0];
    canva.toBlob((blob) => {
      saveAs(blob, `${entityName}-QRcode.png`);
    });
  };

  return (
    <div className="App">
      <QRCode
        ref={qrRef} // Asi se manda la referencia al componente QR
        text={pageUrl}
        options={{
          type: "image/jpeg",
          quality: 0.3,
          level: "M",
          margin: 3,
          scale: 4,
          width: { width },
          color: {
            dark: "#010599FF",
            light: "#FFBF60FF",
          },
        }}
        logo={{
          src: { logo },
          options: {
            width: parseInt(width) * 0.1,

            x: undefined,
            y: undefined,
          },
        }}
      />

      <button onClick={onDownload}>Download</button>
    </div>
  );
}
