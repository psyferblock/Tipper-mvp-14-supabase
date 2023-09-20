import { useSupabase } from "@/app/supabase-provider";
import { getUserPassword } from "@/lib/get/getUserPassword";
import { createServerClient } from "@/utils/supabase-server";
import React from "react";

export default async function SecuritySection() {
  // const supabase = createServerClient();

  // const {
  //   data: { session },
  // } = await supabase.auth.getSession();
  // const password = await getUserPassword(supabase, session.user.id);
  // console.log("password", password);
  return (
    <div className="h-fit rounded-lg bg-white px-4 pb-3 pt-2 drop-shadow-lg sm:rounded-lg sm:px-6 sm:py-4">
      <div className="text-lg font-bold sm:pb-2 sm:text-lg sm:font-semibold">
        Security
      </div>
      <div className="flex flex-col">
        <div className="flex items-center">
          <div className="mr-4 space-y-1">
            <label
              htmlFor="names"
              className="text-xs font-medium text-gray-600"
            >
              Current Password
            </label>
            {/* PASSWORD INPUT FIELD */}
            <div className="flex space-x-3 sm:space-x-6">
              <input
                type="password"
                name="password"
                id="password"
                className="mb-3  block h-12 rounded-md border-gray-300 pl-4 pr-12 text-xs focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
              <button className="mb-3 text-xs font-medium text-blue-500">
                Change
              </button>
              {/* <button className="text-xs text-blue-500 mb-3 font-medium">
            Save
          </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
