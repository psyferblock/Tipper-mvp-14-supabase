import { getMenuCategoriesServer } from "@/lib/get/getMenuCategories";
import { createServerClient } from "@/app/utils/supabase-server";
import ManageMenuCategories from "./ManageMenuCategories";

export default async function ManageMenuCategoriesPage({ params }) {
  //Fetching from DB
  const supabase = createServerClient();


  // console.log("menu categgg", menuCategories);
  return (
    <ManageMenuCategories
     
    />
  );
}
