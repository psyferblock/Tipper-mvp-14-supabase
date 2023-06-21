"use client";
import Link from "next/link";
import React from "react";
import ProfileIcon from "./ProfileIcon";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import SignOut from "./SignOut";
import GoToAboutUsPage from "./GoTo-components/GoToAboutUsPage";
import GoToUserProfilePage from "./GoTo-components/GoToUserProfilePage";
import GoToContactUsPage from "./GoTo-components/GoToContactUsPage";
// import { ChevronDownIcon } from '@heroicons/react/20/solid'

function NavListItems() {
  return (
    <div className="">
      {/* THE DIV WHEN ITS NOT A SMALL SCREEN */}

      <div className=" invisible  md:visible  ">
        <ul className=" mr-2 flex items-center justify-between pr-2 text-sm ">
          <li className="items-center p-2 text-center">
            <Link href="#">About Us</Link>
          </li>
          <li className="p-2">
            <Link href="#">Contact Us</Link>
          </li>
          <ProfileIcon />
        </ul>
      </div>
      {/* THE DIV WHEN IT IS A SMALL SCREEN */}

      <div className=" relative md:invisible  ">
        <div className=" fixed right-2 -mt-12 w-auto  ">
          <Menu as="div" className=" relative  text-center  ">
            <div>
              <Menu.Button className=" items-right sticky bottom-0 inline-flex px-4 py-2 text-sm  font-bold text-amethyst hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <ProfileIcon />
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
              <Menu.Items className="mt-2 w-auto divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <GoToUserProfilePage />
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <GoToAboutUsPage />{" "}
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <GoToContactUsPage />{" "}
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <SignOut />
                      </div>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default NavListItems;
