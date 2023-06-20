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
        className="p-auto rounded- m-auto aspect-auto w-full object-top"
        width={500}
        height={500}
        alt="cover-photo"
        src={slide}
      />
      {JSON.stringify(slide)}
    </div>
  ));
  return (
    <div className="h-screen w-full bg-ruby-tint p-2">
      <div className=" md:h-4/12  h-2/5 w-full ">
        <CarouselComponent autoSlide={false} autoSlideInterval={3000}>
          {slideChildren}
        </CarouselComponent>
      </div>
    </div>
  );
}
