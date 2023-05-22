"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { managementCategories } from "./ManagementCategories";

export default function MobileHeaderOfCurrentManagementPage() {
  const currentSegment = useSelectedLayoutSegment();

  let currentPageHeader;
  managementCategories.map((managementCategory) => {
    if (managementCategory.route == currentSegment) {
      currentPageHeader = `Manage ${managementCategory.name}`;
    }
  });

  return <div>{currentPageHeader}</div>;
}
