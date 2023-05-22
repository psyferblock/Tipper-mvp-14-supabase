export default function HomePageSearchBar() {
  return (
    <div className="bg-white border border-black  sm:w-7/12 sm:mx-auto flex sm:py-0 sm:px-3 rounded-full overflow-hidden">
      <div className="sm:col-span-3 border-r">
        <select
          id="sector"
          // autoComplete="country-name"
          className="truncate text-center text-xs sm:text-sm h-full block w-20 sm:w-52 border-0 bg-transparent sm:py-2 pr-5 sm:px-3 focus:border-0 focus:outline-none focus:ring-0 "
        >
          <option selected disabled hidden>
            Sectors
          </option>
          <option>All</option>
          <option>Service Industry</option>
          {/* <option>Arts & Entertainment</option>
          <option>Non-Profit</option> */}
        </select>
      </div>
      <input
        type="text"
        placeholder="Explore Entities"
        className="pl-2 sm:pl-9 sm:text-sm sm:focus:ring-0 bg-transparent w-full border-0 sm:h-12"
      />
      <button className="bg-blue-500 text-white px-3 sm:px-7 sm:-mr-3">
        Search
      </button>
    </div>
  );
}
