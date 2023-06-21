import React from "react";

import HomePageListingOfEntitiesCards from "../entityCards-Components/HomePageListingOfEntitiesCards";
import CarouselComponent from "../entityPage-Components/carousel/CarouselComponent";
import Image from "next/image";

function MainPageComponent() {
  const mainCoverImages = [
    {
      url: "https://zluncbhyhpxonqhigbhn.supabase.co/storage/v1/object/sign/tipper/gas-mask-2273696_640.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0aXBwZXIvZ2FzLW1hc2stMjI3MzY5Nl82NDAuanBnIiwiaWF0IjoxNjg2MDQyOTg5LCJleHAiOjE3MTc1Nzg5ODl9.bg-iQ2XJdQsVed7IJmBmwJ4qFxA348EKLiQJlyip81A&t=2023-06-06T09%3A16%3A31.222Z",
    },
    {
      url: "https://zluncbhyhpxonqhigbhn.supabase.co/storage/v1/object/sign/tipper/people-2662382_640.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0aXBwZXIvcGVvcGxlLTI2NjIzODJfNjQwLmpwZyIsImlhdCI6MTY4NjA0MzAyMiwiZXhwIjoxNzE3NTc5MDIyfQ.e90wK3uA-WAQJYHw9kLbXqabrQwB3hrmBnRI6kMCkiM&t=2023-06-06T09%3A17%3A01.921Z",
    },
    {
      url: "https://zluncbhyhpxonqhigbhn.supabase.co/storage/v1/object/sign/tipper/teamwork-2198961_1280.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0aXBwZXIvdGVhbXdvcmstMjE5ODk2MV8xMjgwLnBuZyIsImlhdCI6MTY4NjA0MzAzNCwiZXhwIjoxNzE3NTc5MDM0fQ.F368TBMhdgenKEBqE2-fSEOTjGLgNyjyGkUeny--3Z0&t=2023-06-06T09%3A17%3A13.107Z",
    },
  ];
  const images = mainCoverImages.map((slide, index) => (
    <div key={index} className="h-auto w-full">
      <Image
        className="aspect-auto w-full object-center "
        width={500}
        height={500}
        alt="cover-photo"
        src={slide.url}
      />
      {JSON.stringify(slide.url)}
    </div>
  ));
  return (
    <div className="h-screen bg-ruby-white p-2 sm:px-12  ">
      <div className=" md:h-4/12  h-2/5 w-full  ">
        <CarouselComponent autoSlide={true} autoSlideInterval={5000}>
          {images}
        </CarouselComponent>
      </div>
      <HomePageListingOfEntitiesCards />
    </div>
  );
}

export default MainPageComponent;
