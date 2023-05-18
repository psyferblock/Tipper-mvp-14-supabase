import { getMenuCategoriesServer } from "@/lib/get/getMenuCategories";
import { createServerClient } from "@/utils/supabase-server";
import MenuCategoriesNavLink from "./MenuCategoriesNavLink";

export default async function MenuNavigation({ entityId }) {
  //Fetching from DB
  const supabase = createServerClient();

  const allMenuCategories = await getMenuCategoriesServer(supabase, entityId);

  const publicMenuCategories = allMenuCategories.filter(
    (menuCategory) => menuCategory.is_menu_category_public == true
  );
  return (
    <>
      <div className="grid grid-rows-1 grid-flow-col pb-3 sm:pb-0  overflow-x-auto sm:flex sm:flex-col sm:overflow-hidden font-semibold sm:text-base  text-gray-400 sm:space-y-0">
        {publicMenuCategories.map((category) => (
          <MenuCategoriesNavLink categoryId={category.id} entityId={entityId}>
            {category.menu_category_name}
          </MenuCategoriesNavLink>
        ))}
      </div>
    </>
  );
}
