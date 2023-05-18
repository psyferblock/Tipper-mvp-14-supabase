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
      className="sm:w-32 sm:h-9 h-fit rounded-3xl sm:border-2 sm:border-gray-500 text-blue-500 sm:text-gray-500 text-xs"
    >
      Manage Entity
    </button>
  );
}
