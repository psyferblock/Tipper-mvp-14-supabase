import React from "react";
import ManagementNavigationDropdownMobile from "../../manageEntityComponents/ManagementNavigationDropdownMobile";
import ManageHighlights from "./highlights-Components/ManageHighlights";

export default function ManageHighlightsPage(params) {
  const entityHighlights = [1, 2, 3, 4];
  return (
    <div className="flex w-full flex-col space-y-0 sm:space-y-0">
      <div className="hidden items-center justify-between sm:flex">
        <div className="text-2xl font-bold sm:hidden ">Manage Highlights</div>
        <div className="sm:hidden">
          <ManagementNavigationDropdownMobile />
        </div>
      </div>
      <ManageHighlights listOfHighlights={entityHighlights} />
    </div>
  );
}
