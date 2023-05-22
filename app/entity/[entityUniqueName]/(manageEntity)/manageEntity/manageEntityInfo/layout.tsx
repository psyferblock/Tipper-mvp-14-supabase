
import { createServerClient } from "@/app/utils/supabase-server";


export default async function ManageEntityInfosLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { entityUniqueName: number };
}) {
  // Fetching from DB
  const supabaseServer = createServerClient();
  


  
  return (
    <>
    we are at the entity info management layout 
    
    {children}
    </>
  );
}