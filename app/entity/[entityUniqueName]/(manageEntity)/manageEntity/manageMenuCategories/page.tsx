import { getMenuCategoriesServer } from "@/lib/get/getMenuCategories";
import { createServerClient } from "@/app/utils/supabase-server";
import ManageMenuCategories from "./ManageMenuCategories";

export default async function ManageMenuCategoriesPage({ params }) {
  //Fetching from DB
  const supabaseServer = createServerClient();

console.log('params', params)
  // console.log("menu categgg", menuCategories);
  return (
    <div>
      get menu id 
      send menu id to get categories 
    {/* // <ManageMenuCategories
     
    // /> */}
    </div>
  );
}
