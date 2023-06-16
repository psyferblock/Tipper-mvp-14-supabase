import MainPageComponent from "./root-components/MainPageComponent/MainPageComponent";

import { createServerClient } from "./utils/supabase-server";
import MainPageNavBar from "./root-components/MainPageNav";
import NavBar from "./root-components/NavBar";

export default async function TipperLandingPage() {
  const supabaseServer = createServerClient();

  return (
    <div>
      <div>
        <div className="sticky top-0">
        <MainPageNavBar />

        </div>

        <MainPageComponent />
      </div>
    </div>
  );
}
