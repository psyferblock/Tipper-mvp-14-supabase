export default function ActivitiesHistory() {
  return (
    <div className="h-fit bg-white rounded-lg sm:rounded-lg pt-2  pb-3 sm:py-4 drop-shadow-lg px-4 sm:px-6">
      <div className="font-bold sm:font-bold text-lg sm:text-lg sm:pb-2">
        Activities History
      </div>
      <div className="divide-y space-y-2">
        <div className="sm:flex space-y-1 justify-between pt-2">
          <div className="text-xs">
            You just created a new menu category, "Discounts" for your entity
            "Meshmosh"
          </div>
          <div className="text-xs text-gray-500">10-06-2023</div>
        </div>
        <div className="sm:flex  space-y-1 justify-between pt-2">
          <div className="text-xs">
            You added a link to you Instagram page on your entity's page
            "Meshomosh"
          </div>
          <div className="text-xs text-gray-500">10-06-2023</div>
        </div>
        <div className="sm:flex space-y-1 justify-between pt-2">
          <div className="text-xs">
            You added a new highlight reel on your entity's page "Meshmosh"
          </div>
          <div className="text-xs text-gray-500">10-03-2023</div>
        </div>
        <div className="sm:flex space-y-1 justify-between pt-2">
          <div className="text-xs">
            You published your entity "Meshmosh" on Tipper
          </div>
          <div className="text-xs text-gray-500">22-01-2023</div>
        </div>
      </div>
    </div>
  );
}
