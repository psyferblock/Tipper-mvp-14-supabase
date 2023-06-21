import Image from "next/image";
import CarouselComponent from "./carousel/CarouselComponent";

export default function EntityPageCoverPhotosSection({ entityCoverPictures }) {
  console.log("entityCoverPictures", entityCoverPictures);
  const slides = entityCoverPictures.map(
    (pictureObject) => pictureObject.media_url
  );
  console.log("slides", slides);
  const slideChildren = [
    ...slides.map((slide, index) => (
      <Image
        key={index}
        className=" w-fit overflow-y-hidden object-contain "
        width={500}
        height={500}
        alt="cover-photo"
        src={slide}
      />
    )),
  ];
  return (
    <div className="bg-ruby-white md:h-4/12 w-max-fit h-2/5 p-2 sm:px-12 ">
      <CarouselComponent autoSlide={false} autoSlideInterval={5000}>
        {slideChildren}
      </CarouselComponent>
    </div>
  );
}
