"use client";
import { useRouter } from "next/navigation";

export default function ManageEntityDesktopButton() {
  const router = useRouter();

  const handleManageEntityButton = (e) => {
    e.preventDefault();
    router.push("1/1/manageEntity/entityInfo");
  };
  return (
    <button
      onClick={handleManageEntityButton}
      className="h-fit rounded-3xl text-xs text-blue-500 sm:h-9 sm:w-32 sm:border-2 sm:border-gray-500 sm:text-gray-500"
    >
      Manage Entity
    </button>
  );
}
