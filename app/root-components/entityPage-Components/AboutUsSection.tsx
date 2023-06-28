import Image from "next/image";

export default function EntityPageAboutUsSection({ description, pictureUrl }) {
  return (
    <div className="flex flex-col-reverse items-center bg-gray-200 px-2 py-6 sm:flex sm:flex-row sm:space-x-16 sm:space-y-0 sm:px-0 sm:py-12">
      {/* IMAGE */}
      <div className="relative mx-auto mt-3 aspect-video w-full sm:mt-0 sm:h-[320px] sm:w-[598px] sm:bg-gray-400">
        {pictureUrl ? (
          <Image src={pictureUrl} alt="About Us Picture" fill />
        ) : (
          <div className="sm:mt-10 sm:text-center">Picture Not Available</div>
        )}
      </div>
      {/* PARAGRAPH */}
      <div className="space-y-2 text-center sm:ml-10 sm:w-7/12 sm:space-y-3 sm:text-start">
        <div className="mx-auto w-fit border-t-8 border-amethyst pt-3 text-xl font-bold sm:ml-60">
          About Us
        </div>
        <div className="mr-8">{description}</div>
      </div>
    </div>
  );
}
