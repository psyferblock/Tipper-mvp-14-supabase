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
      <div className="flex py-4 items-center border border-gray-300 hover:border-indigo-500 rounded-lg h-12 pl-4 mb-4">
        <div className="h-12 pt-3 text-gray-500 pr-4 border-r border-gray-300">
          LBP
        </div>
        <input
          type="number"
          id="price"
          ref={newRateRef}
          value={newExchangeRate}
          onChange={(e) => setNewExchangeRate(e.target.value)}
          className="h-6 block w-3/5 border-0 pl-4 pr-12 my-0.5 py-0 focus:border-0 focus:ring-0 sm:text-sm"
          placeholder="1506.00"
          disabled={!editing}
        />
        <div className="pt-4 sm:hidden ">
          {editing ? (
            <button
              onClick={() => handleApplyButton()}
              className=" h-fit block text-blue-500 pb-4"
            >
              Apply
            </button>
          ) : (
            <button
              onClick={() => handleEdit()}
              className=" h-fit block text-blue-500 pb-4"
            >
              Edit
            </button>
          )}
        </div>
      </div>

      {/* "EQUIVALENT" ICON FOR MOBILE SCREENS */}
      <div className="sm:hidden pr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7 my-3 mx-auto"
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
          className="w-10 h-10 pb-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
          />
        </svg>
      </div>
      {/* PRICE INPUT FIELD */}
      <div className="flex py-4 items-center border border-gray-300 rounded-lg h-12 pl-4 mb-4">
        <div className="h-12 pt-3 text-gray-500 pr-4 border-r border-gray-300">
          USD
        </div>
        <div
          id="price"
          className="h-6 block w-60 text-gray-500 border-0 pl-4 pr-12 pt-0.5 focus:border-0 focus:ring-0 sm:text-sm"
        >
          1.00
        </div>
      </div>
      {editing ? (
        <button
          onClick={() => handleApplyButton()}
          className="hidden sm:block text-blue-500 hover:text-indigo-700 pb-4"
        >
          Apply
        </button>
      ) : (
        <button
          onClick={() => handleEdit()}
          className="hidden sm:block text-blue-500 hover:text-indigo-700 pb-4"
        >
          Edit
        </button>
      )}
    </>
  );
}
