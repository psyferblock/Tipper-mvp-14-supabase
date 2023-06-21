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
import EntityButton from "@/app/home/[uniqueUserProfile]/profilePageComponents/EntityButton";

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

  // menu stuff
  const menuInfo = await getEntityMenuServer(supabaseServer, entityId);
  const menuId = menuInfo.id;

  // categories stuff
  const categories = await getMenuCategoriesServer({ supabaseServer, menuId });
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

  return (
    <div>
      <EntityInfosContextProvider
        entityInfos={entityInformation}
        coverPictures={arrayOfCoverPictureObjects}
        logoPictureObject={logoPictureObject}
      >
        <div className="m-2 flex justify-between p-2">
          {/* <EntityButton /> */}

          <div className="flex h-20 w-full items-center justify-between bg-gray-300 pr-3 text-xl font-bold  sm:mt-0 sm:hidden">
            {/* // this is the back tick that will take us to the entityUniqueName Page.  */}
            <Link
              href={`entity/${entityUniqueName}/menu/${menuId}
              /category/${categoryId}
              `}
              className="-ml-2 mr-1 flex w-fit items-center text-2xl font-bold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="h-6 w-6"
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
