"use client";

import { useState } from "react";
import { useManageEntityInfosContext } from "../Contexts/EntityInfoContext";

export default function ManageTags() {
  // const { tags, setTags } = useManageEntityInfosContext();

  // function handleAddButton() {
  //   const newArray = tags.concat(tag);
  //   setTags(newArray);
  // }

  // function handleDeleteTagButton(deletedTag) {
  //   const newArray = tags.filter((tag) => tag != deletedTag);
  //   setTags(newArray);
  // }

  // const [tag, setTag] = useState<string>("");

  return (
    <div className="h-fit bg-white rounded-lg p-3 sm:p-4 drop-shadow-lg">
      <div className="text-lg font-bold mb-2">Tags</div>
      <div className="text-xs">Add tags</div>

      {/* TAG INPUT FIELD */}
      <div className="flex items-center space-x-3">
        <input
          type="text"
          name="tags"
          id="price"
          className="h-12 block w-full rounded-md border-gray-400 pl-7 pr-12 mt-2 mb-6 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Type tag here"
          // value={tag}
          // onChange={(e) => setTag(e.target.value)}
        />
        <div> add button </div>
        {/* <button
          onClick={() => handleAddButton()}
          className={
            tag.length
              ? "text-sm text-blue-600 mb-3 font-medium"
              : "text-sm text-gray-600 mb-3 font-medium"
          }
          disabled={!tag.length}
        >
          Add
        </button> */}

      </div>
      {/* TAGS ROW */}
      <div className=" grid grid-flow-col gap-3 pb-3 sm:pb-2 px-1 sm:px-2 sm:py-1 overflow-x-auto sm:space-x-3">
        {/* {tags?.map((tag) => (
          <div className="px-2 py-1 w-fit flex items-center justify-between bg-gray-100 rounded-lg text-black text-xs  drop-shadow-md">
            <div className="w-fit mr-3">{tag}</div>
            <button onClick={() => handleDeleteTagButton(tag)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ))} */}
        map of all the tags
      </div>
    </div>
  );
}
