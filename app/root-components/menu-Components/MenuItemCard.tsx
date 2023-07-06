import Image from "next/image";
import UpvoteAndDownvote from "../voting/UpvoteAndDownvote";

export default function MenuItemCard({ menuItem, exchangeRate }) {
  const itemPictureUrl = menuItem?.item_picture_url;
  const itemPrice = (exchangeRate * menuItem.item_price).toLocaleString();
  const upVotes = 12;
  const downVotes = 5;
  return (
    <div className=" flex h-24  rounded-md bg-white p-1 drop-shadow-lg sm:m-2  sm:h-56 sm:w-auto sm:flex-col sm:overflow-hidden sm:first-letter:pb-2">
      {itemPictureUrl ? (
        <div className="relative w-5/12 sm:h-32 sm:w-full ">
          <Image src={itemPictureUrl} fill alt="menu item" />
        </div>
      ) : (
        <div className=" w-5/12 bg-gray-300 py-8 text-center text-white sm:h-32 sm:w-full sm:py-12 sm:text-center ">
          N/A
        </div>
      )}
      <div className="w-full">
        <div className=" overflow-auto ">
          <div className="h-auto  pt-1  text-xs sm:h-32  sm:pt-2">
            <div className=" justify-between  font-bold">
              <div>{menuItem.item_name}</div>
              <div>{itemPrice} LBP</div>
            </div>
            <div className="">{menuItem.item_description}</div>
            
          <UpvoteAndDownvote
              totalUpVotes={upVotes}
              totalDownVotes={downVotes}
              />
        </div>
              </div>
        {/* UPVOTE DOWNVOTE SECTION */}
      </div>
    </div>
  );
}
