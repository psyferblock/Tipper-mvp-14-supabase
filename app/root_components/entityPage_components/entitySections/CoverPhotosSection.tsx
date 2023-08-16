import Image from "next/image";
import CarouselComponent from "../carousel/CarouselComponent";

export default function CoverPhotosSection({ entityCoverPictures }) {
  const slides = entityCoverPictures.map(
    (pictureObject) => pictureObject.media_url
  );
  // console.log("slides", slides);
  const slideChildren = slides.map((slide, index) => (
    <div key={index} className="h-full w-full ">
      <Image
        className="w-full object-center "
        width={500}
        height={500}
        alt="cover-photo"
        src={slide}
      />
      <div className="mt-32">{JSON.stringify(slide)}</div>
    </div>
  ));
  // console.log("slideChildren", slideChildren);
  return (
    <div className="h-2/6 rounded-sm bg-ruby-tint md:h-4/6 ">
      <CarouselComponent autoSlide={false} autoSlideInterval={5000}>
        {slideChildren}
      </CarouselComponent>
    </div>
  );
}
