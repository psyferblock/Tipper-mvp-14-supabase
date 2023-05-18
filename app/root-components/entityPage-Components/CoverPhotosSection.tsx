import Carousel from "./carousel/CarouselComponent";

export default function EntityPageCoverPhotosSection({ entityCoverPictures }) {
  const slides = entityCoverPictures.map(
    (pictureObject) => pictureObject.media_url
  );

  return (
    // <div
    //   className="h-40 sm:h-[360px] sm:w-full bg-gray-300 rounded-lg drop-shadow-lg sm:px-6"
    //   style={{
    //     backgroundImage: `url(https://cdn.ldsliving.com/dims4/default/2040800/2147483647/strip/true/crop/640x395+0+0/resize/640x395!/format/webp/quality/90/?url=http%3A%2F%2Flds-living-brightspot.s3.amazonaws.com%2F7c%2F30%2F864e82a22a48241f8a28bc7abb4d%2F42088.jpg)`,
    //   }}
    // ></div>

    <div className="h-40 sm:h-[360px] sm:w-full bg-gray-300 rounded-lg overflow-hidden drop-shadow-lg sm:px-6">
      <Carousel autoSlide={true} autoSlideInterval={3000}>
        {slides.map((slide) => (
          <img alt="cover-photo" src={slide} />
        ))}
      </Carousel>
    </div>
  );
}
