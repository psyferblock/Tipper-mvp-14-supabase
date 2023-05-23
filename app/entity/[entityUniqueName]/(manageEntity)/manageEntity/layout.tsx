import React from "react";
import MobileHeaderOfCurrentManagementPage from "../manageEntity-components/MobileHeaderOfCurrentManagementPage";
import Link from "next/link";
import ManagementNavigationDropdownMobile from "../manageEntity-components/ManagementNavigationDropdownMobile";
function layout({ children,params }: { children: React.ReactNode,params:any }) {
  const entityUniqueName = params.entityUniqueName;
  const firstMenuId = 12;
  const firstMenuCategoryId = 1;
  return (
    <div>
      
      <div className="flex p-2 m-2 justify-between">
      <div className="sm:hidden pr-3 flex items-center justify-between h-20 sm:mt-0 bg-gray-300 w-full  text-xl font-bold">

          {/* // this is the back tick that will take us to the entityUniqueName Page.  */}
          <Link
            href={`${entityUniqueName}/menu/${firstMenuId}/${firstMenuCategoryId}`}
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
          <ManagementNavigationDropdownMobile entityUserName={entityUniqueName} />
        </div>
        </div>
        
      </div>
      <div>{children}</div>
    </div>
  );
}

export default layout;
