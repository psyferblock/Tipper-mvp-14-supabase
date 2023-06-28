export default function HomePageSearchBar() {
  return (
    <div className="flex overflow-hidden rounded-full  border border-black bg-white sm:mx-auto sm:w-7/12 sm:px-3 sm:py-0">
      <div className="border-r sm:col-span-3">
        <select
          id="sector"
          // autoComplete="country-name"
          className="block h-full w-20 truncate border-0 bg-transparent pr-5 text-center text-xs focus:border-0 focus:outline-none focus:ring-0 sm:w-52 sm:px-3 sm:py-2 sm:text-sm "
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
        className="w-full border-0 bg-transparent pl-2 sm:h-12 sm:pl-9 sm:text-sm sm:focus:ring-0"
      />
      <button className="bg-amethyst-tint px-3 text-white sm:-mr-3 sm:px-7">
        Search
      </button>
    </div>
  );
}
