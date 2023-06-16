import NavBar from "@/app/root-components/NavBar";

export default async function UniqueUserProfileLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    userUniqueName: string;
  };
}) {
  return (
    <div>
      <div className="  w-full bg-slate-800">

        <NavBar />
        <div>{children}</div>
      </div>
    </div>
  );
}
