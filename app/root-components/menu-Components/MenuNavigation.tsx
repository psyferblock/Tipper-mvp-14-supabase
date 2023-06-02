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
  console.log("publicMenuCategories", publicMenuCategories);
  return (
    <>
      <div className="grid grid-rows-1 grid-flow-col pb-3 sm:pb-0  overflow-x-auto sm:flex sm:flex-col sm:overflow-hidden font-semibold sm:text-base  text-gray-400 sm:space-y-0">
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
