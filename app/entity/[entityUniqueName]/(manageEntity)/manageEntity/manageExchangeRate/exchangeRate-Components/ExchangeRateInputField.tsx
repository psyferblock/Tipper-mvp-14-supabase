"use client";

import { useEntityContext } from "@/app/context/entityContext/entityContextStore";
import updateExchangeRate from "@/app/lib/update/updateExchangeRate";
import { useRef, useState } from "react";

export default function ExchangeRateInputField(exchangeRate) {
  const [newExchangeRate, setNewExchangeRate] = useState(exchangeRate);
  const newRateRef = useRef(exchangeRate);

  const [editing, setEditing] = useState(false);
  const { entityId } = useEntityContext();

  async function handleApplyButton() {
    await updateExchangeRate({
      exchangeRate: newExchangeRate,
      entityId: entityId,
    });
    setEditing(false);
  }
  const handleEdit = () => {
    setEditing(true);
    newRateRef.current.focus();
  };
  return (
    <>
      <div className="mb-4 flex h-12 items-center rounded-lg border border-gray-300 py-4 pl-4 hover:border-indigo-500">
        <div className="h-12 border-r border-gray-300 pr-4 pt-3 text-gray-500">
          LBP
        </div>
        <input
          type="number"
          id="price"
          ref={newRateRef}
          value={newExchangeRate}
          onChange={(e) => setNewExchangeRate(e.target.value)}
          className="my-0.5 block h-6 w-3/5 border-0 py-0 pl-4 pr-12 focus:border-0 focus:ring-0 sm:text-sm"
          placeholder="1506.00"
          disabled={!editing}
        />
        <div className="pt-4 sm:hidden ">
          {editing ? (
            <button
              onClick={() => handleApplyButton()}
              className=" block h-fit pb-4 text-blue-500"
            >
              Apply
            </button>
          ) : (
            <button
              onClick={() => handleEdit()}
              className=" block h-fit pb-4 text-blue-500"
            >
              Edit
            </button>
          )}
        </div>
      </div>

      {/* "EQUIVALENT" ICON FOR MOBILE SCREENS */}
      <div className="pr-2 sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="mx-auto my-3 h-7 w-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
          />
        </svg>
      </div>
      <div className="hidden sm:block">
        {/* "EQUIVALENT" ICON FOR DESKTOP SCREENS */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-10 w-10 pb-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
          />
        </svg>
      </div>
      {/* PRICE INPUT FIELD */}
      <div className="mb-4 flex h-12 items-center rounded-lg border border-gray-300 py-4 pl-4">
        <div className="h-12 border-r border-gray-300 pr-4 pt-3 text-gray-500">
          USD
        </div>
        <div
          id="price"
          className="block h-6 w-60 border-0 pl-4 pr-12 pt-0.5 text-gray-500 focus:border-0 focus:ring-0 sm:text-sm"
        >
          1.00
        </div>
      </div>
      {editing ? (
        <button
          onClick={() => handleApplyButton()}
          className="hidden pb-4 text-blue-500 hover:text-indigo-700 sm:block"
        >
          Apply
        </button>
      ) : (
        <button
          onClick={() => handleEdit()}
          className="hidden pb-4 text-blue-500 hover:text-indigo-700 sm:block"
        >
          Edit
        </button>
      )}
    </>
  );
}
