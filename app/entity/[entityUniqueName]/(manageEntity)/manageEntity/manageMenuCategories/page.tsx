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
  const supabaseServer = createServerClient();

  console.log("params", params);
  // console.log("menu categgg", menuCategories);
  return (
    <div>
      <UploadPdfMenu />
      <ManageMenuCategories />
      <div>
        <h1 className="p-2 text-2xl"> notes </h1>
        <ul className="m-2">
          <li>
            {" "}
            toggle switch if on then the get request changes for the user.
          </li>
          <li>
            the upload of the pdf will happen regardless but the toggle switch
            should change a setting in the menu table to allow the pdf or the
            full menu to show{" "}
          </li>
          <li>at the bottom of the page will be the menu space. </li>
          <li>first we call the menu id </li>
          <li>then we call the menu categories </li>
          <li>then we spread the menu categories </li>
          <li>
            then we allow each category to open in a seperate page for the items
            to be uploaded/added{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
