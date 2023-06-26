import NavBar from "../root-components/NavBar";

async function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />

      <div className="p-2">{children}</div>
    </>
  );
}

export default HomeLayout;
