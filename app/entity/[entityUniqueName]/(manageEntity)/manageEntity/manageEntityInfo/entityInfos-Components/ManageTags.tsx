"use client";

import { useEntityContext } from "@/app/context/entityContext/entityContextStore";
import { useState, useRef } from "react";

export default function ManageTags() {
  const { entityTags, handleTags, removeTag } = useEntityContext();

  const [tags, setTag] = useState<string>("");
  const tagRef = useRef();

  return (
    <div className="h-fit bg-white rounded-lg p-3 sm:p-4 drop-shadow-lg">
      <div className="text-lg font-bold mb-2">Tags</div>
      <div className="text-xs">Add tags</div>

      {/* TAG INPUT FIELD */}
      <div className="flex items-center space-x-3">
        <textarea
          type="text"
          name="tags"
          id="price"
          className="h-12 block w-full rounded-md border-gray-400 pl-7 pr-12 mt-2 mb-6 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Seperate tags with spaces..."
          // value={tag}
          ref={tagRef}
          // onChange={(e) => handleTags(e.target.value)}
        />

        <button
          onClick={() => handleTags(tagRef.current.value)}
          className={
            entityTags.length
              ? "text-sm text-blue-600 mb-3 font-medium"
              : "text-sm text-gray-600 mb-3 font-medium"
          }
          disabled={!tagRef.current}
        >
          Add
        </button>
      </div>
      {/* TAGS ROW */}
      <div className=" grid grid-flow-col gap-3 pb-3 sm:pb-2 px-1 sm:px-2 sm:py-1 overflow-x-auto sm:space-x-3">
        {entityTags?.map((tag) => (
          <small
            onClick={() =>removeTag(tag)}
            className="px-2 py-1 w-fit flex items-center justify-between bg-gray-100 rounded-lg text-black text-xs  drop-shadow-md"
            key={tag}
          >
            {tag}

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
          </small>
        ))}
      </div>
    </div>
  );
}
