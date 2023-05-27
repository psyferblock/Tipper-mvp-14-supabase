"use client"

import CreateEntityButton from "@/app/(entityCreation)/entity-components/CreateEntityButton";
import GoToEntityButton from "@/app/(entityCreation)/entity-components/GoToEntityButton";
import { useUsersContext } from "@/app/context/userContext/userContextStore";
import { getEntityMenu } from "@/app/lib/get/getEntityMenu";
import { getEntityOfUser } from "@/app/lib/get/getEntityOfUser";
import { getMenuCategories } from "@/app/lib/get/getMenuCategories";
import { useSupabase } from "@/app/supabase-provider";
import React, { useEffect, useState } from "react";

const EntityButton = () => {
  const [entityState, setEntityState] = useState({});
  const [menuState, setMenuState] = useState({});
  const [categoryState, setCategoryState] = useState({});

  const { userId, hasEntity } = useUsersContext();
  const supabase = useSupabase();
  const { session } = useSupabase();

  useEffect(() => {
    const getEntity = async () => {
      const entityInfos = await getEntityOfUser(userId);
      if (entityInfos) {
        setEntityState(entityInfos);
      }
    };
    if (hasEntity) {
      getEntity();
    }
  }, []);
  console.log("entityState", entityState);

  const entityUniqueName = entityState?.entity_unique_name;
  const entityId = entityState?.id;
  console.log("entityId", entityId);

  //////////////  //////////////  //////////////  //////////////
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
  console.log("menuState", menuState);
  console.log("menuId", menuId);

  //////////////  //////////////  //////////////  //////////////
  //// getting the category informat{ion
  useEffect(() => {
    const getEntity = async () => {
      const categoryInfo = await getMenuCategories(menuId);
      if (categoryInfo) {
        setCategoryState(categoryInfo);
      }
    };
    getEntity();
  }, [menuId]);
  console.log("categoryState", categoryState);
  const categoryId = categoryState.id;
  console.log("categoryId", categoryId);
  return (
    <div>
      {" "}
      <div className="flex object-center ">
        {hasEntity === false ? (
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
  );
};

export default EntityButton;
