import Image from "next/image";
import CarouselComponent from "./carousel/CarouselComponent";

export default function CoverPhotosSection({ coverPictures }) {
  const slides = coverPictures.map((pictureObject) => pictureObject.media_url);
  console.log("slides", slides);
  const slideChildren = slides.map((slide, index) => (
    <div key={index} className="h-full w-full ">
      <Image
        className="w-full object-center "
        width={500}
        height={500}
        alt="cover-photo"
        src={slide}
      />
      <div className="overflow-hidden mt-32">{JSON.stringify(slide)}</div>
    </div>
  ));
  return (
    <div className="bg-ruby-white md:h-4/12 h-2/5 p-2   ">
      <CarouselComponent autoSlide={false} autoSlideInterval={5000}>
        {slideChildren}
      </CarouselComponent>
    </div>
  );
}
