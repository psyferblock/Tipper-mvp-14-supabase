import React from "react";
import MobileHeaderOfCurrentManagementPage from "../manageEntity-components/MobileHeaderOfCurrentManagementPage";
import Link from "next/link";
import ManagementNavigationDropdownMobile from "../manageEntity-components/ManagementNavigationDropdownMobile";
import { getEntityIdFromUniqueNameServer } from "@/app/lib/get/getEntityIdFromUniqueName";
import { createServerClient } from "@/app/utils/supabase-server";
import { getEntityUsingUniqueNameServer } from "@/app/lib/get/getEntityUsingUniqueName";
import {
  getEntityMenu,
  getEntityMenuServer,
} from "@/app/lib/get/getEntityMenu";
import { getMenuCategoriesServer } from "@/app/lib/get/getMenuCategories";
import { getBasicPicturesServer } from "@/app/lib/get/getBasicPictures";
import EntityInfosContextProvider from "@/app/context/entityContext/entityContextStore";

async function layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const entityUniqueName = params.entityUniqueName;
  const supabaseServer = createServerClient();

  // getting session
  const {
    data: { session },
  } = await supabaseServer.auth.getSession(); /// its here where we get the session from supabase. and its details.

  //Fetching  entity information from DB
  const entityInformation = await getEntityUsingUniqueNameServer(
    supabaseServer,
    entityUniqueName
  );
  const entityId = entityInformation?.id;
  console.log('entityId at manageEntity', entityId)

  // menu stuff
  const menuInfo = await getEntityMenuServer(supabaseServer, entityId);
  const menuId = menuInfo.id;
  
  console.log("menuId from layout/manageEntity", menuId);
  // categories stuff
  const categories = await getMenuCategoriesServer(supabaseServer, menuId);
  console.log("menu categories from  layout/manageEntity", categories );
  const categoryId = categories.id;

  const userId = session?.user.id;

  /// code from before test
  const basicPictures = await getBasicPicturesServer(supabaseServer, entityId);

  const arrayOfCoverPictureObjects = basicPictures.filter(
    (pictureObject) => pictureObject.media_category == "cover_picture"
  );

  //Getting the logo url and passing to context
  const arrayOfLogoPictureObject = basicPictures.filter(
    (pictureObject) => pictureObject.media_category == "logo_picture"
  );
  const logoPictureObject = arrayOfLogoPictureObject[0];
  console.log("logoPictureObject::", logoPictureObject);

  return (
    <div>
      <EntityInfosContextProvider
        entityInfos={entityInformation}
        coverPictures={arrayOfCoverPictureObjects}
        logoPictureObject={logoPictureObject}
      >
        <div className="flex p-2 m-2 justify-between">
          <div className="sm:hidden pr-3 flex items-center justify-between h-20 sm:mt-0 bg-gray-300 w-full  text-xl font-bold">
            {/* // this is the back tick that will take us to the entityUniqueName Page.  */}
            <Link
              href={`entity/${entityUniqueName}/menu/${menuId}
              /category/${categoryId}
              `}
              className="flex -ml-2 mr-1 w-fit items-center font-bold text-2xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </Link>

            <MobileHeaderOfCurrentManagementPage />
            <div className="sm:hidden">
              <ManagementNavigationDropdownMobile
                entityUserName={entityUniqueName}
              />
            </div>
          </div>
        </div>
        <div>{children}</div>
      </EntityInfosContextProvider>
    </div>
  );
}

export default layout;
