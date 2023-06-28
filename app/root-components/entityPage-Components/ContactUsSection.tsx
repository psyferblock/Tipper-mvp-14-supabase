import Image from "next/image";
import Link from "next/link";

export default function EntityPageContactUsSection({
  description,
  phoneNumber,
  pictureUrl,
}) {
  console.log("pictureUrl", pictureUrl);
  return (
    <div className="items-center space-y-4 bg-white py-4 sm:flex sm:space-x-16 sm:space-y-0 sm:px-0 sm:py-12">
      {/* PARAGRAPH */}
      <div className="space-y-2 text-center sm:ml-10 sm:w-7/12 sm:space-y-3 sm:text-start">
        <div className="mx-auto w-fit border-t-8 border-amethyst pt-3 text-xl font-bold">
          Get in touch with us!
        </div>
        <div className="pr-8 ">{description}</div>
        <button className="h-10 w-40 rounded-3xl bg-amethyst text-sm text-white ">
          {/* <Link href={`tel:+961${phoneNumber}`}>Contact Us</Link> */}
        </button>
      </div>
      {/* IMAGE */}
      <div className="relative mx-auto aspect-video w-full sm:h-[320px] sm:w-[598px] sm:bg-gray-400 ">
        {pictureUrl ? (
          <Image src={pictureUrl} alt="Contact Us Picture" fill />
        ) : (
          <div className="sm:mt-10 sm:text-center">Picture Not Available</div>
        )}
      </div>
    </div>
  );
}
