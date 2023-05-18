import Image from "next/image";

export default function EntityPageAboutUsSection({ description, pictureUrl }) {
  return (
    <div className="bg-gray-200 sm:flex sm:flex-row flex flex-col-reverse items-center px-2 sm:px-0 sm:space-y-0 sm:space-x-16 py-6 sm:py-12">
      {/* IMAGE */}
      <div className="relative mt-3 sm:mt-0 sm:w-[598px] w-full mx-auto h-32 sm:h-[320px] sm:bg-gray-400">
        {pictureUrl ? (
          <Image src={pictureUrl} alt="About Us Picture" fill />
        ) : (
          <div className="sm:text-center sm:mt-10">Picture Not Available</div>
        )}
      </div>
      {/* PARAGRAPH */}
      <div className="sm:w-7/12 space-y-2 sm:space-y-3 sm:ml-10 sm:text-start text-center">
        <div className="font-bold text-xl mx-auto sm:ml-60 border-t-8 border-blue-500 w-fit pt-3">
          About Us
        </div>
        <div className="mr-8">{description}</div>
      </div>
    </div>
  );
}
