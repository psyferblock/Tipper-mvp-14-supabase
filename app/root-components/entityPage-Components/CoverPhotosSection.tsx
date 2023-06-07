import Image from "next/image";
import CarouselComponent from "./carousel/CarouselComponent";

export default function EntityPageCoverPhotosSection({ entityCoverPictures }) {
  const slides = entityCoverPictures.map(
    (pictureObject) => pictureObject.media_url
  );
  console.log("slides", slides);
  const slideChildren = slides.map((slide, index) => (
    <div key={index} className=" h-auto max-w-fit">
      <Image
      className="max-w-full h-auto"
        width={500}
        height={500}
        alt="cover-photo"
        src={slide}
      />
      <div className="">{JSON.stringify(slide)}</div>
    </div>
  ));
  return (
    // <div
    //   className="h-40 sm:h-[360px] sm:w-full bg-gray-300 rounded-lg drop-shadow-lg sm:px-6"
    //   style={{
    //     backgroundImage: `url(https://cdn.ldsliving.com/dims4/default/2040800/2147483647/strip/true/crop/640x395+0+0/resize/640x395!/format/webp/quality/90/?url=http%3A%2F%2Flds-living-brightspot.s3.amazonaws.com%2F7c%2F30%2F864e82a22a48241f8a28bc7abb4d%2F42088.jpg)`,
    //   }}
    // ></div>

    <div className=" h-64 w-full overflow-hidden rounded-lg bg-gray-300 p-2 drop-shadow-lg sm:h-[360px] sm:w-full sm:px-6">
      <CarouselComponent autoSlide={false} autoSlideInterval={3000}>
        {slideChildren}
      </CarouselComponent>
    </div>
  );
}
