"use client";
import { useUsersContext } from "@/app/context/userContext/userContextStore";
import React, { useEffect, useState } from "react";
import { supabase } from "@/app/utils/supabase-browser";
import Link from "next/link";
import { getEntityInfos } from "@/app/lib/get/getEntityInfos";
import { useSupabase } from "@/app/supabase-provider";
import { getMyEntityInfos } from "@/app/lib/get/getMyEntityInfos";
import { getEntityMenu } from "@/app/lib/get/getEntityMenu";
import { getEntityOfUser } from "@/app/lib/get/getEntityOfUser";
import { getMenuCategories } from "@/app/lib/get/getMenuCategories";
import { getMyUserInfoServer } from "@/app/lib/get/getMyUserInfo";

function GoToEntityButton({
  entityUniqueName: entityUniqueName,
  menuId: menuId,
  categoryId: categoryId,
}) {
  return (
    <div>
      <button className="border-white-2 m-4 h-12 w-32 border-spacing-4  rounded-md border-2 border-amethyst bg-white p-3 text-center shadow-md shadow-amethyst-shade">
        <Link
          href={`/entity/${entityUniqueName}/menu/${menuId}/category/${categoryId}`}
        >
          go to entity
        </Link>
      </button>
    </div>
  );
}

export default GoToEntityButton;
