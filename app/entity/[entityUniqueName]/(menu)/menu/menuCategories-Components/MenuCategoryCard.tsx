"use client";

import ToggleButton from "@/app/root-Components/tools-Components/ToggleButton";
import { useSupabase } from "@/app/supabase-provider";

import updateIsMenuCategoryPublic from "@/lib/update/updateIsMenuCategoryPublic";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MenuCategoryCard(props) {
  const entityId = props.entityId;

  const categoryId = props.categoryId;

  const categoryName = props.categoryName;

  const [isMenuCategoryPublic, setIsMenuCategoryPublic] = useState(
    props.isMenuCategoryPublic
  );

  async function handleToggleButton(boolean) {
    setIsMenuCategoryPublic(boolean);
    await updateIsMenuCategoryPublic(categoryId, boolean);
  }

  const firstMenuCategoryIdOfEntity = props.firstMenuCategoryIdOfEntity;
  const isFirstMenuCategory = firstMenuCategoryIdOfEntity == categoryId;

  return (
    <>
      <div className="h-fit sm:h-[198px] w-full space-y-3 bg-white drop-shadow-lg rounded-md sm:divide-y py-5 px-3 sm:px-4 flex sm:flex-col hover:cursor-pointer">
        {/* UPPER PART OF CARD */}
        <Link
          href={`${entityId}/manageEntity/menuCategories/${categoryId}?categoryName=${categoryName}`}
        >
          <div className="sm:space-y-2">
            <div className="h-20 w-20 rounded-full mx-auto overflow-hidden">
              <img
                className=" h-24 w-24"
                src="https://cdn.ldsliving.com/dims4/default/2040800/2147483647/strip/true/crop/640x395+0+0/resize/640x395!/format/webp/quality/90/?url=http%3A%2F%2Flds-living-brightspot.s3.amazonaws.com%2F7c%2F30%2F864e82a22a48241f8a28bc7abb4d%2F42088.jpg"
                alt=""
              />
            </div>
            <div className="hidden sm:block text-center font-semibold text-gray-700">
              {props.categoryName}
            </div>
          </div>
        </Link>

        {/* MOBILE VERSION */}
        <div className="sm:hidden w-full flex justify-between">
          <div className="sm:hidden ml-2 space-y-2">
            <Link
              href={`${entityId}/manageEntity/menuCategories/${categoryId}?categoryName=${categoryName}`}
            >
              <div className="sm:hidden text-start mr-2 font-semibold text-gray-700">
                {props.categoryName}
              </div>
            </Link>
            <div className="text-sm flex text-start space-x-2 ">
              <ToggleButton
                switchedOn={isMenuCategoryPublic}
                handleToggleButton={handleToggleButton}
              />
              <div>Publish</div>
            </div>
          </div>
          <button
            onClick={() => {
              props.openEditNameModal(props.categoryId);
            }}
            className="sm:hidden w-fit text-xs flex text-blue-500 pt-1"
          >
            Rename
          </button>
          {!isFirstMenuCategory && (
            <button
              onClick={() => {
                props.openDeleteMenuCategoryModal(props.categoryId);
              }}
              className="bg-white rounded-lg sm:mb-1 h-fit"
            >
              {/* TRASH ICON */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-blue-500 m-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          )}
        </div>

        {/* LOWER PART OF CARD */}
        <div className="hidden sm:flex text-xs items-center justify-between sm:pt-4">
          <div>
            <div className="flex space-x-1">
              <ToggleButton
                switchedOn={isMenuCategoryPublic}
                handleToggleButton={handleToggleButton}
              />
              <p className="pt-0.5">Publish</p>
            </div>
          </div>

          <div className="sm:flex sm:items-center space-x-1">
            <button
              onClick={() => {
                props.openEditNameModal(props.categoryId);
              }}
              className="text-blue-500 pb-1 sm:pt-1"
            >
              Rename
            </button>
            {!isFirstMenuCategory && (
              <button
                onClick={() => {
                  props.openDeleteMenuCategoryModal(props.categoryId);
                }}
                className="bg-white rounded-lg sm:mb-1 h-fit"
              >
                {" "}
                {/* TRASH ICON */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-blue-500 m-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
