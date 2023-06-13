import Image from "next/image";

export default function MenuItemCard({ menuItem, exchangeRate }) {
  const itemPictureUrl = menuItem?.item_picture_url;
  console.log("exchangeRate", exchangeRate);
  const itemPrice = (exchangeRate * menuItem.item_price).toLocaleString();

  return (
    <div className=" flex h-24 overflow-hidden rounded-md bg-white drop-shadow-lg sm:m-2  sm:h-72 sm:w-56 sm:flex-col sm:overflow-hidden sm:first-letter:pb-2">
      {itemPictureUrl ? (
        <div className="relative w-5/12 sm:h-32 sm:w-full">
          <Image src={itemPictureUrl} fill alt="menu item" />
        </div>
      ) : (
        <div className=" w-5/12 bg-gray-300 py-8 text-center text-white sm:h-32 sm:w-full sm:py-12 sm:text-center ">
          N/A
        </div>
      )}
      <div className="w-full">
        <div className="overflow-y-auto">
          <div className="h-[72px] pt-1  text-xs sm:h-32 sm:pb-5 sm:pt-2">
            <div className=" justify-between px-2 font-bold">
              <div>{menuItem.item_name}</div>
              <div>{itemPrice} LBP</div>
            </div>
            <div className="px-2 sm:px-3">{menuItem.item_description}</div>
          </div>
        </div>
        {/* UPVOTE DOWNVOTE SECTION */}
        <div className="absolute bottom-0 flex h-5 w-full justify-start space-x-3 bg-white pr-2 text-xs sm:h-8 sm:pl-8">
          <button className="flex items-center text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="h-7 w-7 fill-green-500 pt-1"
            >
              <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
            </svg>
            Upvote
          </button>
          <button className="flex items-center text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="h-6 w-6 fill-red-500 pb-0.5"
            >
              <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
            </svg>
            Downvote
          </button>
        </div>
      </div>
    </div>
  );
}
