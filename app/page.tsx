import MainPageComponent from "./root-components/MainPage-component/MainPageComponent";

import { createServerSupabaseClient } from "./utils/supabase-server";
import MainPageNavBar from "./root-components/MainPageNav";
import NavBar from "./root-components/NavBar";

export default async function TipperLandingPage() {
  const supabaseServer = createServerSupabaseClient();

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
