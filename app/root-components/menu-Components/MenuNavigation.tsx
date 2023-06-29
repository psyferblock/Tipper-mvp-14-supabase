import { getMenuCategoriesServer } from "@/app/lib/get/getMenuCategories";
import { createServerClient } from "@/app/utils/supabase-server";
import MenuCategoriesNavLink from "./MenuCategoriesNavLink";

export default async function MenuNavigation(props) {
  //Fetching from DB
  const supabaseServer = createServerClient();
  const menuId = props.menuId;
  const entityUniqueName = props.entityUniqueName;

  const allMenuCategories = await getMenuCategoriesServer({
    supabaseServer: supabaseServer,
    menuId: menuId,
  });
  const publicMenuCategories = allMenuCategories.filter(
    (menuCategory) => menuCategory.category_public == true
  );
  return (
    <>
      <div className="grid grid-flow-col grid-rows-1 overflow-x-auto pb-3  font-semibold text-gray-400 sm:flex sm:flex-col sm:space-y-0 sm:overflow-hidden  sm:pb-0 sm:text-base ">
        {publicMenuCategories.map((category, index) => (
          <div key={index}>
            <MenuCategoriesNavLink
              categoryId={category.id}
              entityUniqueName={entityUniqueName}
              menuId={menuId}
            >
              {category.menu_category_name}
            </MenuCategoriesNavLink>
          </div>
        ))}
      </div>
    </>
  );
}
