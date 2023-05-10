import NavBar from "../root-components/NavBar";
import "../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <div>
    <div>
    
        <div className=" bg-slate-800 h-screen w-screen">
          <NavBar />
          <div>{children}</div>
        </div>
     </div>
    // </div>
  );
}
