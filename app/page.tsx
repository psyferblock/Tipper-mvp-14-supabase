import MainPageComponent from "./root_components/MainPage_component/MainPageComponent";

import { createServerClient } from "./utils/supabase-server";
import MainPageNavBar from "./root_components/MainPageNav";
import NavBar from "./root_components/NavBar";

export default async function TipperLandingPage() {
  const supabaseServer = createServerClient();

  return (
    <div>
      <div className="bg-backGround   ">
        <div className="sticky top-0 z-50 ">
          <MainPageNavBar />
        </div>

        <MainPageComponent />
      </div>
    </div>
  );
}
