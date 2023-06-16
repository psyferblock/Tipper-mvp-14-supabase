import Image from "next/image";
import CarouselComponent from "./carousel/CarouselComponent";

export default function EntityPageCoverPhotosSection({ entityCoverPictures }) {
  const slides = entityCoverPictures.map(
    (pictureObject) => pictureObject.media_url
  );
  console.log("slides", slides);
  const slideChildren = slides.map((slide, index) => (
    <div key={index} className=" h-auto min-w-fit">
      <Image
        className="h-auto max-w-full"
        width={500}
        height={500}
        alt="cover-photo"
        src={slide}
      />
      <div className="">{JSON.stringify(slide)}</div>
    </div>
  ));
  return (
   

    <div className=" h-64 w-full overflow-hidden rounded-lg bg-gray-300 p-2 drop-shadow-lg sm:h-[360px] sm:w-full sm:px-6">
      <CarouselComponent autoSlide={false} autoSlideInterval={3000}>
        {slideChildren}
      </CarouselComponent>
    </div>
  );
}
