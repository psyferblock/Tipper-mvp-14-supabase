import MainPageNavBar from "../root_components/MainPageNav";

async function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MainPageNavBar />

      <div className="p-2">{children}</div>
    </>
  );
}

export default HomeLayout;
