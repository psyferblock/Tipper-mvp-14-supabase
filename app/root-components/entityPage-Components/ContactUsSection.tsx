import Image from "next/image";
import Link from "next/link";

export default function EntityPageContactUsSection({
  description,
  phoneNumber,
  pictureUrl,
}) {
  return (
    <div className="items-center space-y-4 bg-white px-4 py-4 sm:flex sm:space-x-16 sm:space-y-0 sm:px-0 sm:py-12">
      {/* PARAGRAPH */}
      <div className="space-y-2 text-center sm:ml-10 sm:w-7/12 sm:space-y-3 sm:text-start">
        <div className="mx-auto w-fit border-t-8 border-blue-500 pt-3 text-xl font-bold">
          Get in touch with us!
        </div>
        <div className="pr-8 ">{description}</div>
        <button className="h-10 w-40 rounded-3xl bg-blue-500 text-sm text-white ">
          <Link href={`tel:+961${phoneNumber}`}>Contact Us</Link>
        </button>
      </div>
      {/* IMAGE */}
      <div className="relative mx-auto h-32 w-full sm:h-[320px] sm:w-[598px] sm:bg-gray-400 ">
        {pictureUrl ? (
          <Image src={pictureUrl} alt="Contact Us Picture" fill />
        ) : (
          <div className="sm:mt-10 sm:text-center">Picture Not Available</div>
        )}
      </div>
    </div>
  );
}
