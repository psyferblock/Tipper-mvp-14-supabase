import "./globals.css";



export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const supabase = createServerClient();


  return (
    <html lang="en">
      <div className=" bg-slate-800 h-screen w-screen">
        <body>
          
       
            {children}

        </body>
      </div>
    </html>
  );
}
