import ManageAboutUs from "./entityInfos_components/ManageAboutUs";
import ManageContactUs from "./entityInfos_components/ManageContactUs";
import ManageCoverPhotos from "./entityInfos_components/ManageCoverPhotos";
import ManageSocialMedia from "./entityInfos_components/ManageSocialMedia";
import ManageTags from "./entityInfos_components/ManageTags";
import ManageWorkingHours from "./entityInfos_components/showHours/ManageWorkingHours";
import StickyBarSaveCancel from "./entityInfos_components/StickyBarSaveCancel";
import ManageLogo from "./entityInfos_components/ManageLogo";

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
