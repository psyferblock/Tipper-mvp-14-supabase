import ManageAboutUs from "./entityInfos-components/ManageAboutUs";
import ManageContactUs from "./entityInfos-components/ManageContactUs";
import ManageCoverPhotos from "./entityInfos-components/ManageCoverPhotos";
import ManageSocialMedia from "./entityInfos-components/ManageSocialMedia";
import ManageTags from "./entityInfos-components/ManageTags";
import ManageWorkingHours from "./entityInfos-components/showHours/ManageWorkingHours";
import StickyBarSaveCancel from "./entityInfos-components/StickyBarSaveCancel";
import ManageLogo from "./entityInfos-components/ManageLogo";

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
