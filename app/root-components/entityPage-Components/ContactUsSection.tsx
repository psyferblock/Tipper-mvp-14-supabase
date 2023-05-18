import Image from "next/image";
import Link from "next/link";

export default function EntityPageContactUsSection({
  description,
  phoneNumber,
  pictureUrl,
}) {
  return (
    <div className="bg-white sm:flex items-center px-4 sm:px-0 space-y-4 sm:space-y-0 sm:space-x-16 py-4 sm:py-12">
      {/* PARAGRAPH */}
      <div className="sm:w-7/12 space-y-2 sm:space-y-3 sm:ml-10 sm:text-start text-center">
        <div className="font-bold text-xl mx-auto border-t-8 border-blue-500 w-fit pt-3">
          Get in touch with us!
        </div>
        <div className="pr-8 ">{description}</div>
        <button className="w-40 h-10 rounded-3xl bg-blue-500 text-white text-sm ">
          <Link href={`tel:+961${phoneNumber}`}>Contact Us</Link>
        </button>
      </div>
      {/* IMAGE */}
      <div className="relative sm:w-[598px] w-full mx-auto h-32 sm:h-[320px] sm:bg-gray-400">
        {pictureUrl ? (
          <Image src={pictureUrl} alt="Contact Us Picture" fill />
        ) : (
          <div className="sm:text-center sm:mt-10">Picture Not Available</div>
        )}
      </div>
    </div>
  );
}
