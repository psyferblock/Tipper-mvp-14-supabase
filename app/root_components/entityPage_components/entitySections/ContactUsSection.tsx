import Image from "next/image";
import Link from "next/link";
import PhoneCallButton from "../ConnectWithUsButtons/PhoneCallButton";
import TextUsWhatsappButton from "../ConnectWithUsButtons/TextUsWhatsappButton";

export default function EntityPageContactUsSection({
  description,
  phoneNumber,
  pictureUrl,
}) {
  // console.log("pictureUrl", pictureUrl);
  return (
    <div className=" items-center space-y-4 bg-gray-200/40 py-4 sm:flex sm:space-x-16 sm:space-y-0 sm:px-0 sm:py-12 sm:pr-2">
      {/* PARAGRAPH */}
      <div className=" space-y-2 object-center text-center sm:w-7/12 sm:space-y-3 sm:text-start">
        <div className="mx-auto w-fit border-t-8 border-amethyst pt-3 text-xl font-bold">
          Get in touch with us!
        </div>
        <div className=" text-center ">{description}</div>
        <div className="text-center">
          <button className="h-10 w-40  rounded-3xl bg-amethyst text-sm text-white ">
            {/* <Link href={`tel:+961${phoneNumber}`}>Contact Us</Link> */}
            <TextUsWhatsappButton phoneNumber={phoneNumber} off={true} />
            Contact Us
          </button>
        </div>
      </div>
      {/* IMAGE */}
      <div className="relative mx-auto aspect-video w-full rounded-md  sm:h-[320px] sm:w-[598px] sm:bg-gray-400 ">
        {pictureUrl ? (
          <Image
            src={pictureUrl}
            alt="Contact Us Picture"
            className="rounded-md"
            fill
          />
        ) : (
          <div className="sm:mt-10 sm:text-center">Picture Not Available</div>
        )}
      </div>
    </div>
  );
}
