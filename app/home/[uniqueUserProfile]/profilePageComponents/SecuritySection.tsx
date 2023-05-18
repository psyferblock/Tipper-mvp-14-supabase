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
    <div className="h-fit bg-white rounded-lg sm:rounded-lg pt-2 pb-3 sm:py-4 drop-shadow-lg px-4 sm:px-6">
      <div className="font-bold sm:font-semibold text-lg sm:text-lg sm:pb-2">
        Security
      </div>
      <div className="flex flex-col">
        <div className="flex items-center">
          <div className="mr-4 space-y-1">
            <label
              htmlFor="names"
              className="text-xs text-gray-600 font-medium"
            >
              Current Password
            </label>
            {/* PASSWORD INPUT FIELD */}
            <div className="flex space-x-3 sm:space-x-6">
              <input
                type="password"
                name="password"
                id="password"
                className="h-12  block rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
                placeholder="Password"
              />
              <button className="text-xs text-blue-500 mb-3 font-medium">
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
