"use client";

import ToggleButton from "@/app/root-components/tools-Components/ToggleButton";
import { useSupabase } from "@/app/supabase-provider";

import updateIsMenuCategoryPublic from "@/app/lib/update/updateIsMenuCategoryPublic";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useEntityContext } from "@/app/context/entityContext/entityContextStore";

const MenuCategoryCard = (props) => {
  const { entityUniqueName } = useEntityContext();
  const menuId = props.menuId;

  const categoryId = props.categoryId;

  const categoryName = props.categoryName;
  const isPublic = props.isMenuCategoryPublic;

  const [isCategoryPublic, setIsMenuCategoryPublic] = useState(isPublic);

  async function handleToggleButton(boolean) {
    setIsMenuCategoryPublic(boolean);
    await updateIsMenuCategoryPublic(categoryId, boolean);
    // console.log('isMenuCategoryPublic inside handle toggle button ', isMenuCategoryPublic)
  }

  return (
    <>
      <div className="flex h-fit w-full space-y-3 rounded-md bg-white px-3 py-5 drop-shadow-lg hover:cursor-pointer sm:h-[198px] sm:flex-col sm:divide-y sm:px-4">
        {/* UPPER PART OF CARD */}
        <Link
          href={`/entity/${entityUniqueName}/manageEntity/manageMenuCategories/${categoryId}`}
          passHref
        >
          <div className="sm:space-y-2">
            {/* <div className="h-20 w-20 rounded-full mx-auto overflow-hidden">
              <Image
                className=" h-24 w-24"
                src="https://cdn.ldsliving.com/dims4/default/2040800/2147483647/strip/true/crop/640x395+0+0/resize/640x395!/format/webp/quality/90/?url=http%3A%2F%2Flds-living-brightspot.s3.amazonaws.com%2F7c%2F30%2F864e82a22a48241f8a28bc7abb4d%2F42088.jpg"
                alt="menu item image"
                fill
              />
            </div> */}
            <div className="hidden text-center font-semibold text-gray-700 sm:block">
              {props.categoryName}
            </div>
          </div>
        </Link>

        {/* MOBILE VERSION */}
        <div className="flex w-full justify-between sm:hidden">
          <div className="ml-2 space-y-2 sm:hidden">
            <Link
              href={`/entity/${entityUniqueName}/manageEntity/manageMenuCategories/${categoryId}`}
              passHref
            >
              <div className="mr-2 text-start font-semibold text-gray-700 sm:hidden">
                {props.categoryName}
              </div>
            </Link>
            <div className="flex space-x-2 text-start text-sm ">
              <ToggleButton
                switchedOn={isCategoryPublic}
                handleToggleButton={handleToggleButton}
              />
              <div>Publish</div>
            </div>
          </div>
          <button
            onClick={() => {
              props.openEditNameModal(props.categoryId);
            }}
            className="flex w-fit pt-1 text-xs text-amethyst sm:hidden"
          >
            Rename
          </button>
          <div>
            <button
              onClick={() => {
                props.openDeleteMenuCategoryModal(props.categoryId);
              }}
              className="h-fit rounded-lg bg-white sm:mb-1"
            >
              {/* TRASH ICON */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="m-1 h-5 w-5 text-amethyst"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* LOWER PART OF CARD */}
        <div className="hidden items-center justify-between text-xs sm:flex sm:pt-4">
          <div>
            <div className="flex space-x-1">
              <ToggleButton
                switchedOn={isCategoryPublic}
                handleToggleButton={handleToggleButton}
              />
              <p className="pt-0.5">Publish</p>
            </div>
          </div>

          <div className="space-x-1 sm:flex sm:items-center">
            <button
              onClick={() => {
                props.openEditNameModal(props.categoryId);
              }}
              className="pb-1 text-amethyst sm:pt-1"
            >
              Rename
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuCategoryCard;
