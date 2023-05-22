"use client";

import { useSupabase } from "@/app/supabase-provider";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function CategoriesNavLink({
  categoryRoute,
  children,
  entityUniqueName,
}: {
  categoryRoute: string;
  children: React.ReactNode;
  entityUniqueName: any;
}) {
  const currentSegment = useSelectedLayoutSegment();
  const isActive = categoryRoute == currentSegment;
  return (
    <Link
      href={`${entityUniqueName}/manageEntity/${categoryRoute}`}
      className={
        isActive
          ? "text-blue-600 px-6 py-2 flex justify-start sm:bg-gray-100 "
          : "text-black px-6 py-2 flex justify-start sm:focus:text-blue-600 sm:focus:bg-gray-100 sm:hover:text-blue-600 hover:bg-gray-100"
      }
    >
      {children}
    </Link>
  );
}
