"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { useSupabase } from "@/app/supabase-provider";
import { managementCategories } from "./ManagementCategories";
import { useSelectedLayoutSegment } from "next/navigation";
import { useEntityContext } from "@/app/context/entityContext/entityContextStore";
import { useParams } from "next/navigation";

export default function ManagementNavigationDropdownMobile() {
  const params = useParams();

  const currentSegment = useSelectedLayoutSegment();

  const { entityUniqueName } = useEntityContext();
  // console.log("entityUniqueName from the navigation menu ", params);
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-end rounded-md  bg-transparent  py-2  f text-base text-amethyst  ">
          Options
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="-mr-1 ml-2 h-5 w-5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-[170px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {managementCategories.map((categoryObject, index) => (
              <Menu.Item key={index}>
                {() => {
                  const isActive = categoryObject.route == currentSegment;
                  return (
                    <Link
                      href={`entity/${entityUniqueName}/manageEntity/${categoryObject.route}`}
                      className={
                        isActive
                          ? "flex justify-start bg-gray-100 px-6 py-2 text-sm text-amethyst "
                          : "flex justify-start px-6 py-2 text-sm text-black hover:bg-gray-100 hover:text-amethyst-shade focus:bg-gray-100 focus:text-amethyst-shade"
                      }
                    >
                      {categoryObject.name}
                    </Link>
                  );
                }}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
