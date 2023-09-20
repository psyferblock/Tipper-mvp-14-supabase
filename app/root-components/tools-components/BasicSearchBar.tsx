"use client";

export default function BasicSearchBar(props) {
  return (
    <div className="flex w-full rounded-lg border-gray-400 ">
      <div className="pt-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="absolute ml-2 h-6 w-6 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder={`${props.placeHolder}`}
        className="h-12 w-full rounded-md border border-gray-400 pl-9 text-sm"
      />
    </div>
  );
}