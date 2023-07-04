import Image from "next/image";

export default function EntityPageAboutUsSection({ description, pictureUrl }) {
  return (
    <div className="flex flex-col-reverse items-center bg-gray-200/40  py-6 sm:flex sm:flex-row sm:space-x-4 sm:space-y-0 sm:px-0 sm:py-12 sm:pr-2">
      {/* IMAGE */}
      <div className="relative mx-auto mt-3 aspect-video w-full rounded-md sm:mt-0 sm:h-[320px] sm:w-[598px] sm:bg-gray-400">
        {pictureUrl ? (
          <Image src={pictureUrl} alt="About Us Picture" className="rounded-md" fill />
        ) : (
          <div className="sm:mt-10 sm:text-center">Picture Not Available</div>
        )}
      </div>
      {/* PARAGRAPH */}
      <div className=" flex flex-col space-y-2 items-center ">
        <div className=" w-fit border-t-8 border-amethyst pt-3 text-xl font-bold ">
          About Us
        </div>
        <div className="">{description}</div>
      </div>
    </div>
  );
}
