"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function MenuCategoriesNavLink({
  categoryId,
  children,
  entityUniqueName,
  menuId,
}: {
  categoryId: number;
  children: React.ReactNode;
  entityUniqueName: string;
  menuId: string;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = `${categoryId}` == segment;
  return (
    <Link
      href={`entity/${entityUniqueName}/menu/${menuId}/category/${categoryId}`}
      className={
        isActive
          ? "h-fit w-max border-b-2 border-transparent border-b-blue-500 px-2 text-blue-500 sm:flex sm:w-screen sm:justify-start sm:border-b-0 sm:border-l-4 sm:border-transparent sm:border-l-blue-600 sm:px-0 sm:py-2 sm:pl-5 sm:text-blue-600"
          : "h-fit w-max border-b-2 border-transparent border-b-gray-400 px-2 focus:border-b-blue-500 focus:text-blue-500  sm:flex sm:w-screen sm:justify-start sm:border-b-0 sm:border-l-4 sm:border-transparent sm:border-l-gray-400 sm:px-0 sm:py-2 sm:pl-5  sm:hover:border-l-blue-600 sm:hover:text-xl sm:hover:text-blue-600 sm:focus:border-l-blue-600 "
      }
    >
      {children}
    </Link>
  );
}
