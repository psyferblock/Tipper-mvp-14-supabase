export default function WorkingHoursRow(props:any) {
  const row = props.caption ? (
    <div className="items-center space-y-2 sm:flex sm:space-x-8 sm:space-y-0">
      {/* CHECKBOX AND DAY DIV */}
      <div className="flex items-center sm:mt-3 sm:w-44">
        <div className="flex items-center sm:h-5">
          <input
            id="dayCheckBox"
            type="checkbox"
            className="mr-2 rounded border border-gray-400 text-amethyst-shade focus:ring-amethyst sm:mr-0 sm:h-4 sm:w-4"
          />
        </div>
        <div className="text-sm sm:ml-3">
          <label htmlFor="dayCheckBox" className="font-medium  text-gray-700">
            {props.day}
          </label>
        </div>
      </div>

      {/* INPUT BAR FOR THE HOUR DESKTOP SIZE*/}
      <div className="hidden sm:flex sm:flex-col">
        <label htmlFor="clock" className="text-xs">
          {props.caption}
        </label>
        <div className="flex w-12 overflow-hidden rounded-md border border-gray-400 bg-white px-3 py-0 sm:w-40">
          <input type="time" id="clock" className="border-0 focus:ring-0" />
        </div>
      </div>
      <p className="hidden sm:block sm:pr-5 sm:pt-3">to</p>
      {/* SECOND TIME SETTING */}
      <div className="hidden sm:flex sm:flex-col">
        <label htmlFor="clock" className="text-xs">
          {props.caption}
        </label>
        <div className="flex w-12 overflow-hidden rounded-md border border-gray-400 bg-white px-3 py-0 sm:w-40">
          <input type="time" id="clock" className="border-0 focus:ring-0" />
        </div>
      </div>

      {/* INPUT BAR FOR THE HOUR MOBILE SIZE*/}
      <div className="flex items-center sm:hidden">
        <div className="sm:flex sm:flex-col">
          <div className="flex w-28 overflow-hidden rounded-md border border-gray-400 bg-white">
            <input
              type="time"
              id="clock"
              className="-mx-3 border-0 focus:ring-0"
            />
          </div>
        </div>
        <p className="mx-2">to</p>
        {/* SECOND TIME SETTING */}
        <div className="sm:flex sm:flex-col">
          <div className="flex w-28 overflow-hidden rounded-md border border-gray-400 bg-white">
            <input
              type="time"
              id="clock"
              className="-mx-3 border-0 focus:ring-0"
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="items-center space-y-2 sm:flex sm:space-x-8 sm:space-y-0">
      {/* CHECKBOX AND DAY DIV */}
      <div className="flex items-center sm:w-44">
        <div className="flex items-center sm:h-5">
          <input
            id="dayCheckBox"
            type="checkbox"
            className="mr-2 rounded border border-gray-400 text-amethyst-shade focus:ring-amethyst sm:mr-0 sm:h-4 sm:w-4"
          />
        </div>
        <div className="text-sm sm:ml-3">
          <label htmlFor="dayCheckBox" className="font-medium  text-gray-700">
            {props.day}
          </label>
        </div>
      </div>
      {/* INPUT BAR FOR THE HOUR */}
      <div className="hidden flex-col sm:flex">
        <label htmlFor="clock" className="text-xs">
          {props.caption}
        </label>
        <div className="flex w-12 overflow-hidden rounded-md border border-gray-400 bg-white px-3 py-0 sm:w-40">
          <input type="time" id="clock" className="border-0 focus:ring-0" />
        </div>
      </div>
      <p className="hidden sm:block sm:pl-5 sm:pr-5">to</p>
      {/* SECOND TIME SETTING */}
      <div className="hidden flex-col sm:flex">
        <label htmlFor="clock" className="text-xs">
          {props.caption}
        </label>
        <div className="flex w-12 overflow-hidden rounded-md border border-gray-400 bg-white px-3 py-0 sm:w-40">
          <input type="time" id="clock" className="border-0 focus:ring-0" />
        </div>
      </div>

      {/* INPUT BAR FOR THE HOUR MOBILE SIZE*/}
      <div className="flex items-center sm:hidden">
        <div className="sm:flex sm:flex-col">
          <div className="flex w-28 overflow-hidden rounded-md border border-gray-400 bg-white">
            <input
              type="time"
              id="clock"
              className="s -mx-3 border-0 stroke-orange-600 focus:ring-0"
            />
          </div>
        </div>
        <p className="mx-2">to</p>
        {/* SECOND TIME SETTING */}
        <div className="sm:flex sm:flex-col">
          <div className="flex w-28 overflow-hidden rounded-md border border-gray-400 bg-white">
            <input
              type="time"
              id="clock"
              className="-mx-3 border-0 focus:ring-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
  return <div>{row}</div>;
}
