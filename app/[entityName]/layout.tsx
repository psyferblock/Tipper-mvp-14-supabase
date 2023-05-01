import NavBar from "./root-components/NavBar";
import "./globals.css";

export default function EntityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <div>
    // <div>
    <html lang="en">
      <div className=" bg-slate-800 h-screen w-screen">
        <body>
          <NavBar/>
          <div>{children}</div>
        </body>
      </div>
    </html>
    // </div>
    // </div>
  );
}
