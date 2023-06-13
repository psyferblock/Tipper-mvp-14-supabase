import Image from "next/image";
import EntityInfosContextProvider from "./context/entityContext/entityContextStore";
import UserInfoContextProvider from "./context/userContext/userContextStore";
import { getBasicPicturesServer } from "./lib/get/getBasicPictures";
import { getMyEntityInfosServer } from "./lib/get/getMyEntityInfos";
import { getMyUserInfos, getMyUserInfoServer } from "./lib/get/getMyUserInfo";
import MainPageComponent from "./root-components/MainPageComponent/MainPageComponent";
import MainPageNav from "./root-components/MainPageNav";
import HomePageListingOfEntitiesCards from "./root-components/entityCards-Components/HomePageListingOfEntitiesCards";
import CarouselComponent from "./root-components/entityPage-Components/carousel/CarouselComponent";
import { useSupabase } from "./supabase-provider";
import { createServerClient } from "./utils/supabase-server";

export default async function TipperLandingPage() {
  const supabaseServer = createServerClient();

  return (
    <div>
      {/* <UserInfoContextProvider userInfos={userInformation}> */}

      <div>
        <MainPageNav />
        <MainPageComponent />
      </div>

      {/* </UserInfoContextProvider> */}
    </div>
  );
}
