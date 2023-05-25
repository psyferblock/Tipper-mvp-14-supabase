"use client";
import CreateEntityButton from "@/app/(entityCreation)/entity-components/CreateEntityButton";
import GoToEntityButton from "@/app/(entityCreation)/entity-components/GoToEntityButton";
import { useUsersContext } from "@/app/context/userContext/userContextStore";
import { getEntityMenu } from "@/app/lib/get/getEntityMenu";

import { getEntityOfUser } from "@/app/lib/get/getEntityOfUser";
import { getMenuCategories } from "@/app/lib/get/getMenuCategories";
import { useSupabase } from "@/app/supabase-provider";
import React, { useEffect, useState } from "react";
import ProfileBasicInfoSection from "./ProfileBasicInfoSection";

function UserMainPageComponent() {
  const [entityState, setEntityState] = useState({});
  const [menuState, setMenuState] = useState({});
  const [categoryState, setCategoryState] = useState({});

  const { userId, hasEntity } = useUsersContext();
  const supabase = useSupabase();
  const { session } = useSupabase();
  // const userId= session?.user.id
  console.log("userId", userId);
  useEffect(() => {
    const getEntity = async () => {
      const entityInfos = await getEntityOfUser(userId);
      if (entityInfos) {
        setEntityState(entityInfos);
      }
    };
    getEntity();
  }, []);
  console.log("entityState", entityState);

  const entityUniqueName=entityState?.entity_unique_name
  const entityId=entityState?.id
console.log('entityId', entityId)

  // getting the menu information 
  useEffect(() => {
    const getEntity = async () => {
      const menuInfo = await getEntityMenu(entityId);
      if (menuInfo) {
        setMenuState(menuInfo);
      }
    };
    getEntity();
  }, [entityId]);

  const menuId = menuState?.id;
  console.log('menuState', menuState)
  console.log("menuId", menuId);

//// getting the category information
  useEffect(() => {
    const getEntity = async () => {
      const categoryInfo = await getMenuCategories(menuId);
      if (categoryInfo) {
        setCategoryState(categoryInfo);
      }
    };
    getEntity();
  }, [menuId]);
  console.log('categoryState', categoryState)
  const categoryId = categoryState.id;
  console.log("categoryId", categoryId);


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
            <div className="flex object-center ">
              {hasEntity ? (
                <CreateEntityButton />
              ) : (
                <GoToEntityButton
                  entityUniqueName={entityUniqueName}
                  menuId={menuId}
                  categoryId={categoryId}
                />
                
              )}

              {/* <GoToEntityButton  entityUniqueName={} entityMenuId={} entityFirstCategoryId={} /> */}
            </div>
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
