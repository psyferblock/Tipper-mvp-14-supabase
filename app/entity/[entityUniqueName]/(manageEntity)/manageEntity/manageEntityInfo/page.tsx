import ManageAboutUs from "./entityInfos-Components/ManageAboutUs";
import ManageContactUs from "./entityInfos-Components/ManageContactUs";
import ManageCoverPhotos from "./entityInfos-Components/ManageCoverPhotos";
import ManageSocialMedia from "./entityInfos-Components/ManageSocialMedia";
import ManageTags from "./entityInfos-Components/ManageTags";
import ManageWorkingHours from "./entityInfos-Components/showHours/ManageWorkingHours";
import StickyBarSaveCancel from "./entityInfos-Components/StickyBarSaveCancel";
import ManageLogo from "./entityInfos-Components/ManageLogo";

export default function ManageEntityInfosPage({ params }:{params:any}) {
  return (
    <>
      <div className="flex w-full flex-col pb-10">
        <div className="space-y-5">
          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <ManageLogo />
          <ManageCoverPhotos />
          <ManageTags />
          <ManageWorkingHours />
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
