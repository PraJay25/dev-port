import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide
import { Navigation } from "swiper"; // Import the Navigation module
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import Swiper navigation styles

const Slider = () => {
  const images = [
    "/logo.jpg", // Replace with your image paths
    "/sanu.jpg",
    "/",
    "/",
  ];

  return (
    <section className="py-10 bg-gray-100">
      <Swiper
        navigation={true} // Enable navigation
        modules={[Navigation]} // Pass the Navigation module
        className="w-full h-96"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <image
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
