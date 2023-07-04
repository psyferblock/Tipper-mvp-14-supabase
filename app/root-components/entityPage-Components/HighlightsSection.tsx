"use client";
import { useAuthContext } from "@/app/context/Store";
import { useRouter } from "next/navigation";

export default function EntityPageHighlightsSection(props) {
  const userOwnsEntity = props.userOwnsEntity;
  const entityOwnedId = props.entityOwnedId;

  const entityHighlights = props.entityHighlights;

  const router = useRouter();

  const handleAddHighlightButton = (e) => {
    e.preventDefault();
    router.push(`/entity/${entityOwnedId}/manageEntity/highlights`);
  };
  return (
    <div className="flex items-center justify-between sm:space-x-3">
      <div className="grid h-fit grid-flow-col grid-rows-1 gap-2 overflow-x-auto rounded-lg  py-2  text-sm sm:gap-6 sm:drop-shadow-lg">
        {entityHighlights.map((highlight, index) => (
          <div key={index}>
            <button className="h-20 w-20 truncate rounded-full bg-white font-semibold drop-shadow-lg sm:h-[116px] sm:w-[116px] sm:drop-shadow-none ">
              {highlight.highlight_name}
            </button>
          </div>
        ))}
      </div>

      <div className="relative h-fit sm:py-2">
        {userOwnsEntity && (
          <>
            {/* ADD HIGHLIGHT BUTTON IF USER IS ENTITY OWNER */}
            <button
              onClick={handleAddHighlightButton}
              className="wrap mr-2 h-20 w-20 items-center truncate rounded-full bg-white font-semibold drop-shadow-lg sm:my-0 sm:h-[116px] sm:w-[116px] sm:py-10 sm:pb-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="mx-auto h-5 w-5 text-amethyst sm:h-7 sm:w-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <div className="flex flex-col pb-2 text-xs text-amethyst sm:pb-2">
                <span>Add</span> <span>Highlight</span>
              </div>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
