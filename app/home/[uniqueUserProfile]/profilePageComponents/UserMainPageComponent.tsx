import React, { useEffect, useState } from "react";
import EntityButton from "./EntityButton";
import ProfileBasicInfoSection from "./ProfileBasicInfoSection";

function UserMainPageComponent() {
  return (
    <div>
      {" "}
      <div className="">
        <h1 className=" mb-4 text-3xl font-bold">Profile</h1>
        <div
          className=" w-full
           rounded-lg bg-amethyst p-2"
        >
          <h1 className="text-xl font-semibold">Create an Entity</h1>
          <h1 className="text-md mt-2 font-medium text-slate-800">
            Get verified by us or your community for the entity you run in our
            society.
          </h1>
          <EntityButton />
        </div>
        <br className="h-2 bg-diamond"></br>
        <div className=" aspect-4/3 bg-diamond   ">
          <ProfileBasicInfoSection />
        </div>
      </div>
    </div>
  );
}

export default UserMainPageComponent;
