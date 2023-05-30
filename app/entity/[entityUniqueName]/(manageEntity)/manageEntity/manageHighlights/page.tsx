import React from 'react'
import ManagementNavigationDropdownMobile from '../../manageEntity-components/ManagementNavigationDropdownMobile'
import ManageHighlights from './highlights-Components/ManageHighlights'

export default function ManageHighlightsPage(params) {
   const  entityHighlights=[1,2,3,4]
  return (
     <div className="flex flex-col space-y-0 sm:space-y-0 w-full">
    <div className="hidden sm:flex items-center justify-between">
      <div className="sm:hidden font-bold text-2xl ">Manage Highlights</div>
      <div className="sm:hidden">
        <ManagementNavigationDropdownMobile />
      </div>
    </div>
    <ManageHighlights
      listOfHighlights={entityHighlights}
    />
  </div>
  )
}
