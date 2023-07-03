import { getEntityUsingUniqueNameServer } from "@/app/lib/get/getEntityUsingUniqueName";
import { getItemsOfCategory } from "@/app/lib/get/getItemsOfCategory";
import MenuItemCard from "@/app/root-components/menu-Components/MenuItemCard";
import { createServerClient } from "@/app/utils/supabase-server";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";
import ManageMenuItems from "./ManageMenuItems";
import { parseArgs } from "util";
import { getCategoryFromCategoryId } from "@/app/lib/get/getCategoryFromCategoryId";

const menuCategoryPage = async ({
  params,
}: {
  params: { entityUniqueName: string; categoryId: string };
}) => {
  /// for the future we need to get the menuId from the entityContextProvider
  const supabaseServer = await createServerClient();

  const entityInfo = await getEntityUsingUniqueNameServer(
    supabaseServer,
    params.entityUniqueName
  );
  const entityId = entityInfo.id;
  const menuId = entityInfo.entity_menu_id[0].id;
  const categoryId = parseInt(params.categoryId);
  const categoryItems = await getItemsOfCategory(categoryId);
  const categoryName = await getCategoryFromCategoryId(categoryId);

  return (
    <div>
      <h1>Manage Categories </h1>

      <div className="align-middle">
        <ManageMenuItems
          entityUniqueName={params.entityUniqueName}
          categoryItems={categoryItems}
          menuCategoryId={categoryId}
          categoryName={categoryName.menu_category_name}
        />
      </div>
      {/* <div>
          {menuCategories ? (
            <div>
              {menuCategories.map((item, index) => {
                <div key={index}>
                  <MenuItemCard menuItem={item} exchangeRate={exchangeRate} />
                </div>;
              })}
            </div>
          ) : (
            <div> here is wehre your menu items will go </div>
          )}
        </div> */}
    </div>
  );
};

export default menuCategoryPage;
