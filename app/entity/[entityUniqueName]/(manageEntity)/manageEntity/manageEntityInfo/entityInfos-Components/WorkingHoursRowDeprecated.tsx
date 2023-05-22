export default function WorkingHoursRow(props) {
  const row = props.caption ? (
    <div className="sm:flex items-center space-y-2 sm:space-y-0 sm:space-x-8">
      {/* CHECKBOX AND DAY DIV */}
      <div className="sm:w-44 flex items-center sm:mt-3">
        <div className="flex sm:h-5 items-center">
          <input
            id="dayCheckBox"
            type="checkbox"
            className="sm:h-4 mr-2 sm:mr-0 sm:w-4 border rounded border-gray-400 text-indigo-600 focus:ring-indigo-500"
          />
        </div>
        <div className="sm:ml-3 text-sm">
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
        <div className="w-12 sm:w-40 flex bg-white border border-gray-400 py-0 px-3 rounded-md overflow-hidden">
          <input type="time" id="clock" className="border-0 focus:ring-0" />
        </div>
      </div>
      <p className="hidden sm:block sm:pr-5 sm:pt-3">to</p>
      {/* SECOND TIME SETTING */}
      <div className="hidden sm:flex sm:flex-col">
        <label htmlFor="clock" className="text-xs">
          {props.caption}
        </label>
        <div className="w-12 sm:w-40 flex bg-white border border-gray-400 py-0 px-3 rounded-md overflow-hidden">
          <input type="time" id="clock" className="border-0 focus:ring-0" />
        </div>
      </div>

      {/* INPUT BAR FOR THE HOUR MOBILE SIZE*/}
      <div className="flex items-center sm:hidden">
        <div className="sm:flex sm:flex-col">
          <div className="w-28 flex bg-white border border-gray-400 rounded-md overflow-hidden">
            <input
              type="time"
              id="clock"
              className="border-0 -mx-3 focus:ring-0"
            />
          </div>
        </div>
        <p className="mx-2">to</p>
        {/* SECOND TIME SETTING */}
        <div className="sm:flex sm:flex-col">
          <div className="w-28 flex bg-white border border-gray-400 rounded-md overflow-hidden">
            <input
              type="time"
              id="clock"
              className="border-0 -mx-3 focus:ring-0"
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="sm:flex items-center space-y-2 sm:space-y-0 sm:space-x-8">
      {/* CHECKBOX AND DAY DIV */}
      <div className="sm:w-44 flex items-center">
        <div className="flex sm:h-5 items-center">
          <input
            id="dayCheckBox"
            type="checkbox"
            className="sm:h-4 sm:mr-0 mr-2 sm:w-4 border rounded border-gray-400 text-indigo-600 focus:ring-indigo-500"
          />
        </div>
        <div className="sm:ml-3 text-sm">
          <label htmlFor="dayCheckBox" className="font-medium  text-gray-700">
            {props.day}
          </label>
        </div>
      </div>
      {/* INPUT BAR FOR THE HOUR */}
      <div className="hidden sm:flex flex-col">
        <label htmlFor="clock" className="text-xs">
          {props.caption}
        </label>
        <div className="w-12 sm:w-40 flex bg-white border border-gray-400 py-0 px-3 rounded-md overflow-hidden">
          <input type="time" id="clock" className="border-0 focus:ring-0" />
        </div>
      </div>
      <p className="hidden sm:block sm:pl-5 sm:pr-5">to</p>
      {/* SECOND TIME SETTING */}
      <div className="hidden sm:flex flex-col">
        <label htmlFor="clock" className="text-xs">
          {props.caption}
        </label>
        <div className="w-12 sm:w-40 flex bg-white border border-gray-400 py-0 px-3 rounded-md overflow-hidden">
          <input type="time" id="clock" className="border-0 focus:ring-0" />
        </div>
      </div>

      {/* INPUT BAR FOR THE HOUR MOBILE SIZE*/}
      <div className="flex items-center sm:hidden">
        <div className="sm:flex sm:flex-col">
          <div className="w-28 flex bg-white border border-gray-400 rounded-md overflow-hidden">
            <input
              type="time"
              id="clock"
              className="border-0 -mx-3 focus:ring-0 stroke-orange-600 s"
            />
          </div>
        </div>
        <p className="mx-2">to</p>
        {/* SECOND TIME SETTING */}
        <div className="sm:flex sm:flex-col">
          <div className="w-28 flex bg-white border border-gray-400 rounded-md overflow-hidden">
            <input
              type="time"
              id="clock"
              className="border-0 -mx-3 focus:ring-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
  return <div>{row}</div>;
}
