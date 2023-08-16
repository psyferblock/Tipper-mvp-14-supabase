import MainPageComponent from "./rootComponents/MainPageComponent/MainPageComponent";

import { createServerClient } from "./utils/supabase-server";
import MainPageNavBar from "./rootComponents/MainPageNav";
import NavBar from "./rootComponents/NavBar";

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
