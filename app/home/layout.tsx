async function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-ruby-tint">{children}</div>
    </>
  );
}

export default HomeLayout;
