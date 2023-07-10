// "use client";
import React, { useEffect, useState } from "react";

import UserMainPageComponent from "./profilePageComponents/UserMainPageComponent";

async function userProfilePage({ params }) {
  return (
    <>
    <div className="w-full ">

      <UserMainPageComponent />
    </div>
    </>
  );
}

export default userProfilePage;
