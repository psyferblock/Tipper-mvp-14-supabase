import EntitiesCardsInScrollRowDirection from "./EntitiesCardsInScrollRowDirection";
import Link from "next/link";
import { getAllEntitiesServer } from "@/lib/get/getAllEntities";

import { createServerClient } from "@/utils/supabase-server";

export default async function HomePageListingOfEntitiesCards(props) {
  //Fetch from DB
  const supabase = createServerClient();
  let listOfEntities = await getAllEntitiesServer(supabase);

  const industries = [
    {
      name: "Popular Entities",
      id: 0,
    },
    {
      name: "Service Industry",
      id: 1,
    },
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
      {industries.map((industry) => (
        <div>
          {/* MOBILE VERSION WITH FLEX */}
          <div className="sm:hidden flex items-center justify-between  pb-2 sm:pb-2">
            <div className="font-bold text-lg sm:text-center">
              {industry.name}
            </div>
            <Link
              className="text-sm text-blue-500 justify-end flex items-center sm:space-x-1"
              href={`entitiesBySector`}
            >
              View All
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5 text-blue-500 pt-0.5 "
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
          <div className="hidden sm:block pb-2">
            <div className="font-bold text-lg sm:text-center">
              {industry.name}
            </div>
            <Link
              className="text-sm text-blue-500 justify-end flex items-center sm:space-x-1"
              href={`entitiesBySector`}
            >
              View All
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5 text-blue-500 pt-0.5 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          </div>
          <EntitiesCardsInScrollRowDirection
            listOfEntities={listOfEntities}
            industryId={industry.id}
          />
        </div>
      ))}
    </>
  );
}
