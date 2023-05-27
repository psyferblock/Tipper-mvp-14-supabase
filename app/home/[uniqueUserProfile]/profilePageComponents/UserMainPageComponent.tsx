
import React, { useEffect, useState } from "react";
import EntityButton from "./EntityButton";
import ProfileBasicInfoSection from "./ProfileBasicInfoSection";

function UserMainPageComponent() {


  return (
    <div>
      {" "}
      <div className="bg-pearl w-screen h-full p-2">
        <div>
          <h1 className="h1 text-3xl font-bold mb-4">Profile</h1>
          <div className="bg-amethyst w-full aspect-4/3 rounded-lg p-4">
            <h1 className="text-xl font-semibold">Create an Entity</h1>
            <h1 className="text-md font-medium mt-2 text-slate-800">
              Get verified by us or your community for the entity you run in our
              society.
            </h1>
            <EntityButton/>
          </div>
          <div className=" relative p-3 m-2 bg-diamond aspect-4/3 ">
            <ProfileBasicInfoSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserMainPageComponent;
