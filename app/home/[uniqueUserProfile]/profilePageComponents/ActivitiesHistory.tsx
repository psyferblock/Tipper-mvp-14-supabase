export default function ActivitiesHistory() {
  return (
    <div className="h-fit rounded-lg bg-white px-4 pb-3  pt-2 drop-shadow-lg sm:rounded-lg sm:px-6 sm:py-4">
      <div className="text-lg font-bold sm:pb-2 sm:text-lg sm:font-bold">
        Activities History
      </div>
      <div className="space-y-2 divide-y">
        <div className="justify-between space-y-1 pt-2 sm:flex">
          <div className="text-xs">
            You just created a new menu category, "Discounts" for your entity
            "Meshmosh"
          </div>
          <div className="text-xs text-gray-500">10-06-2023</div>
        </div>
        <div className="justify-between  space-y-1 pt-2 sm:flex">
          <div className="text-xs">
            You added a link to you Instagram page on your entity's page
            "Meshomosh"
          </div>
          <div className="text-xs text-gray-500">10-06-2023</div>
        </div>
        <div className="justify-between space-y-1 pt-2 sm:flex">
          <div className="text-xs">
            You added a new highlight reel on your entity's page "Meshmosh"
          </div>
          <div className="text-xs text-gray-500">10-03-2023</div>
        </div>
        <div className="justify-between space-y-1 pt-2 sm:flex">
          <div className="text-xs">
            You published your entity "Meshmosh" on Tipper
          </div>
          <div className="text-xs text-gray-500">22-01-2023</div>
        </div>
      </div>
    </div>
  );
}
