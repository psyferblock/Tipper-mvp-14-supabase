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
      href={`/entity/${entityUniqueName}/manageEntity/${categoryRoute}`}
      className={
        isActive
          ? "flex justify-start px-4 py-2 text-amethyst font-medium sm:bg-gray-100 "
          : "flex justify-start px-4 py-2 text-black hover:bg-gray-100 sm:hover:text-amethyst-shade sm:focus:bg-gray-100 sm:focus:text-amethyst"
      }
    >
      {children}
    </Link>
  );
}
