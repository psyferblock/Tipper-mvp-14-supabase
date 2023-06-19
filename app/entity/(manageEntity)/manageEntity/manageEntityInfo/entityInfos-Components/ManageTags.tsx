"use client";

import { useEntityContext } from "@/app/context/entityContext/entityContextStore";
import { useState, useRef } from "react";

export default function ManageTags() {
  const { entityTags, handleTags, removeTag } = useEntityContext();

  const [tags, setTag] = useState<string>("");
  const tagRef = useRef();

  return (
    <div className="h-fit rounded-lg bg-white p-3 drop-shadow-lg sm:p-4">
      <div className="mb-2 text-lg font-bold">Tags</div>
      <div className="text-xs">Add tags</div>

      {/* TAG INPUT FIELD */}
      <div className="flex items-center space-x-3">
        <textarea
          type="text"
          name="tags"
          id="price"
          className="mb-6 mt-2 block h-12 w-full rounded-md border-gray-400 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Seperate tags with spaces..."
          // value={tag}
          ref={tagRef}
          // onChange={(e) => handleTags(e.target.value)}
        />

        <button
          onClick={() => handleTags(tagRef.current.value)}
          className={
            entityTags.length
              ? "mb-3 text-sm font-medium text-blue-600"
              : "mb-3 text-sm font-medium text-gray-600"
          }
          disabled={!tagRef.current}
        >
          Add
        </button>
      </div>
      {/* TAGS ROW */}
      <div className=" grid grid-flow-col gap-3 overflow-x-auto px-1 pb-3 sm:space-x-3 sm:px-2 sm:py-1 sm:pb-2">
        {entityTags?.map((tag) => (
          <small
            onClick={() => removeTag(tag)}
            className="flex w-fit items-center justify-between rounded-lg bg-gray-100 px-2 py-1 text-xs text-black  drop-shadow-md"
            key={tag}
          >
            {tag}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4 text-gray-400"
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
