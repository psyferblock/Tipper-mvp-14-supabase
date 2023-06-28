import EntitiesCardsInScrollRowDirection from "./EntitiesCardsInScrollRowDirection";
import Link from "next/link";
import { getAllEntitiesServer } from "@/app/lib/get/getAllEntitiesServer";

import { createServerClient } from "@/app/utils/supabase-server";

export default async function HomePageListingOfEntitiesCards() {
  //Fetch from DB
  const supabaseServer = createServerClient();
  let listOfEntities = await getAllEntitiesServer({
    supabaseServer: supabaseServer,
  });

  const industries = [
    {
      name: "Popular Entities",
      id: 0,
    },
    // {
    //   name: "Service Industry",
    //   id: 1,
    // },
    // {
    //   name: "Non-Profit",
    //   id: 2,
    // },
    // {
    //   name: "Arts & Entertainment",
    //   id: 3,
    // },
  ];

  return (
    <>
      {industries.map((industry, index) => (
        <div key={index} className="py-3">
          {/* MOBILE VERSION WITH FLEX */}
          <div className="flex items-center justify-between pb-2  sm:hidden ">
            <div className="text-lg font-bold sm:text-center">
              {industry.name}
            </div>
            <Link
              className="flex items-center justify-end text-sm text-blue-500 sm:space-x-1 pr-2"
              href={`entitiesBySector/${industries?.id}`}
              passHref
            >
              View All
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="h-5 w-5 pt-0.5 text-blue-500 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          </div>

          {/* DESKTOP VERSION WITHOUT FLEX */}
          <div className="hidden pb-2 sm:block">
            <div className="text-lg font-bold sm:text-center">
              {industry.name}
            </div>
            <Link
              className="mr-2 flex items-center justify-end text-sm text-blue-500 sm:space-x-1 pr-2"
              href={`entitiesBySector`}
              passHref
            >
              View All
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="h-5 w-5 pt-0.5 text-blue-500 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          </div>
          <div className="h-auto ">
            <EntitiesCardsInScrollRowDirection
              listOfEntities={listOfEntities}
              industryId={industry.id}
            />
          </div>
        </div>
      ))}
    </>
  );
}
