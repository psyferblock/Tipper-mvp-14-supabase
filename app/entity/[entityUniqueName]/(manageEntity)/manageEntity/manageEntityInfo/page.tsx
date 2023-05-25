import ManageAboutUs from "./entityInfos-Components/ManageAboutUs";
import ManageContactUs from "./entityInfos-Components/ManageContactUs";
import ManageCoverPhotos from "./entityInfos-Components/ManageCoverPhotos";
import ManageSocialMedia from "./entityInfos-Components/ManageSocialMedia";
import ManageTags from "./entityInfos-Components/ManageTags";
import ManageWorkingHours from "./entityInfos-Components/showHours/ManageWorkingHours";
import StickyBarSaveCancel from "./entityInfos-Components/StickyBarSaveCancel";
import ManageLogo from "./entityInfos-Components/ManageLogo";
import BrowserTestingComponent from "@/app/BrowserTestingComponent";

export default function ManageEntityInfosPage({ params }) {
  return (
    <>
      <div className="flex flex-col w-full pb-10">
        <div className="space-y-5">
          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <ManageLogo />//done
          <ManageCoverPhotos /> //done
          <ManageTags />
          {/* <ManageWorkingHours /> */}
          <BrowserTestingComponent />
          <ManageSocialMedia />
          <ManageAboutUs entityUniqueName={params.entityUniqueName} />
          <ManageContactUs entityUniqueName={params.entityUniqueName} />
          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <StickyBarSaveCancel entityUniqueName={params.entityUniqueName} />
        </div>
      </div>
    </>
  );
}
