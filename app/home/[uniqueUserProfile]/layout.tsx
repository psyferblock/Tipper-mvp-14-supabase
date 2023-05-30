import NavBar from "@/app/root-components/NavBar";



export default async function UniqueUserProfileLayout({
  children,
  params
}: {
   children: React.ReactNode;
  params: {
    userUniqueName: string;
  };
}) {
 

  return (
    <div>
   
      <div className=" bg-slate-800 h-screen w-screen">
        <NavBar />
        <div>{children}</div>
      </div>
   
    </div>
  );
}
