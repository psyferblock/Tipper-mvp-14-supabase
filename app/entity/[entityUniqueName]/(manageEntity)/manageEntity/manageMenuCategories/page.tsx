import { getMenuCategoriesServer } from "@/app/lib/get/getMenuCategories";
import { createServerClient } from "@/app/utils/supabase-server";
import ManageMenuCategories from "./ManageMenuCategories";
import UploadPdfMenu from "./UploadPdfMenu";

export default async function ManageMenuCategoriesPage({
  params,
}: {
  params: { entityUniqueName: string };
}) {
  //Fetching from DB
  // const supabaseServer = await createServerClient();

  return (
    <div className="" >
      
      <UploadPdfMenu />
      <ManageMenuCategories />
    
    </div>
  );
}
