"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function MenuCategoriesNavLink({
  categoryId,
  children,
  entityId,
}: {
  categoryId: number;
  children: React.ReactNode;
  entityId: number;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = `${categoryId}` == segment;
  return (
    <Link
      href={`${entityId}/menu/${categoryId}`}
      className={
        isActive
          ? "sm:flex h-fit w-max sm:w-screen sm:justify-start border-b-2 sm:border-b-0 border-b-blue-500 text-blue-500 border-transparent sm:border-transparent px-2 sm:px-0 sm:pl-5 sm:py-2 sm:border-l-4 sm:text-blue-600 sm:border-l-blue-600"
          : "sm:flex h-fit w-max sm:w-screen sm:justify-start border-b-2 sm:border-b-0 border-b-gray-400  focus:border-b-blue-500 focus:text-blue-500 border-transparent sm:border-transparent px-2 sm:px-0 sm:pl-5 sm:py-2 sm:border-l-4 sm:border-l-gray-400  sm:hover:border-l-blue-600 sm:hover:text-blue-600 sm:focus:border-l-blue-600 sm:hover:text-xl "
      }
    >
      {children}
    </Link>
  );
}
